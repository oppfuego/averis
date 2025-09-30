"use client";

import React, { useMemo, useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

type Currency = "GBP" | "EUR";

interface PricingCardProps {
    variant?: "starter" | "pro" | "premium";
    title: string;
    price: string; // "dynamic" = кастомний
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
}

const CURRENCY_SIGNS: Record<Currency, string> = {
    GBP: "£",
    EUR: "€",
};

const TOKENS_PER_UNIT = 100;

const PricingCard: React.FC<PricingCardProps> = ({
                                                     variant = "starter",
                                                     title,
                                                     price,
                                                     tokens,
                                                     description,
                                                     features,
                                                     buttonText,
                                                 }) => {
    const { showAlert } = useAlert();
    const user = useUser();

    const [currency, setCurrency] = useState<Currency>("GBP");
    const [customAmount, setCustomAmount] = useState<number>(20);

    const isCustom = price === "dynamic";
    const currencySign = useMemo(() => CURRENCY_SIGNS[currency], [currency]);

    // Badge text для кожного тарифу
    const badgeText = isCustom
        ? "Custom"
        : variant === "starter"
            ? "Starter"
            : variant === "pro"
                ? "Pro"
                : variant === "premium"
                    ? "Premium"
                    : "";

    // Клас для кастомного тарифу
    const cardClass = `${styles.card} ${isCustom ? styles.custom : styles[variant]}`;

    const handleBuy = async () => {
        if (!user) {
            showAlert("Please sign up", "You need to be signed in to purchase", "info");
            setTimeout(() => (window.location.href = "/sign-up"), 1200);
            return;
        }

        try {
            let body: any;
            if (isCustom) {
                if (customAmount < 0.01) {
                    showAlert("Minimum is 0.01", `Enter at least 0.01 ${currency}`, "warning");
                    return;
                }
                body = { currency, amount: customAmount };
            } else {
                body = { amount: tokens };
            }

            const res = await fetch("/api/user/buy-tokens", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(body),
            });

            if (!res.ok) throw new Error(await res.text());
            const data = await res.json();

            showAlert(
                "Success!",
                isCustom
                    ? `You paid ${currencySign}${customAmount.toFixed(
                        2
                    )} ${currency} (≈ ${Math.floor(customAmount * TOKENS_PER_UNIT)} tokens)`
                    : `You purchased ${tokens} tokens.`,
                "success"
            );
            console.log("Updated user:", data.user);
        } catch (err: any) {
            showAlert("Error", err.message || "Something went wrong", "error");
        }
    };

    return (
        <div className={cardClass}>
            {/* Ліва частина з ціною */}
            <div className={styles.left}>
                <span className={styles.badge}>{badgeText}</span>
                <h3 className={styles.title}>{title}</h3>
                {isCustom ? (
                    <div className={styles.customControls}>
                        <Input
                            type="number"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(Number(e.target.value))}
                            slotProps={{ input: { min: 0.01, step: 0.01 } }}
                            sx={{ flex: 1 }}
                            placeholder="Enter amount"
                            variant="outlined"
                            size="md"
                            startDecorator={currencySign}
                        />
                        <Select
                            value={currency}
                            onChange={(_, val) => val && setCurrency(val as Currency)}
                            size="md"
                            sx={{ minWidth: 90 }}
                        >
                            <Option value="GBP">£ GBP</Option>
                            <Option value="EUR">€ EUR</Option>
                        </Select>
                        <p className={styles.dynamicPrice}>
                            {currencySign}
                            {customAmount.toFixed(2)} ≈{" "}
                            {Math.floor(customAmount * TOKENS_PER_UNIT)} tokens
                        </p>
                    </div>
                ) : (
                    <p className={styles.price}>
                        {price}
                        <span className={styles.tokens}> / {tokens} tokens</span>
                    </p>
                )}
                <ButtonUI
                    type="button"
                    variant="soft"
                    color="quaternary"
                    hoverColor="backgroundLight"
                    fullWidth
                    onClick={handleBuy}
                >
                    {user ? buttonText : "Sign Up to Buy"}
                </ButtonUI>
            </div>

            {/* Права частина з описом */}
            <div className={styles.right}>
                <p className={styles.description}>{description}</p>
                <ul className={styles.features}>
                    {features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PricingCard;
