import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Get Started — ${COMPANY_NAME}`,
        description: `Learn how to begin your personalized fitness journey with ${COMPANY_NAME}. Connect with certified trainers, set your goals, and start your transformation today.`,
        keywords: [
            `${COMPANY_NAME} get started`,
            "personal trainer onboarding",
            "AI fitness setup",
            "create training plan",
            "nutrition setup",
            "fitness journey start",
        ],
        canonical: "/get-started",
        ogImage: {
            title: `Get Started with ${COMPANY_NAME}`,
            description: "Personal trainer + AI assistant — your journey starts here.",
            bg: "#0a2540",
            color: "#ffffff",
        },
    },

    blocks: [
        // 🔹 HERO
        {
            type: "custom",
            component: "HeroSection",
            title: `Get Started with ${COMPANY_NAME}`,
            highlight: "Your Personalized Fitness Journey Begins Here",
            description: `In just a few steps, you’ll connect with your certified trainer, define your goals, and receive a custom plan that adapts as you progress.  
Whether you train at home, in a gym, or outdoors — ${COMPANY_NAME} builds your roadmap to long-term health and performance.`,
            image: "image1",
            align: "right",
        },

        // 🔹 HIGHLIGHT STRIP
        {
            type: "custom",
            component: "HighlightStrip",
            items: [
                { icon: "💪", text: "Fully Personalized Training Plans" },
                { icon: "🥗", text: "Optional Nutrition Coaching" },
                { icon: "🤖", text: "AI-Assisted Progress Tracking" },
                { icon: "📱", text: "Access Anytime, Anywhere" },
                { icon: "🎯", text: "Visible Results Within Weeks" },
            ],
        },

        // 🔹 HOW IT WORKS (Grid)
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image12",
                    title: "1. Create Your Account",
                    description:
                        "Sign up to access your personal dashboard and connect with a trainer who fits your goals.",
                },
                {
                    image: "image4",
                    title: "2. Complete Your Fitness Profile",
                    description:
                        "Share your lifestyle, equipment, and experience level. The more we know, the better your plan.",
                },
                {
                    image: "image14",
                    title: "3. Match With a Trainer",
                    description:
                        "We pair you with a certified coach who specializes in your training style — from strength to rehabilitation.",
                },
                {
                    image: "image9",
                    title: "4. Receive Your Plan",
                    description:
                        "Your trainer builds a structured program with exercises, sets, and progressions tailored to your body.",
                },
                {
                    image: "image13",
                    title: "5. Add Nutrition (Optional)",
                    description:
                        "Combine training with a personalized meal plan designed by a professional nutritionist.",
                },
                {
                    image: "image11",
                    title: "6. Track & Improve",
                    description:
                        "Use our AI tools to log workouts, analyze trends, and stay connected with your trainer for adjustments.",
                },
            ],
        },

        // 🔹 INFO BLOCK — WHY IT WORKS
        {
            type: "section",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "Built Around You",
                description: `${COMPANY_NAME} adapts to your pace, goals, and schedule.  
No generic templates — every plan is handcrafted by a real trainer and evolves with smart AI insights.`,
                bullets: [
                    "Custom intensity, rest, and progression",
                    "Instant chat with your trainer for feedback",
                    "Automatic performance tracking",
                ],
                image: "trainerSupport",
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "Backed by Real Experts",
                description: `All trainers on ${COMPANY_NAME} are certified and experienced in strength, mobility, and nutrition coaching.  
Our internal review team ensures that every client receives expert-level attention and safe, effective plans.`,
                bullets: [
                    "Verified professional certifications (NASM, ACE, ISSA)",
                    "Experience across fitness levels and goals",
                    "Continuous education in modern training science",
                ],
                image: "expertTrainers",
            },
        },

        // 🔹 VALUES
        {
            type: "custom",
            component: "ValuesIcons",
            title: `Why ${COMPANY_NAME} Works`,
            description: "A smarter system built on three simple principles.",
            values: [
                {
                    icon: "🧠",
                    title: "Human + AI Synergy",
                    text: "We blend the precision of analytics with the intuition of real trainers.",
                },
                {
                    icon: "🤝",
                    title: "Accountability & Motivation",
                    text: "Stay on track with weekly feedback, progress calls, and real-time support.",
                },
                {
                    icon: "📈",
                    title: "Adaptive Progression",
                    text: "Your plan evolves automatically as your body and performance improve.",
                },
            ],
        },

        // 🔹 VIDEO
        {
            type: "custom",
            component: "VideoDemo",
            title: "See How Easy It Is to Start",
            description:
                "Watch how clients connect with trainers, set up their goals, and start training — all within minutes.",
            video: "fitPlannerDemo",
        },

        // 🔹 CTA SECTION
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Begin Your Transformation Today",
                description: `Create your free account, meet your trainer, and start your personalized plan within 24 hours.  
Choose between AI guidance or full coaching — the path is yours.`,
                centerTitle: true,
                centerDescription: true,
            },
        },

        // 🔹 FAQ
        {
            type: "faq",
            items: [
                {
                    question: "Do I need equipment to start?",
                    answer:
                        "No. Your trainer will design the plan around your available equipment — from bodyweight to full gym setups.",
                },
                {
                    question: "Can I change my trainer later?",
                    answer:
                        "Yes. You can switch trainers anytime based on preferences or new goals.",
                },
                {
                    question: "How fast will I get my plan?",
                    answer:
                        "Within 24 hours after completing your fitness profile, your trainer prepares your personalized program.",
                },
                {
                    question: "What if I only want AI guidance?",
                    answer:
                        "You can start with the AI plan and upgrade to a human coach whenever you’re ready for personalized attention.",
                },
            ],
        },
    ],
};

export default schema;
