import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { universalController } from "@/backend/controllers/universal.controller";

export async function GET(req: NextRequest) {
    try {
        const user = await requireAuth(req);
        if (!user)
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        if (!id)
            return NextResponse.json({ message: "Missing order id" }, { status: 400 });

        const result = await universalController.getOrder(user.sub, id);

        // 🧩 Гарантовано конвертуємо Map → Object
        const order = result?.order;
        if (order?.extrasData instanceof Map) {
            order.extrasData = Object.fromEntries(order.extrasData);
        }

        return NextResponse.json({ order });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
