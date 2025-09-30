import {PageSchema} from "@/components/constructor/page-render/types";
import {COMPANY_NAME} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Build Your Career with Confidence`,
        description: `${COMPANY_NAME} helps you create ATS-friendly CVs that recruiters love. Sign up, choose your template, and get your CV within 24 hours.`,
        keywords: [
            "cv maker",
            "resume builder",
            "ATS resume",
            "job application",
            "professional cv",
            "career success",
        ],
        canonical: "/",
        ogImage: {
            title: COMPANY_NAME,
            description: `Level up your career with ${COMPANY_NAME}.`,
            bg: "#0a2540",
            color: "#ffffff",
        },
    },

    blocks: [
        // 🟢 Hero
        {
            type: "custom",
            component: "HeroSection",
            title: "Your Career Deserves More",
            highlight: "Build a Winning CV",
            description:
                `Skip the stress. With ${COMPANY_NAME}, you’ll get a recruiter-approved, ATS-friendly CV in less than 24 hours.`,
            primaryCta: {text: "Create My CV", link: "/get-started"},
            secondaryCta: {text: "See Templates", link: "/templates"},
            image: "image1",
        },

        // 🟢 Key benefits strip
        {
            type: "custom",
            component: "HighlightStrip",
            messages: [
                "⚡ CV ready in 24h",
                "🎨 50+ modern templates",
                "📑 ATS & recruiter-approved",
                "💼 Works for all industries",
            ],
        },

        // 🟢 Why us (split section)
        {
            type: "section",
            left: {
                type: "text",
                title: "Why Choose Us?",
                description:
                    `We combine design expertise with recruiter insights. Every CV from ${COMPANY_NAME} is designed to pass ATS scans, impress employers, and showcase your unique strengths.`,
                bullets: [
                    "Professional design, zero effort",
                    "Tailored to your industry",
                    "Backed by real HR specialists",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                alt: "CV preview mockup",
                width: "100%",
                height: "380px",
            },
        },

        // 🟢 How it works (step grid)
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image3",
                    title: "Sign Up",
                    description: "Create your account in seconds.",
                },
                {
                    image: "image4",
                    title: "Choose a Template",
                    description: "Select from 50+ professional designs.",
                },
                {
                    image: "image5",
                    title: "Fill Out Details",
                    description: "Provide your experience and skills.",
                },
                {
                    image: "image6",
                    title: "Get Your CV",
                    description: "Delivered to you within 24 hours.",
                },
            ],
        },

        // 🟢 Video demo
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "video",
                src: "CVMakerDemo",
                width: "100%",
                height: "360px",
                alt: "CV Maker demo",
                controls: true,
            },
            right: {
                type: "text",
                title: "See it in Action",
                description:
                    "Watch how easy it is to create a polished CV in just a few clicks. Our demo shows the full process from signup to download.",
            },
        },

        // 🟢 CV categories
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "Graduate CV",
                    description: "Kickstart your career with confidence.",
                    buttonText: "Get Started",
                    buttonLink: "/sign-up",
                },
                {
                    image: "image8",
                    title: "Professional CV",
                    description: "Highlight your skills and achievements.",
                    buttonText: "Get Started",
                    buttonLink: "/sign-up",
                },
                {
                    image: "image9",
                    title: "Executive CV",
                    description: "Stand out in leadership positions.",
                    buttonText: "Get Started",
                    buttonLink: "/sign-up",
                },
            ],
        },

        // 🟢 Final CTA
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: `Start Your Career Transformation Today`,
                description: `Join thousands of job seekers who trust ${COMPANY_NAME}. Sign up now and get your professional CV within 24 hours.`,
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
                    text: "I landed 3 interviews in a week thanks to my new CV!",
                },
                {
                    name: "John Smith",
                    role: "Software Engineer",
                    image: "review2",
                    text: "The template looked amazing and was ATS-friendly.",
                },
                {
                    name: "Maria Lopez",
                    role: "Project Manager",
                    image: "review3",
                    text: "Fast delivery and professional quality. Highly recommend!",
                },
            ],
        },
    ],
};

export default schema;
