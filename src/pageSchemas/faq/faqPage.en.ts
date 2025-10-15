import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `FAQ — ${COMPANY_NAME}`,
        description: `Frequently asked questions about ${COMPANY_NAME}: personal trainers, AI assistant, nutrition plans, tokens, and how to start your fitness journey.`,
        keywords: [
            `${COMPANY_NAME} FAQ`,
            "fitness plans",
            "personal trainer",
            "AI fitness coach",
            "nutrition plan",
            "training tokens",
            "how it works",
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} FAQ`,
            description: `Answers to the most common questions about training, coaching, and nutrition with ${COMPANY_NAME}.`,
            bg: "#0a2540",
            color: "#ffffff",
        },
    },

    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} is a fitness platform that connects you with certified personal trainers and nutritionists. You can train 1-on-1 with real experts, or use our AI assistant for smart workout tracking and adjustments.`,
                },
                {
                    question: "How does the AI assistant work?",
                    answer:
                        "Our AI analyzes your workout data, recovery, and performance to recommend changes in sets, reps, or rest times. It never replaces your trainer — it helps both of you make faster, smarter decisions.",
                },
                {
                    question: "How do I choose my trainer?",
                    answer:
                        "After signing up and filling out your fitness profile, you'll be matched with trainers who fit your goals, schedule, and training style. You can review profiles, read reviews, and pick the one you connect with most.",
                },
                {
                    question: "Can I get a nutrition plan too?",
                    answer:
                        "Yes. You can add a personalized nutrition plan at any time — built by a certified nutritionist based on your dietary preferences, calorie needs, and training intensity.",
                },
                {
                    question: "What are tokens and how do they work?",
                    answer:
                        "Tokens are your digital credits inside the ${COMPANY_NAME} system. You use them to book training sessions, add nutrition support, or unlock AI premium features. You can top them up anytime.",
                },
                {
                    question: "How soon will I get my personalized plan?",
                    answer:
                        "Once your trainer receives your fitness profile, you’ll get your first fully personalized training plan within 24 hours.",
                },
                {
                    question: "Can I combine AI with a human trainer?",
                    answer:
                        "Absolutely! Most members use both — your trainer designs the plan, while AI tracks progress, analyzes data, and keeps everything updated in real time.",
                },
                {
                    question: "Can I pause or change my plan later?",
                    answer:
                        "Yes. You can switch between AI, Trainer, or Full Coaching plans anytime — your remaining tokens will simply roll over to the new plan.",
                },
                {
                    question: "Is my personal data safe?",
                    answer:
                        "Yes. All your fitness and health information is stored securely and never shared with third parties. ${COMPANY_NAME} follows GDPR and international data protection standards.",
                },
                {
                    question: "How can I contact support?",
                    answer: `Our support team is always ready to help. You can reach us at ${COMPANY_EMAIL} or through the contact form on the website.`,
                },
            ],
        },
    ],
};

export default faqSchema;
