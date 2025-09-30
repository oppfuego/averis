import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `FAQ — ${COMPANY_NAME}`,
        description: `Frequently Asked Questions about ${COMPANY_NAME}: how the resume creation process works, delivery time, revisions, and professional support.`,
        keywords: [
            `${COMPANY_NAME} FAQ`,
            "resume builder",
            "professional CV",
            "job application",
            "HR experts",
            "career support",
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} FAQ`,
            description: `Answers to the most common questions about creating your CV with ${COMPANY_NAME}.`,
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
                    answer: `${COMPANY_NAME} is a professional CV and resume creation service. Our team of HR experts and career consultants craft documents that highlight your strengths and help you get more interview invitations.`,
                },
                {
                    question: "How long does it take to receive my resume?",
                    answer: `You’ll receive your completed CV within 24 hours after submitting your details.`,
                },
                {
                    question: "Who creates the resumes?",
                    answer: `Every CV is created by certified HR specialists and career consultants with real hiring experience.`,
                },
                {
                    question: "Can I request revisions?",
                    answer: `Yes. If you feel adjustments are needed, we provide revisions to ensure your CV perfectly matches your career goals.`,
                },
                {
                    question: "Will my resume be tailored to specific jobs?",
                    answer: `Absolutely. We adapt each CV to your target role, industry, and career objectives.`,
                },
                {
                    question: "Do you also design the resume layout?",
                    answer: `Yes. Our designers create modern, professional layouts that make your CV stand out visually.`,
                },
                {
                    question: "Is my data safe?",
                    answer: `Your personal information is processed securely and never shared with third parties.`,
                },
                {
                    question: "Can you help if I’m changing careers?",
                    answer: `Of course. Our experts specialize in presenting transferable skills to help you succeed in a new industry.`,
                },
                {
                    question: "Do you offer cover letters too?",
                    answer: `Yes. Along with resumes, we also create personalized cover letters that complement your CV.`,
                },
                {
                    question: "How can I contact support?",
                    answer: `Our support team is always available at ${COMPANY_EMAIL}.`,
                },
            ],
        },
    ],
};

export default faqSchema;
