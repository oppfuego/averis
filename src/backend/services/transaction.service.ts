import { connectDB } from "../config/db";
import { Transaction } from "@/backend/models/transaction.model";

export const transactionService = {
    async record(
        userId,
        email,
        amount,
        type,
        balanceAfter
    ) {
        await connectDB(); // ✅ гарантуємо активне підключення перед створенням
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
