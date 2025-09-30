import { NextRequest, NextResponse } from "next/server";
import { cvController } from "@/backend/controllers/cv.controller";
import { requireAuth } from "@/backend/middlewares/auth.middleware";

export async function GET(req: NextRequest) {
    try {
        const user = await requireAuth(req);
        if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const result = await cvController.getOrders(user.sub);
        return NextResponse.json(result);
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
