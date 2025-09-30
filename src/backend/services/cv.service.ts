import { CVOrder } from "../models/cvOrder.model";
import { User } from "../models/user.model";
import { ENV } from "../config/env";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: ENV.OPENAI_API_KEY });

const buildPrompt = (b: any, email: string) => `Create a very detailed professional CV in English. 
The CV should be at least 2 full pages of content. 
Expand each section with multiple bullet points and paragraphs. 
Use clear section headings (Summary, Work Experience, Education, Skills, Achievements, Projects, Languages). 
Make the text realistic, comprehensive, and impressive. 
Use clean formatting with bullet points where possible.

--- Personal Information ---
Name: ${b.fullName}
Email: ${email}
Phone: ${b.phone}
Industry: ${b.industry}
Experience Level: ${b.experienceLevel}

--- Summary ---
${b.summary} (expand into 2–3 paragraphs with more context about strengths, career goals, and achievements)

--- Work Experience ---
${b.workExperience} (expand each role into 5–7 bullet points with responsibilities, results, tools used, achievements)

--- Education ---
${b.education} (expand with details of courses, certifications, honors, thesis topics if applicable)

--- Skills ---
${b.skills} (organize into Hard Skills, Soft Skills, and Tools)

--- Achievements ---
Add at least 3 professional achievements (awards, recognitions, publications, promotions).

--- Projects ---
Add 2–3 detailed projects with goals, technologies used, and results.

--- Languages ---
Add at least 2 languages with proficiency levels.
`;

export const cvService = {
    async createOrder(userId: string, email: string, body: any) {
        const user = await User.findById(userId);
        if (!user) throw new Error("UserNotFound");

        const cost = parseInt(ENV.AI_COST_PER_REQUEST || "30", 10);
        if (user.tokens < cost) throw new Error("InsufficientTokens");

        user.tokens -= cost;
        await user.save();

        const prompt = buildPrompt(body, email);

        let responseText = "";
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: prompt }],
            });
            responseText = completion.choices[0].message?.content || "";
        } catch (err: any) {
            throw new Error("OpenAIError: " + err.message);
        }

        // ✅ одразу готовий
        const readyAt = new Date();

        // ❌ якщо треба робити через 24 години, розкоментуй:
        // const readyAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

        const order = await CVOrder.create({
            userId,
            email,
            ...body,
            response: responseText.trim(),
            status: "ready", // одразу готовий
            readyAt,
        });

        return order;
    },

    async getOrders(userId: string) {
        return CVOrder.find({ userId }).sort({ createdAt: -1 });
    },

    async getOrderById(userId: string, orderId: string) {
        return CVOrder.findOne({ _id: orderId, userId });
    },
};
