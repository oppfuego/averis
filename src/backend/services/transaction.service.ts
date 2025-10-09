import { connectDB } from "../config/db";
import { Transaction } from "@/backend/models/transaction.model";
import mongoose from "mongoose";

export const transactionService = {
    async record(
        userId: mongoose.Types.ObjectId,
        email: string,
        amount: number,
        type: "add" | "spend",
        balanceAfter: number
    ) {
        await connectDB();
        const tx = await Transaction.create({
            userId,
            email,
            amount,
            type,
            balanceAfter,
        });
        console.log("🧾 Transaction saved:", tx);
        return tx;
    },
};
