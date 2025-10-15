import {PageSchema} from "@/components/constructor/page-render/types";
import {COMPANY_NAME} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Personalized Training with Real Coaches & Smart AI`,
        description: `${COMPANY_NAME} connects you with certified trainers who design fully personalized fitness and nutrition programs — supported by AI for fast insights and progress tracking.`,
        keywords: [
            "personal trainer",
            "custom fitness plan",
            "nutrition coach",
            "AI fitness assistant",
            "workout plan",
            "meal plan",
            "body transformation",
            "training with experts",
        ],
        canonical: "/",
        ogImage: {
            title: COMPANY_NAME,
            description: `Get your personal trainer & AI-powered workout plan today.`,
            bg: "#0a2540",
            color: "#ffffff",
        },
    },

    blocks: [
        {
            type: "custom",
            component: "HeroSection",
            title: "Train Smarter with Expert Coaches",
            highlight: "Personal Trainer + Smart AI Assistant",
            description: `Achieve real results with programs tailored by certified trainers — supported by AI for smart adjustments and progress analysis.  
Whether your goal is to lose weight, build muscle, or regain balance — your trainer designs a plan built entirely around you.`,
            primaryCta: {text: "Start with My Trainer", link: "/get-started"},
            image: "image1",
            align: "right",
        },

        // 🟢 MOTIVATIONAL MARQUEE
        {
            type: "custom",
            component: "HighlightStrip",
            items: [
                {icon: "🏋️‍♀️", text: "1-on-1 Personalized Training"},
                {icon: "🥗", text: "Tailored Nutrition Plans"},
                {icon: "📈", text: "AI-Assisted Progress Tracking"},
                {icon: "💬", text: "Constant Coach Support"},
                {icon: "🔥", text: "Visible Results in Weeks"},
            ],
        },

        // 🟢 WHY CHOOSE TRAINERS
        {
            type: "custom",
            component: "ValuesIcons",
            title: "Why Work With Our Trainers?",
            description: `${COMPANY_NAME} empowers your journey with human expertise — AI is here to assist, but real coaches guide you.`,
            values: [
                {
                    icon: "👨‍🏫",
                    title: "Certified Professionals",
                    text: "All our coaches are qualified and specialized in strength, mobility, and nutrition science.",
                },
                {
                    icon: "🧠",
                    title: "AI-Supported Insights",
                    text: "Our system tracks your progress and recommends when to adjust load or rest days.",
                },
                {
                    icon: "💪",
                    title: "Completely Personalized",
                    text: "No templates. Every plan is made for your goals, injuries, and available equipment.",
                },
                {
                    icon: "🤝",
                    title: "Motivation & Accountability",
                    text: "You’re never alone — your trainer checks in, adapts your plan, and keeps you on track.",
                },
            ],
        },

        // 🟢 HOW IT WORKS
        {
            type: "custom",
            component: "Timeline",
            title: "How It Works",
            steps: [
                {
                    title: "Create Your Account",
                    description: "Register to access your dashboard and connect with a trainer.",
                },
                {
                    title: "Buy Tokens",
                    description:
                        "Use tokens to book a plan, nutrition add-on, or follow-up consultation.",
                },
                {
                    title: "Fill Out Your Fitness Profile",
                    description:
                        "Share your goals, schedule, medical conditions, and preferences.",
                },
                {
                    title: "Trainer Creates Your Plan",
                    description:
                        "Within 24h you receive a fully tailored workout designed by your coach.",
                },
                {
                    title: "Add AI Assistant (Optional)",
                    description:
                        "AI helps track your performance and dynamically adjust sets, reps, and rest times.",
                },
                {
                    title: "Get Optional Nutrition Plan",
                    description:
                        "Your coach can add a meal plan synced to your training goals and dietary style.",
                },
            ],
        },

        // 🟢 TRAINER STORY / COMPANY MISSION
        {
            type: "section",
            title: "Our Mission — Human Expertise First",
            description: `We believe real transformation starts with connection — between you and a coach who understands your body, mindset, and rhythm.`,
            left: {
                type: "custom",
                component: "InfoBlock",
                title: `How ${COMPANY_NAME} Started`,
                image: "image2",
                description: `${COMPANY_NAME} began as a small community of trainers passionate about science-based coaching.  
We saw how many people were overwhelmed by misinformation, random online workouts, and diets that didn’t last.  
So we built a platform where real coaches design programs with AI support — merging human experience and technology.`,
                bullets: [
                    "Over 150 certified trainers and nutritionists",
                    "Science-based programs for all levels",
                    "AI analytics for progress tracking",
                    "Thousands of transformations achieved worldwide",
                ],
            },
            right: {
                type: "custom",
                component: "StoryTimeline",
                steps: [
                    {
                        year: "2019",
                        title: "Idea Born",
                        description: "A group of trainers builds an online hub for clients."
                    },
                    {
                        year: "2020",
                        title: "Trainer Network",
                        description: "Certified coaches join from across the globe."
                    },
                    {
                        year: "2022",
                        title: "AI Integration",
                        description: "Smart assistant introduced to help analyze results."
                    },
                    {
                        year: "2024",
                        title: "Full Lifestyle Coaching",
                        description: "Training, nutrition, mindset — all in one system."
                    },
                ],
            },
        },

        {
            type: "section",
            title: "Meet Our Trainers",
            description:
                "Our team combines science, motivation, and care. Every trainer is certified, verified, and passionate about your success.",
            left: {
                type: "slider",
                images: ["coach1", "coach2", "coach3", "coach4"],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "Only Certified Professionals",
                description:
                    "Each trainer is carefully selected for their experience, empathy, and results. You’ll be matched with the right expert based on your goals, lifestyle, and fitness level.",
                bullets: [
                    "NASM, ACE, ISSA certified professionals",
                    "Specializations: fat loss, muscle gain, rehabilitation, endurance",
                    "Live feedback and plan adjustment",
                ],
            },
        },


        // 🟢 NUTRITION INTEGRATION
        {
            type: "custom",
            component: "MissionBanner",
            title: "Fuel Your Body the Right Way",
            description:
                "Pair your workout with a personalized meal plan designed by a certified nutritionist. Get daily recipes, calorie goals, and grocery lists tailored to your preferences.",
            image: "nutritionBanner",
        },

        // 🟢 VIDEO DEMO
        {
            type: "custom",
            component: "VideoDemo",
            title: "See How Coaching Works",
            description:
                "Watch how our trainers create personalized programs, monitor your form, and help you progress using AI insights.",
            video: "coachWork",
        },

        // 🟢 PRICING PLANS
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: [
                {
                    type: "pricing",
                    variant: "starter",
                    title: "AI Plan",
                    price: "€9",
                    tokens: 900,
                    badgeTop: "AI-Generated Plan",
                    description:
                        "Instant training program generated by AI based on your answers — great for self-starters.",
                    features: [
                        "Instant workout plan",
                        "AI adjustments",
                        "Basic progress tracking",
                    ],
                    buttonText: "Try AI Plan",
                    buttonLink: "/checkout?plan=ai",
                },
                {
                    type: "pricing",
                    variant: "pro",
                    title: "Trainer Plan",
                    price: "€59",
                    tokens: 5900,
                    badgeTop: "Most Popular",
                    description:
                        "Work directly with a certified trainer. Get personalized plan, feedback, and continuous motivation.",
                    features: [
                        "1-on-1 coaching by a professional",
                        "Weekly check-ins and modifications",
                        "Access to chat with your trainer",
                        "Priority feedback within 24h",
                    ],
                    buttonText: "Get Trainer Plan",
                    buttonLink: "/checkout?plan=trainer",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Full Coaching Pack",
                    price: "€99",
                    tokens: 9900,
                    badgeTop: "Complete Transformation",
                    description:
                        "Personal training + nutrition coaching + AI analytics for maximum results.",
                    features: [
                        "Trainer-designed training plan",
                        "Personalized nutrition plan",
                        "24h delivery and feedback",
                        "Smart progress tracking",
                        "Priority support",
                    ],
                    buttonText: "Choose Full Pack",
                    buttonLink: "/checkout?plan=full",
                },
                {
                    type: "pricing",
                    variant: "custom",
                    title: "Custom Plan",
                    price: "dynamic",
                    tokens: 0,
                    badgeTop: "Flexible Option",
                    description:
                        "Mix and match services — training, nutrition, or AI assistance as you prefer.",
                    features: [
                        "Choose training or nutrition focus",
                        "Flexible token usage",
                        "Pay only for what you need",
                    ],
                    buttonText: "Customize Plan",
                    buttonLink: "/checkout?plan=custom",
                },
            ],
        },

        // 🟢 COMMUNITY / TRACKER
        {
            type: "section",
            title: `Join the ${COMPANY_NAME} Community`,
            description:
                "Share progress, ask questions, and celebrate achievements with thousands of members transforming together.",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "Progress Tracker & Social Support",
                image: "image3",
                description:
                    "Our built-in tracker monitors your workouts, nutrition, and progress photos. Stay motivated through daily challenges and trainer feedback.",
                bullets: [
                    "Visual progress tracking dashboard",
                    "Monthly challenges with prizes",
                    "Private support chat with your coach",
                    "AI insights for recovery and sleep",
                ],
            },
            right: {
                type: "card",
                image: "image4",
                title: "Track Every Rep & Meal",
                description:
                    "Monitor progress with beautiful analytics — powered by AI, guided by your trainer.",
                buttonText: "Start Tracking",
                buttonLink: "/profile",
            },
        },

        // 🟢 TESTIMONIALS
        {
            type: "custom",
            component: "TestimonialsSlider",
            title: "Real People. Real Results.",
            description:
                "See how our members achieved their goals with dedicated trainers and science-based plans.",
            testimonials: [
                {
                    name: "Anna Rossi",
                    role: "Entrepreneur",
                    image: "review1",
                    text: "My trainer helped me get back in shape after years of struggle. Weekly calls kept me motivated!",
                    rating: 5,
                },
                {
                    name: "Liam Carter",
                    role: "Student",
                    image: "review2",
                    text: "AI plan was a great start, but adding a trainer made all the difference — real human feedback matters.",
                    rating: 5,
                },
                {
                    name: "Sophia Nguyen",
                    role: "Designer",
                    image: "review3",
                    text: "The full pack with nutrition changed my habits completely — finally feel healthy and strong.",
                    rating: 5,
                },
                {
                    name: "Mark Evans",
                    role: "Engineer",
                    image: "review4",
                    text: "Best decision I made. My trainer adapted the plan to my injuries and I’ve gained strength safely.",
                    rating: 5,
                },
            ],
        },

        // 🟢 FAQ
        {
            type: "faq",
            image: "image5",
            items: [
                {
                    question: "Why choose a trainer instead of AI?",
                    answer:
                        "AI helps automate and analyze — but only a human coach can truly understand your needs, emotions, and physical limitations. Trainers adapt your plan in real time for maximum results.",
                },
                {
                    question: "Can I contact my trainer directly?",
                    answer:
                        "Yes! You’ll have a private chat with your trainer for feedback, form checks, and motivation.",
                },
                {
                    question: "How often will my plan be updated?",
                    answer:
                        "Your trainer reviews and adjusts your plan weekly or as needed depending on your progress.",
                },
                {
                    question: "Can I combine training and nutrition later?",
                    answer:
                        "Absolutely. You can add a personalized meal plan anytime using your tokens.",
                },
                {
                    question: "Are there beginner-friendly options?",
                    answer:
                        "Yes, our coaches work with all levels — from absolute beginners to athletes returning from injury.",
                },
            ],
        },

        // 🟢 FINAL CTA
        {
            type: "custom",
            component: "MissionBanner",
            title: "Your Transformation Starts Now",
            description:
                `Join thousands transforming their bodies and mindset with ${COMPANY_NAME}. Choose your trainer, get your plan, and begin the journey today.`,
            image: "ctaBanner",
        },

        // 🟢 CONTACT
        {
            type: "custom",
            component: "ContactForm",
            title: "Need Help Choosing a Trainer?",
            description:
                "Our support team will help you find the best coach or explain how tokens and plans work.",
        },
    ],
};

export default schema;
