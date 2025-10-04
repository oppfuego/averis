import { CVOrder } from "../models/cvOrder.model";
import { User } from "../models/user.model";
import { ENV } from "../config/env";
import OpenAI from "openai";
import { CVOrderType } from "../types/cv.types";

const openai = new OpenAI({ apiKey: ENV.OPENAI_API_KEY });

const log = (fn: string, msg: string, data?: any) => {
    const time = new Date().toISOString();
    console.log(`[${time}] 🧩 [cvService.${fn}] ${msg}`, data ?? "");
};

// ---------- PROMPTS ----------
const buildSimplePrompt = (b: any, email: string) => `
Create a concise professional CV in English.
Use sections: Summary, Work Experience, Education, Skills.

Name: ${b.fullName}
Email: ${email}
Phone: ${b.phone}
Industry: ${b.industry}
Experience Level: ${b.experienceLevel}

Summary: ${b.summary}
Work Experience: ${b.workExperience}
Education: ${b.education}
Skills: ${b.skills}
`;

const buildDetailedPrompt = (b: any, email: string) => `
Create a detailed professional CV with sections:
Summary, Work Experience, Education, Skills, Achievements, Projects, Languages.

Name: ${b.fullName}
Email: ${email}
Phone: ${b.phone}
Industry: ${b.industry}
Experience Level: ${b.experienceLevel}

Summary: ${b.summary}
Work Experience: ${b.workExperience}
Education: ${b.education}
Skills: ${b.skills}
`;

const buildCoverLetterPrompt = (b: any) =>
    `Write a 1-page cover letter for ${b.fullName} applying for a ${b.industry} position. Highlight motivation and professional background.`;

const buildLinkedInPrompt = (b: any) =>
    `Create a professional LinkedIn summary for ${b.fullName} (${b.industry}, ${b.experienceLevel}). Focus on achievements, impact, and personality.`;

// ---------- SERVICE ----------
export const cvService = {
    async createOrder(userId: string, email: string, body: any): Promise<CVOrderType> {
        log("createOrder", "Called", { userId, email });

        const user = await User.findById(userId);
        if (!user) throw new Error("UserNotFound");

        const BASE_COST: Record<string, number> = { default: 30, manager: 60 };
        const EXTRA_COST: Record<string, number> = { coverLetter: 10, linkedin: 15 };

        const baseCost = BASE_COST[body.reviewType] ?? 30;
        const extrasCost = (body.extras || []).reduce(
            (sum: number, key: string) => sum + (EXTRA_COST[key] || 0),
            0
        );
        const totalCost = baseCost + extrasCost;

        log("createOrder", "💰 Cost breakdown", { baseCost, extrasCost, totalCost });

        if (user.tokens < totalCost) throw new Error("InsufficientTokens");
        user.tokens -= totalCost;
        await user.save();

        const mainPrompt =
            body.reviewType === "manager"
                ? buildDetailedPrompt(body, email)
                : buildSimplePrompt(body, email);

        log("createOrder", "🧠 Main prompt ready");

        const mainRes = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: mainPrompt }],
        });

        const mainText = mainRes.choices[0].message?.content || "";
        log("createOrder", "📄 Main CV generated", { length: mainText.length });

        // ---------- Extras ----------
        const extrasData: Record<string, string> = {};
        for (const extra of body.extras || []) {
            let extraPrompt = "";
            switch (extra) {
                case "coverLetter":
                    extraPrompt = buildCoverLetterPrompt(body);
                    break;
                case "linkedin":
                    extraPrompt = buildLinkedInPrompt(body);
                    break;
            }

            if (!extraPrompt) continue;

            log("createOrder", `🟢 Generating extra: ${extra}`);
            try {
                const extraRes = await openai.chat.completions.create({
                    model: "gpt-4o-mini",
                    messages: [{ role: "user", content: extraPrompt }],
                });
                extrasData[extra] = extraRes.choices[0].message?.content || "";
                log("createOrder", `✅ Extra generated: ${extra}`, { length: extrasData[extra].length });
            } catch (err: any) {
                extrasData[extra] = "Error generating: " + err.message;
                log("createOrder", `❌ Error generating extra: ${extra}`, { error: err.message });
            }
        }

        const readyAt =
            body.reviewType === "manager"
                ? new Date(Date.now() + 24 * 60 * 60 * 1000)
                : new Date();

        log("createOrder", "💾 Saving CVOrder in Mongo", {
            userId,
            email,
            reviewType: body.reviewType,
            extrasDataKeys: Object.keys(extrasData),
        });
        const order = await CVOrder.create({
            userId,
            email,
            fullName: body.fullName,
            phone: body.phone,
            photo: body.photo,
            cvStyle: body.cvStyle,
            fontStyle: body.fontStyle,
            themeColor: body.themeColor,
            industry: body.industry,
            experienceLevel: body.experienceLevel,
            summary: body.summary,
            workExperience: body.workExperience,
            education: body.education,
            skills: body.skills,
            reviewType: body.reviewType,
            extras: body.extras,
            response: mainText,
            extrasData,
            status: body.reviewType === "manager" ? "pending" : "ready",
            readyAt,
        });

        const plain: any = order.toObject ? order.toObject() : order;
        if (plain.extrasData instanceof Map) {
            plain.extrasData = Object.fromEntries(plain.extrasData);
        }
        log("createOrder", "🎨 Appearance", { font: body.fontStyle, color: body.themeColor });


        log("createOrder", "✅ Done", { id: plain._id, extras: Object.keys(plain.extrasData || {}) });
        return plain;
    },

    async getOrders(userId: string): Promise<CVOrderType[]> {
        log("getOrders", "Fetching all orders", { userId });
        const orders = await CVOrder.find({ userId }).sort({ createdAt: -1 });
        log("getOrders", "Fetched", { count: orders.length });
        return orders.map((o: any) => (o.toObject ? o.toObject() : o));
    },

    async getOrderById(userId: string, orderId: string): Promise<CVOrderType | null> {
        log("getOrderById", "Looking for order", { userId, orderId });
        const order = await CVOrder.findOne({ _id: orderId, userId });
        if (!order) {
            log("getOrderById", "⚠️ Not found");
            return null;
        }

        const plain: any = order.toObject ? order.toObject() : order;
        if (plain.extrasData instanceof Map) {
            plain.extrasData = Object.fromEntries(plain.extrasData);
        }

        log("getOrderById", "✅ Found", { id: plain._id, extrasKeys: Object.keys(plain.extrasData || {}) });
        return plain;
    },
};
