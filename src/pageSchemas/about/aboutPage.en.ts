import {PageSchema} from "@/components/constructor/page-render/types";
import {COMPANY_NAME} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `About ${COMPANY_NAME} — Our Story & Philosophy`,
        description: `${COMPANY_NAME} is a modern fitness ecosystem that connects people with real trainers and AI-driven tools for lifelong health. Learn how we began, what drives us, and how we build a smarter, human-first approach to fitness.`,
        keywords: [
            "about fitness company",
            "our story",
            "trainer philosophy",
            "AI in fitness",
            "personal training company",
            "wellness innovation",
        ],
        canonical: "/about-us",
        ogImage: {
            title: `${COMPANY_NAME}`,
            description: "Where human strength meets smart innovation.",
            bg: "#0a2540",
            color: "#ffffff",
        },
    },

    blocks: [
        // 🔹 HERO
        {
            type: "custom",
            component: "HeroSection",
            title: `Who We Are`,
            highlight: `${COMPANY_NAME}`,
            description: `We are a global community of professional trainers, nutritionists, and developers united by one belief — that health should be personal, intelligent, and sustainable.  
${COMPANY_NAME} was built to make expert-level fitness accessible to everyone, anywhere, through the perfect balance of human insight and AI technology.`,
            image: "image6",
            align: "left",
        },

        // 🔹 OUR STORY
        {
            type: "section",
            title: "Our Story — From Gyms to Global Coaching",
            description: `It started as a small group of personal trainers frustrated by the chaos of the fitness world.  
Too many people were chasing trends — restrictive diets, random workout apps, unrealistic transformations.  
We wanted to bring fitness back to its roots: real people helping other people achieve real, lasting results.`,
            left: {
                type: "custom",
                component: "InfoBlock",
                title: `How ${COMPANY_NAME} Came to Life`,
                description: `When our founders noticed how many people were lost in quick-fix promises, they decided to build a solution that blends technology with empathy.  
The first version of ${COMPANY_NAME} launched as a platform connecting verified trainers with clients looking for structure, motivation, and accountability.  
As it evolved, we introduced AI-assisted analytics — not to replace trainers, but to empower them with data and insights that make programs more precise.`,
                bullets: [
                    "Launched by trainers for trainers and clients",
                    "Designed around long-term transformation, not temporary results",
                    "Rooted in science, empathy, and innovation",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                alt: "Company Story",
            },
        },

        // 🔹 MISSION
        {
            type: "custom",
            component: "MissionBanner",
            title: "Our Mission",
            description: `${COMPANY_NAME} exists to bridge the gap between technology and human coaching.  
We empower certified trainers with intelligent tools — allowing them to focus on what matters most: understanding each client, adjusting every detail, and building habits that last.  
Our mission is simple but ambitious: to make expert coaching scalable without losing its soul.`,
            image: "missionBanner",
        },

        // 🔹 TRAINERS & PHILOSOPHY
        {
            type: "section",
            title: `The Trainers Behind ${COMPANY_NAME}`,
            description: `Every transformation begins with a real human connection.  
Our trainers are certified professionals from around the world — experts not only in physical performance, but also in motivation, psychology, and sustainable progress.`,
            left: {
                type: "custom",
                component: "InfoBlock",
                image: "image7",
                title: "Who Our Trainers Are",
                description: `Each coach who joins ${COMPANY_NAME} passes a strict verification process — background checks, certifications, experience proof, and mentoring interviews.  
We look for people who understand that coaching is more than sets and reps — it’s about empathy, discipline, and consistency.`,
                bullets: [
                    "Certified under NASM, ACE, ISSA, or similar global institutions",
                    "Experienced in strength, mobility, nutrition, and recovery",
                    "Skilled in adapting programs to medical conditions or lifestyle constraints",
                    "Committed to real communication — video feedback, chat, and emotional support",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                image: "image8",
                title: "Our Coaching Philosophy",
                description: `At ${COMPANY_NAME}, coaching is a partnership — not a transaction.  
Our trainers don’t just send you a PDF; they design evolving plans that grow with your progress, mood, and schedule.  
With AI insights, they can adjust your training in real-time, but it’s their human understanding that keeps you motivated.`,
                bullets: [
                    "Each plan is uniquely built for your goals, time, and mindset",
                    "AI helps measure — but trainers help interpret and adapt",
                    "We prioritize healthy longevity over aesthetic obsession",
                ],
            },
        },

        // 🔹 VALUES
        {
            type: "custom",
            component: "ValuesIcons",
            title: "Our Core Values",
            description: `We believe fitness should improve not only your body, but your mind, discipline, and quality of life.`,
            values: [
                {
                    icon: "🤝",
                    title: "Human First",
                    text: "Every feature we create supports real relationships between clients and trainers.",
                },
                {
                    icon: "📚",
                    title: "Education Over Perfection",
                    text: "We teach clients to understand their bodies — because knowledge builds confidence.",
                },
                {
                    icon: "⚙️",
                    title: "Technology With Purpose",
                    text: "AI is our tool, not our identity. It enhances human expertise, not replaces it.",
                },
                {
                    icon: "🔥",
                    title: "Consistency Beats Intensity",
                    text: "We focus on long-term progress, not overnight results.",
                },
            ],
        },

        // 🔹 VIDEO SECTION
        {
            type: "custom",
            component: "VideoDemo",
            title: `Inside ${COMPANY_NAME}`,
            description: `Watch how our coaches build real plans, analyze progress with AI tools, and support clients across all fitness levels.  
We believe in transparency — what you see here is exactly how we work.`,
            video: "coachWork",
        },

        // 🔹 FUTURE VISION
        {
            type: "section",
            title: "Our Vision for the Future",
            description: `${COMPANY_NAME} isn’t just a company — it’s a movement to redefine modern fitness.  
We’re building a world where technology empowers personal well-being, not replaces it.  
Where every trainer can reach more people, and every person can access expert guidance without barriers.`,
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "What’s Next for Us",
                description: `We’re expanding ${COMPANY_NAME} into holistic wellness — integrating recovery, sleep, nutrition, and mindset programs.  
Soon, every member will have access to a complete ecosystem: a human coach, an AI assistant, and a supportive community — all synchronized toward one goal: your better self.`,
                bullets: [
                    "Expanding partnerships with certified coaches worldwide",
                    "Developing new AI modules for recovery and stress management",
                    "Launching educational programs for beginner trainers",
                    "Building sustainable community challenges for members",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image3",
                alt: "Future fitness vision",
            },
        },

        // 🔹 FINAL CTA
        {
            type: "custom",
            component: "MissionBanner",
            title: "We’re Redefining Fitness Together",
            description: `At ${COMPANY_NAME}, we believe true strength comes from connection — to your trainer, your body, and your purpose.  
Join us in creating a new fitness culture: intelligent, compassionate, and human.`,
            image: "ctaAbout",
        },
    ],
};

export default schema;
