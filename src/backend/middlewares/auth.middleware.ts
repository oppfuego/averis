import { NextRequest } from "next/server";
import { ENV } from "../config/env";
import { verifyAccessToken } from "../utils/jwt";

export async function requireAuth(req: NextRequest) {
    const access =
        req.cookies.get(ENV.ACCESS_COOKIE_NAME)?.value ||
        req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

    if (!access) throw new Error("Missing auth");

    try {
        const payload = await verifyAccessToken<{
            sub?: string;
            id?: string;
            _id?: string;
            email: string;
            role: string;
        }>(access);

        const userId = payload.sub || payload.id || payload._id;
        if (!userId) throw new Error("Invalid token payload: no userId");

        return { ...payload, sub: userId }; // 🧩 гарантуємо, що sub завжди існує
    } catch (err) {
        throw new Error("Invalid or expired token");
    }
}
