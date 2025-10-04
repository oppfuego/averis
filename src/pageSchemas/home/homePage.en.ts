import {PageSchema} from "@/components/constructor/page-render/types";
import {COMPANY_NAME} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Instant CVs or Expert Review`,
        description: `${COMPANY_NAME} lets you instantly create ATS-friendly CVs with our templates, or choose the optional manager review for a perfected CV within 24 hours.`,
        keywords: [
            "cv maker",
            "resume builder",
            "ATS resume",
            "instant cv",
            "professional resume",
            "career success",
            "cv review",
        ],
        canonical: "/",
        ogImage: {
            title: COMPANY_NAME,
            description: `Get your CV instantly — or let our experts polish it within 24 hours.`,
            bg: "#0a2540",
            color: "#ffffff",
        },
    },

    blocks: [
        // 🟢 Hero
        {
            type: "custom",
            component: "HeroSection",
            title: "Two Ways to Build Your Career",
            highlight: "Instant CV or Expert Review",
            description:
                `Fill in your details and get an ATS-ready CV instantly.  
                 Or choose our Manager Review option and receive a perfected CV crafted by our team within 24 hours.`,
            primaryCta: {text: "Create My CV Now", link: "/get-started"},
            secondaryCta: {text: "See Templates", link: "/templates"},
            image: "image1",
        },

        // 🟢 Highlight strip
        {
            type: "custom",
            component: "HighlightStrip",
            messages: [
                "⚡ Instant CV in seconds",
                "🎨 50+ modern templates",
                "📑 ATS & recruiter-approved",
                "🕒 Optional 24h manager review",
            ],
        },

        // 🟢 Why us
        {
            type: "custom",
            component: "ValuesIcons",
            title: "Why Choose Us?",
            description: `Whether you need a quick CV or expert polish, ${COMPANY_NAME} has you covered.`,
            values: [
                {
                    icon: "⚡",
                    title: "Instant CV",
                    text: "Get a professional ATS-ready CV in seconds."
                },
                {
                    icon: "🕒",
                    title: "24h Review",
                    text: "HR specialists polish your CV within 24 hours."
                },
                {
                    icon: "📑",
                    title: "ATS Approved",
                    text: "Pass recruiter filters with modern templates."
                },
                {
                    icon: "🎨",
                    title: "Templates for every taste",
                    text: "Choose from modern, recruiter-tested designs."
                }
            ]
        },

        {
            type: "custom",
            component: "Timeline",
            title: "How It Works",
            steps: [
                {
                    title: "Fill the Form",
                    description: "Enter your experience, education, and skills.",
                },
                {
                    title: "Instant CV",
                    description: "Download your CV immediately in your chosen template.",
                },
                {
                    title: "Manager Review (Optional)",
                    description: "An HR expert refines your CV for maximum impact.",
                },
                {
                    title: "Delivery in 24h",
                    description: "Get your polished CV in your inbox within 24 hours.",
                },
            ],
        },

        {
            type: "custom",
            component: "VideoDemo",
            title: "See It in Action",
            description:
                "Watch how you can instantly create a CV — and how our expert review option works for extra polish.",
            video: "CVMakerDemo"
        },


        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    type: "pricing",
                    variant: "starter",
                    title: "Starter",
                    price: "€9",
                    tokens: 900,
                    badgeTop: "Starter Plan",
                    description: "Create your first professional CV instantly with our templates.",
                    features: [
                        "1 instant ATS-ready CV",
                        "Access to modern templates",
                        "Basic formatting options"
                    ],
                    buttonText: "Start Now",
                    buttonLink: "/checkout?plan=starter",
                },
                {
                    type: "pricing",
                    variant: "pro",
                    title: "Pro",
                    price: "€49",
                    tokens: 4900,
                    badgeTop: "Pro Plan",
                    description: "Perfect for job seekers who apply frequently and need flexibility.",
                    features: [
                        "Unlimited CV generations per month",
                        "Multiple export formats (PDF, DOCX)",
                        "Custom design options",
                        "Priority email support"
                    ],
                    buttonText: "Go Pro",
                    buttonLink: "/checkout?plan=pro",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Premium",
                    price: "€99",
                    tokens: 9900,
                    badgeTop: "Recommended",
                    description: "Get expert-level CVs and stand out in competitive job markets.",
                    features: [
                        "Unlimited CVs with all templates",
                        "1-on-1 HR expert review (24h)",
                        "Advanced personalization & styling",
                        "Cover letter builder included",
                        "Dedicated priority support"
                    ],
                    buttonText: "Choose Premium",
                    buttonLink: "/checkout?plan=premium",
                },
                {
                    type: "pricing",
                    variant: "custom",
                    title: "Custom Plan",
                    price: "dynamic",
                    tokens: 0,
                    badgeTop: "Custom Plan",
                    description: "Flexible pricing — pay only for what you use.",
                    features: [
                        "Choose your CV amount",
                        "Instant calculation of tokens",
                        "No expiration on credits"
                    ],
                    buttonText: "Buy Custom",
                    buttonLink: "/checkout?plan=custom",
                },
            ],
        },


        // 🟢 Final CTA
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: `Get Your CV — Your Way`,
                description: `Instant download or manager-reviewed within 24h.  
                               Thousands of job seekers already trust ${COMPANY_NAME}.`,
                centerTitle: true,
                centerDescription: true,
            },
        },

        {
            type: "custom",
            component: "TestimonialsSlider",
            testimonials: [
                {
                    name: "Yaroslav Krupa",
                    role: "Marketing Specialist",
                    image: "review1",
                    text: "I got an instant CV and landed interviews the same week!",
                },
                {
                    name: "John Smith",
                    role: "Software Engineer",
                    image: "review2",
                    text: "The instant CV worked, but the manager review made it perfect.",
                },
                {
                    name: "Maria Lopez",
                    role: "Project Manager",
                    image: "review3",
                    text: "Loved the option to get expert feedback — worth the wait!",
                },
            ],
        },

        {
            type: "faq",
            items: [
                {
                    question: "What is the difference between Instant CV and Manager Review?",
                    answer:
                        "Instant CV is generated instantly based on your data using a modern template. Manager Review is an expert HR check that takes up to 24 hours to make your CV fully professional."
                },
                {
                    question: "Are your templates ATS-friendly?",
                    answer:
                        "Yes, all our templates are optimized for Applicant Tracking Systems (ATS) to ensure your resume passes recruiter filters."
                },
                {
                    question: "Can I download my CV in PDF format?",
                    answer:
                        "Yes, you can export your CV in PDF format — the universal standard accepted by most employers."
                },
                {
                    question: "Is my data stored securely?",
                    answer:
                        "We take security seriously. All your information is protected and stored in compliance with GDPR standards."
                },
                {
                    question: "Do you also provide help with cover letters?",
                    answer:
                        "Yes, with our Premium plan you can build a professional cover letter to match your CV."
                }
            ]
        },
        {
            type: "custom",
            component: "ContactForm",
            title: "Need Help?",
            description: "Contact our support team for assistance.",
        },
    ],
};

export default schema;
