import { PageSchema } from "@/components/constructor/page-render/types";

const schema: PageSchema = {
    meta: {
        title: "About Us — CV Maker",
        description:
            "CV Maker is a team of professional HR experts and career consultants who create resumes tailored to your goals and job applications. A professional resume delivered within 24 hours.",
        keywords: [
            "CV Maker",
            "create resume",
            "online resume",
            "CV templates",
            "resume builder",
            "professional resume",
        ],
        canonical: "/about-us",
        ogImage: {
            title: "CV Maker",
            description: "A professional resume crafted by experts — delivered within 24 hours",
            bg: "#0a2540",
            color: "#ffffff",
        },
    },
    blocks: [
        // 🔹 Mission
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Our Mission",
                description:
                    "We aim to help every candidate stand out from the crowd. At CV Maker, your resume is crafted by professional HR experts who know exactly what employers are looking for.",
                centerTitle: true,
                centerDescription: true,
            },
        },

        // 🔹 Why CV Maker?
        {
            type: "section",
            left: {
                type: "text",
                title: "Why CV Maker?",
                description:
                    "We don’t just generate a template — we create a document that highlights your unique strengths:",
                bullets: [
                    "A team of certified HR and career consultants",
                    "Resumes tailored to your job application and industry",
                    "A ready-to-use result delivered within 24 hours",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
                alt: "Example of a professional resume",
                width: "100%",
                height: "320px",
            },
        },

        // 🔹 Our Story (зображення + bullets)
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image2", // додай у resources/media
                alt: "Our team at work",
                width: "100%",
                height: "320px",
            },
            right: {
                type: "text",
                title: "Our Story",
                description:
                    "CV Maker was created to solve a common problem: most people don’t know how to properly present their experience. We built a team of HR professionals and recruiters who now help clients receive more interview invitations.",
                bullets: [
                    "Founded by HR experts with 10+ years of experience",
                    "Driven by a mission to help job seekers worldwide",
                    "Trusted by hundreds of clients globally",
                ],
            },
        },

        // 🔹 Our Vision (reverse + bullets)
        {
            type: "section",
            left: {
                type: "text",
                title: "Our Vision",
                description:
                    "We believe that access to professional career tools should not be a privilege. Our vision is to make high-quality resume writing accessible globally, ensuring everyone has the opportunity to achieve their career goals.",
                bullets: [
                    "Making professional resumes accessible worldwide",
                    "Combining human expertise with smart tools",
                    "Empowering every candidate to shine",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image4", // додай у resources/media
                alt: "Vision of CV Maker",
                width: "100%",
                height: "320px",
            },
        },

        // 🔹 Our Values
        {
            type: "custom",
            component: "ValuesIcons",
            values: [
                {
                    icon: "🎯",
                    title: "Client Focus",
                    text: "We tailor the style and format to match your career goals",
                },
                {
                    icon: "📄",
                    title: "Professionalism",
                    text: "Resumes written by HR experts and recruiters",
                },
                {
                    icon: "⏱️",
                    title: "Efficiency",
                    text: "You receive your completed document within 24 hours",
                },
                {
                    icon: "🤝",
                    title: "Trust",
                    text: "We’ve already helped hundreds of clients land their dream jobs",
                },
            ],
        },

        // 🔹 What Sets Us Apart
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "What Sets Us Apart",
                description:
                    "Unlike automated tools, every CV we deliver is personally reviewed by HR experts. We combine professional writing with modern design to ensure your resume not only looks great but also passes Applicant Tracking Systems (ATS).",
                centerTitle: true,
                centerDescription: true,
            },
        },

        // 🔹 How It Works
        {
            type: "custom",
            component: "Timeline",
            steps: [
                {
                    title: "1. Provide Your Details",
                    description: "You fill out a form with your work experience, education, and skills.",
                },
                {
                    title: "2. Expert Review",
                    description: "Our HR consultants create a professional resume tailored to your profile.",
                },
                {
                    title: "3. Design & Formatting",
                    description: "Our designers give your document a modern and polished look.",
                },
                {
                    title: "4. Ready Resume",
                    description: "Within 24 hours, you receive a finished PDF file.",
                },
            ],
        },
    ],
};

export default schema;
