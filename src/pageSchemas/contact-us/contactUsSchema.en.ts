import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_NUMBER } from "@/resources/constants";

const contactPage: PageSchema = {
    meta: {
        title: `Contact Us — ${COMPANY_NAME}`,
        description: `Reach out to ${COMPANY_NAME}. Whether you have questions, need support, or want to collaborate — we’re here to help.`,
        keywords: [
            `${COMPANY_NAME} contact`,
            "support",
            "get in touch",
            "customer service",
        ],
        canonical: "/contact-us",
        ogImage: {
            title: `Contact ${COMPANY_NAME}`,
            description: "Your message matters — let’s talk.",
            bg: "#f9fafb",
            color: "#111827",
        },
    },
    blocks: [
        // 🔹 Hero Intro
        {
            type: "custom",
            component: "HeroSection",
            title: "Get in Touch",
            highlight: "We’d Love to Hear from You",
            description: `Have questions about ${COMPANY_NAME}? Our team is here to help with support, partnerships, or general inquiries.`,
            image: "image9",
        },


        // 🔹 Contact Form
        {
            type: "custom",
            component: "ContactForm",
        },

        // 🔹 FAQ для довіри
        {
            type: "faq",
            items: [
                {
                    question: "How soon will I get a reply?",
                    answer:
                        "We usually respond within 24 hours on business days.",
                },
                {
                    question: "Can I schedule a meeting?",
                    answer:
                        "Yes, send us your request via the form and we’ll arrange a call.",
                },
                {
                    question: "Do you offer customer support on weekends?",
                    answer:
                        "Currently, our support is available Monday to Friday, but we’ll get back to you the next business day.",
                },
            ],
        },
    ],
};

export default contactPage;
