import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { universalController } from "@/backend/controllers/universal.controller";

export async function POST(req: NextRequest) {
    try {
        const user = await requireAuth(req);
        if (!user?.sub)
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

        const body = await req.json();
        const result = await universalController.createOrder(user.sub, user.email, body);
        return NextResponse.json(result);
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
