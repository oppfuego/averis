import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const pricingSchema: PageSchema = {
    meta: {
        title: `Pricing — ${COMPANY_NAME}`,
        description: `Choose the ${COMPANY_NAME} plan that fits your fitness goals. From individuals to teams — simple, transparent pricing for professional training plans.`,
        keywords: [
            `${COMPANY_NAME} pricing`,
            "fitness plans",
            "training subscription",
            "personalized workouts",
            "gym coaching online",
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} Pricing`,
            description: "Simple and transparent pricing for training plans.",
            bg: "#0a2540",
            color: "#ffffff",
        },
    },
    blocks: [
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Starter 🏋️",
                    price: "€9",
                    tokens: 900,
                    description: "Perfect for beginners starting their fitness journey.",
                    features: [
                        "1 personalized plan",
                        "Basic workout schedule",
                        "Email support",
                    ],
                    buttonText: "Start Now",
                    buttonLink: "/checkout?plan=starter",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "Pro 💼",
                    price: "€49",
                    tokens: 4900,
                    description: "Best for consistent trainees and fitness enthusiasts.",
                    features: [
                        "4 new plans every month",
                        "Video instructions included",
                        "Nutrition recommendations",
                        "Priority support",
                    ],
                    buttonText: "Go Pro",
                    buttonLink: "/checkout?plan=pro",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Elite 💎",
                    price: "€99",
                    tokens: 9900,
                    description: "For athletes and those seeking maximum performance.",
                    features: [
                        "Unlimited training plans",
                        "1-on-1 coach consultation",
                        "Advanced nutrition & recovery",
                        "Team collaboration",
                        "Dedicated support",
                    ],
                    buttonText: "Choose Elite",
                    buttonLink: "/checkout?plan=elite",
                },
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Custom Pack",
                    price: "dynamic",
                    tokens: 0,
                    description: "Flexible per-plan pricing, tailored to your needs.",
                    features: [
                        "Choose your amount",
                        "Instant calculation",
                        "No expiration",
                    ],
                    buttonText: "Buy Custom",
                    buttonLink: "/checkout?plan=custom",
                },
            ],
        },
    ],
};

export default pricingSchema;
