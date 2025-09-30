import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Get Started — ${COMPANY_NAME}`,
        description: `Learn how ${COMPANY_NAME} helps you create a professional CV: sign up, buy tokens, choose a template, fill in your details, and receive your CV within 24 hours.`,
        keywords: [
            `${COMPANY_NAME} get started`,
            "cv maker onboarding",
            "resume builder steps",
            "buy tokens cv",
            "professional cv service",
        ],
        canonical: "/get-started",
        ogImage: {
            title: `Get Started with ${COMPANY_NAME}`,
            description: "Follow simple steps to create your professional CV.",
            bg: "#0a2540",
            color: "#ffffff",
        },
    },
    blocks: [
        // 🟣 Заголовок + текст
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Get Started with CV Maker",
                description:
                    "Creating a professional CV has never been easier. With just a few simple steps, you’ll have a document that highlights your skills and experience — crafted by our specialists and delivered to you within 24 hours.",
                centerTitle: true,
                centerDescription: true,
            },
        },

        // 🟣 HighlightStrip
        {
            type: "custom",
            component: "HighlightStrip",
            messages: [
                "⚡ Ready in 24h",
                "🎨 Professional Templates",
                "💳 Buy Tokens Easily",
                "📑 ATS-Friendly CVs",
                "✅ Reviewed by Experts",
            ],
        },

        // 🟣 ValuesIcons — чому обирають нас
        {
            type: "custom",
            component: "ValuesIcons",
            values: [
                { icon: "🎯", title: "Tailored Content", text: "We highlight your unique strengths." },
                { icon: "⚡", title: "Fast Delivery", text: "Your CV is ready within 24 hours." },
                { icon: "📑", title: "Modern Design", text: "Choose sleek, recruiter-approved layouts." },
                { icon: "💼", title: "Career Ready", text: "Optimized for ATS and global applications." },
            ],
        },

        // 🟣 Grid — як це працює
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image1",
                    title: "1. Sign Up",
                    description: "Create your account in a few clicks to get started.",
                },
                {
                    image: "image2",
                    title: "2. Buy Tokens",
                    description: "Purchase tokens securely to unlock CV creation.",
                },
                {
                    image: "image3",
                    title: "3. Choose a Template",
                    description: "Select from modern, recruiter-approved CV designs.",
                },
                {
                    image: "image4",
                    title: "4. Fill Out the Form",
                    description: "Provide your experience, skills, and achievements.",
                },
                {
                    image: "image5",
                    title: "5. Wait 24 Hours",
                    description: "Our specialists craft your CV professionally.",
                },
                {
                    image: "image6",
                    title: "6. Get Your CV",
                    description: "Download your tailored CV and apply with confidence.",
                },
            ],
        },

        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Start Your Career with a Strong CV",
                description:
                    "Stand out with a professional CV tailored to you. Sign up, buy tokens, and get your career-ready CV today.",
                centerTitle: true,
                centerDescription: true,
            },
        },

        // 🟣 FAQ
        {
            type: "faq",
            items: [
                { question: "How long does it take?", answer: "Your CV will be ready within 24 hours." },
                { question: "Can I try multiple templates?", answer: "Yes, you can switch before final delivery." },
                { question: "Do I need design skills?", answer: "No, our team prepares everything for you." },
                { question: "Is it ATS-friendly?", answer: "Yes, all CVs are recruiter-approved and ATS-optimized." },
            ],
        },
    ],
};

export default schema;
