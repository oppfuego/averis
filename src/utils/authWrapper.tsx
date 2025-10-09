import { cookies } from "next/headers";
import { ComponentType, ReactNode } from "react";
import { UserProvider } from "@/context/UserContext";
import { baseURL } from "@/resources/content";
import { IUser, Nullable } from "@/types/user.types";

interface WrappedComponentProps { children?: ReactNode; }

export function authWrapper<T extends WrappedComponentProps>(Component: ComponentType<T>) {
    return async function WrappedComponent(props: T) {
        let user: Nullable<IUser> = null;
        const c = await cookies();

        try {
            // 🧩 1. Пробуємо перевірити поточний access_token
            const res = await fetch(`${baseURL}/api/auth/me`, {
                method: "GET",
                headers: { Cookie: c.toString() },
                cache: "no-store",
            });

            if (res.ok) {
                const json = await res.json();
                user = json.user;
            } else {
                // 🧩 2. Якщо 401 — не одразу refresh, спочатку перевіряємо чи є refresh_token
                const refreshToken = c.get("refresh_token");
                if (refreshToken) {
                    const r = await fetch(`${baseURL}/api/auth/refresh`, {
                        method: "POST",
                        headers: { Cookie: c.toString() },
                        cache: "no-store",
                    });
                    if (r.ok) {
                        const json = await r.json();
                        user = json.user;
                    } else {
                        console.warn("authWrapper: refresh failed with", r.status);
                    }
                }
            }
        } catch (e) {
            console.error("authWrapper user fetch error:", e);
        }

        return (
            <UserProvider user={user}>
                <Component {...props} />
            </UserProvider>
        );
    };
}
