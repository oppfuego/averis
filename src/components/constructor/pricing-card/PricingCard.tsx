"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import { useCurrency } from "@/context/CurrencyContext";

type Currency = "GBP" | "EUR" | "USD";

interface PricingCardProps {
    variant?: "starter" | "pro" | "premium" | "custom";
    title: string;
    price: string;
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
    badgeTop?: string;
    badgeBottom?: string;
    index?: number; // 👈 для затримки анімації
}

const CURRENCY_SIGNS: Record<Currency, string> = {
    GBP: "£",
    EUR: "€",
    USD: "$",
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
                                                     badgeTop,
                                                     badgeBottom,
                                                     index = 0,
                                                 }) => {
    const { showAlert } = useAlert();
    const user = useUser();
    const { currency } = useCurrency();
    const [customAmount, setCustomAmount] = useState<number>(20);

    const isCustom = price === "dynamic";
    const currencySign = useMemo(() => CURRENCY_SIGNS[currency], [currency]);
    const cardClass = `${styles.card} ${styles[variant]}`;
    const priceNum = !isCustom ? price.replace(/[^0-9.]/g, "") : "";

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
        <motion.div
            className={cardClass}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15, // 👈 затримка для stagger-анімації
            }}
        >
            {badgeTop && <span className={styles.badgeTop}>{badgeTop}</span>}

            <h3 className={styles.title}>{title}</h3>

            {isCustom ? (
                <>
                    <Input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(Number(e.target.value))}
                        slotProps={{ input: { min: 0.01, step: 0.01 } }}
                        placeholder="Enter amount"
                        size="md"
                        startDecorator={currencySign}
                    />
                    <p className={styles.dynamicPrice}>
                        {currencySign}
                        {customAmount.toFixed(2)} ≈ {Math.floor(customAmount * TOKENS_PER_UNIT)} tokens
                    </p>
                </>
            ) : (
                <p className={styles.price}>
                    {currencySign}
                    {priceNum}
                    <span className={styles.tokens}>/ {tokens} tokens</span>
                </p>
            )}

            <p className={styles.description}>{description}</p>

            <ul className={styles.features}>
                {features.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>

            <ButtonUI
                fullWidth
                onClick={handleBuy}
                color="primary"
                variant="solid"
                hoverColor="secondary"
                textColor="backgroundLight"
            >
                {user ? buttonText : "Sign Up to Buy"}
            </ButtonUI>

            {badgeBottom && <span className={styles.badgeBottom}>{badgeBottom}</span>}
        </motion.div>
    );
};

export default PricingCard;
