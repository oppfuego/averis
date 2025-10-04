import { NextRequest, NextResponse } from "next/server";
import { cvController } from "@/backend/controllers/cv.controller";
// import { requireAuth } from "@/backend/middlewares/auth.middleware";

export async function POST(req: NextRequest) {
    try {
        // 🔹 тимчасово прибрав авторизацію
        // const user = await requireAuth(req);
        // if (!user)
        //     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const body = await req.json();

        // ⚠️ Підставимо тестові userId + email вручну
        const fakeUserId = "68dc231adc70790f2b50d399";
        const fakeEmail = body.email || "test@example.com";

        const result = await cvController.createOrder(fakeUserId, fakeEmail, body);

        return NextResponse.json(result);
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
