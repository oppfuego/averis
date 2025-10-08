import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { connectDB } from "@/backend/config/db";
import { Transaction } from "@/backend/models/transaction.model";

export async function GET(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        await connectDB();

        const transactions = await Transaction.find({ userId: payload.sub })
            .sort({ createdAt: -1 })
            .lean();

        return NextResponse.json({ transactions });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
