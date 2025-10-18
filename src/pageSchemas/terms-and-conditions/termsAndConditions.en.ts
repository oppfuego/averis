import { PageSchema } from "@/components/constructor/page-render/types";

const termsSchema: PageSchema = {
    meta: {
        title: "Terms and Conditions – Averis",
        description:
            "Official Terms and Conditions for using Averis.co.uk – rules, payments, tokens, refunds, liability, and user rights.",
        keywords: [
            "terms and conditions",
            "averis",
            "tokens",
            "refunds",
            "workout plan",
            "AI fitness",
            "digital content",
        ],
        canonical: "/terms-and-conditions",
        ogImage: {
            title: "Averis – Terms and Conditions",
            description: "Full Terms and Conditions for Averis AI Workout Platform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Terms and Conditions",
            description:
                "Effective date: 18 October 2025\n\nThese Terms and Conditions govern your access to and use of averis.co.uk and related services provided by SHIREDON LIMITED.",
        },
        {
            type: "text",
            title: "1. Introduction",
            description:
                "1.1. These Terms and Conditions (“Terms”) govern your access to and use of averis.co.uk, our related web pages, applications, and downloadable documents (the “Service”), operated by SHIREDON LIMITED (company number 15799662, registered office: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF) (“Averis”, “we”, “us”, “our”). These Terms constitute a legally binding agreement between Averis and each person who uses the Service (“you”, “User”, “Customer”).\n\n1.2. By creating an account, purchasing Tokens, or generating any workout plan or PDF through the Service, you agree to these Terms. If you do not agree, do not use the Service.",
        },
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                "Account – your user profile on the Service.",
                "Tokens – our internal, prepaid digital credits that enable you to use specific features of the Service (e.g., plan generation, PDF export). Tokens are not cash, e-money, or financial instruments.",
                "Workout Plan / Plan – any personalised or template workout program, exercise schedule, recommendations, trackers, and any related digital content generated or supplied via the Service, including PDFs.",
                "Add-ons / Extras – optional paid features or modules (e.g., extended program duration, multiple goal variants, enriched analytics, nutrition companion module where available).",
                "Order – a confirmed transaction to purchase Tokens and/or to redeem Tokens for Services.",
                "Services – the Averis platform and its features including the fitness intake forms, AI-assisted plan generation, optional human-coach review (if available in your region/plan), PDF creation, and delivery of digital content.",
                "Checkout Currency – GBP (£) or EUR (€), as selected at checkout.",
            ],
        },
        {
            type: "text",
            title: "3. Eligibility & Account Registration",
            description:
                "3.1. You must be 18 years or older to use the Service. If you use the Service on behalf of a company or organisation, you confirm that you have authority to bind that entity.\n\n3.2. You must provide accurate, current information and keep your credentials secure. You are responsible for all activity under your Account.\n\n3.3. Notify us immediately of any suspected unauthorised access or security incident at info@averis.co.uk.",
        },
        {
            type: "text",
            title: "4. Tokens",
            description:
                "4.1. Tokens prepay access to features of the Service. Tokens have no cash value, are non-transferable, and may not be exchanged, traded, or resold.\n\n4.2. Tokens are issued after successful card payment. The current rate is displayed at the time of purchase (e.g., £1.00 ≈ 100 Tokens, €1.17 ≈ 100 Tokens).\n\n4.3. Features and Plans are priced in Tokens, with conversion shown for reference.\n\n4.4. If a generation fails for technical reasons attributable to us, Tokens are restored automatically or via support.\n\n4.5. Tokens do not expire unless otherwise stated; inactive accounts (24 months) may be archived.\n\n4.6. Promotional or bonus Tokens may be subject to additional rules shown at the time of offer.\n\n4.7. Standard generation price and extras are shown before confirmation; prices may change from time to time.",
        },
        {
            type: "text",
            title: "5. Ordering, Payment & Checkout",
            description:
                "Accepted payment methods: Visa, Mastercard · Accepted currencies: GBP (£), EUR (€)\n\n5.1. Orders are subject to acceptance; we may refuse to prevent fraud or technical errors.\n\n5.2. By paying, you confirm you are authorised to use the selected card.\n\n5.3. Prices are shown in GBP or EUR; VAT may apply depending on billing country.\n\n5.4. Plans and PDFs are delivered electronically; generation time varies by system load.",
        },
        {
            type: "text",
            title: "6. Cancellations, Refunds & Consumer Rights",
            description:
                "6.1. By starting a generation, you request immediate performance and acknowledge loss of the statutory right to cancel.\n\n6.2. Unused Token top-ups may be cancelled within 14 days of purchase if unused.\n\n6.3. Used Tokens are non-refundable unless required by law.\n\n6.4. If a PDF is defective, contact info@averis.co.uk within 14 days citing your Order ID.\n\n6.5. Unwarranted chargebacks may result in suspension or removal of equivalent Tokens.",
        },
        {
            type: "text",
            title: "7. Health, Fitness & Safety Disclaimer",
            description:
                "7.1. Averis provides AI-generated workout plans for informational purposes only and does not provide medical advice.\n\n7.2. Consult a healthcare professional before starting any exercise program.\n\n7.3. You are responsible for ensuring proper form, safe environment, and appropriate equipment.\n\n7.4. Exercise carries risks; you accept these by using the Service.",
        },
        {
            type: "text",
            title: "8. Your Inputs & Acceptable Use",
            description:
                "8.1. You must provide lawful, truthful inputs and avoid uploading illegal or harmful content.\n\n8.2. You must not misuse the Service (e.g., reverse engineering, scraping, disrupting, or circumventing limits).",
        },
        {
            type: "text",
            title: "9. Intellectual Property & Licences",
            description:
                "9.1. The Service and its content are owned by Averis or its licensors.\n\n9.2. Upon valid redemption, you receive a personal, non-transferable licence to use your generated Plans and PDFs.\n\n9.3. You retain rights to your inputs and grant Averis a limited licence to use anonymised data for service improvement.",
        },
        {
            type: "text",
            title: "10. Warranties & Disclaimers",
            description:
                "10.1. We warrant that we are entitled to provide the Service.\n\n10.2. Except as stated, the Service is provided “as is” and “as available.”\n\n10.3. No specific health or fitness outcome is guaranteed.",
        },
        {
            type: "text",
            title: "11. Limitation of Liability",
            description:
                "11.1. Nothing limits liability for death or injury caused by negligence or fraud.\n\n11.2. Our total liability in any 12-month period shall not exceed the total amount paid for Tokens/Services.\n\n11.3. We are not liable for indirect or consequential losses.",
        },
        {
            type: "text",
            title: "12. Indemnity",
            description:
                "You agree to indemnify Averis and its staff against claims or damages arising from unlawful use of the Service or violation of these Terms.",
        },
        {
            type: "text",
            title: "13. Data Protection & Privacy",
            description:
                "13.1. We process personal data in accordance with UK GDPR and the Data Protection Act 2018.\n\n13.2. By using the Service, you accept our Privacy Policy and acknowledge your data rights.",
        },
        {
            type: "text",
            title: "14. Third-Party Services & Links",
            description:
                "The Service may include links or integrations with third-party services (e.g., payment processors). We are not responsible for their practices or content.",
        },
        {
            type: "text",
            title: "15. Suspension & Termination",
            description:
                "15.1. We may suspend or terminate access if you breach these Terms or create security/fraud risks.\n\n15.2. Upon termination, your licence to use the Service ceases, and minimal records may be retained as required by law.",
        },
        {
            type: "text",
            title: "16. Changes to the Service or Terms",
            description:
                "16.1. We may update these Terms for legal, technical, or business reasons.\n\n16.2. Material updates will be communicated by email or in-product notice. Continued use constitutes acceptance.",
        },
        {
            type: "text",
            title: "17. Notices",
            description:
                "Formal notices: info@averis.co.uk or post to our registered office. We may contact you via email or in-app messages.",
        },
        {
            type: "text",
            title: "18. Governing Law & Jurisdiction",
            description:
                "These Terms are governed by the laws of England and Wales. Courts of England and Wales have exclusive jurisdiction, except that EU or UK consumers may bring claims locally.",
        },
        {
            type: "text",
            title: "19. Miscellaneous",
            description:
                "19.1. Invalid provisions do not affect validity of others.\n\n19.2. No delay or omission constitutes a waiver.\n\n19.3. You may not transfer your rights without written consent.\n\n19.4. These Terms are the full agreement between you and Averis.",
        },
        {
            type: "text",
            title: "20. Contact Details",
            bullets: [
                "SHIREDON LIMITED",
                "Registered office: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF",
                "Company number: 15799662",
                "Email: info@averis.co.uk",
                "Tel: +44 7441 393249",
            ],
        },
    ],
};

export default termsSchema;
