import { PageSchema } from "@/components/constructor/page-render/types";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: "Privacy Policy – Averis",
        description:
            "Averis Privacy Policy: details on what data we collect, how we use it, retention, transfers, and your rights under UK GDPR.",
        keywords: [
            "privacy policy",
            "GDPR",
            "data protection",
            "averis",
            "fitness AI",
            "personal data",
            "uk gdpr",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: "Averis – Privacy Policy",
            description:
                "Transparent privacy practices for Averis AI fitness platform under UK GDPR.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Privacy Policy",
            description: "Effective date: 18 October 2025",
        },
        {
            type: "text",
            title: "1. Introduction",
            description:
                "We value and respect your privacy. This Privacy Policy explains what personal data we collect, why we use it, how long we retain it, and how you can exercise your rights when using averis.co.uk and related services (the “Service”).",
            bullets: [
                "Controller: SHIREDON LIMITED (Company No. 15799662), Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF (“Averis”, “we”, “us”, “our”).",
                "Contact: info@averis.co.uk",
                "Scope: This Policy applies to users of the Service. The Service is intended for individuals 18+.",
            ],
        },
        {
            type: "text",
            title: "2. Data We Collect",
            description: "We collect only the data needed to operate, secure, and improve the Service.",
        },
        {
            type: "text",
            title: "2.1. Data You Provide Directly",
            bullets: [
                "Name and contact details (e.g., email).",
                "Account credentials (stored securely in hashed form).",
                "Billing details (billing address; optional VAT information for invoices).",
                "Inputs for plan generation: fitness goals, target muscle groups, current level, age range, height/weight ranges, injuries/limitations, available equipment, preferred training style/schedule, and other free-form prompts you choose to provide.",
                "Support requests and communications.",
            ],
        },
        {
            type: "text",
            title: "2.2. Collected Automatically",
            bullets: [
                "IP address, device and browser information, timezone, language, access logs, and security telemetry (e.g., failed logins).",
                "Usage data: page views, clicks, token purchases/redemptions, generation attempts, error logs, and aggregate performance metrics.",
            ],
        },
        {
            type: "text",
            title: "2.3. From Third Parties (as Needed)",
            bullets: [
                "Payment processors (transaction references and status; never full card numbers).",
                "Fraud-prevention/anti-abuse providers (risk signals).",
            ],
            description:
                "Special category data: information about injuries, health conditions, or mobility limitations that you voluntarily provide may qualify as special category data. We process such data only to personalise workout plans, and only with your consent.",
        },
        {
            type: "text",
            title: "3. Why We Process Your Data & Legal Bases",
            description:
                "We process personal data under the UK GDPR and the Data Protection Act 2018 on the following bases:",
        },
        {
            type: "text",
            title: "3.1. Performance of a Contract",
            bullets: [
                "To register and maintain your account.",
                "To process token top-ups and deliver digital content (Workout Plans/PDFs).",
                "To provide customer support and handle refunds or queries.",
            ],
        },
        {
            type: "text",
            title: "3.2. Consent (Including Special Category Data)",
            bullets: [
                "To use health/fitness details (e.g., injuries, limitations) that you input to tailor results.",
                "To send marketing emails/newsletters where you opt in.",
                "To use your content/feedback for model improvement where you opt in (we do not use personal data for training unless you consent).",
            ],
            description:
                "You can withdraw consent at any time via account settings or by contacting us. Withdrawal does not affect prior lawful processing but may reduce the relevance of generated results.",
        },
        {
            type: "text",
            title: "3.3. Legitimate Interests",
            bullets: [
                "To keep the Service secure (fraud detection, abuse prevention, logging).",
                "To measure and improve performance and user experience.",
                "To communicate important non-marketing updates about the Service.",
            ],
        },
        {
            type: "text",
            title: "3.4. Legal Obligation",
            bullets: [
                "Tax, accounting, and compliance record-keeping.",
                "Responding to lawful requests from authorities.",
            ],
        },
        {
            type: "text",
            title: "4. AI, Profiling and Automated Decisions",
            bullets: [
                "The Service uses AI to generate workout plans based on your inputs. This involves automated processing and limited profiling to match exercises to your preferences and goals.",
                "We do not make legal or similarly significant decisions about you solely by automated means.",
                "You can choose not to provide health-related data (results may be less relevant). You may also request human review of any support outcome.",
            ],
        },
        {
            type: "text",
            title: "5. Sharing and International Transfers",
            bullets: [
                "Payment processing: card acquirers/processors (we receive transaction references/status, not full card details).",
                "Hosting & IT: secure cloud infrastructure, content delivery, storage, and backups.",
                "Product & support tooling: analytics (aggregated/pseudonymised where possible), helpdesk, and email delivery.",
                "Professional advisers: legal, accounting, and compliance where required.",
                "Some providers may be located outside the UK/EEA. Appropriate safeguards (e.g., UK adequacy, SCCs) are applied.",
                "We do not sell your personal data.",
            ],
        },
        {
            type: "text",
            title: "6. Cookies",
            description:
                "We use cookies and similar technologies (e.g., localStorage) to run the Service, remember preferences, measure performance, and—where you consent—enable analytics or marketing. Essential cookies are required for security and core functionality. See our Cookie Policy for full details.",
        },
        {
            type: "text",
            title: "7. Retention",
            bullets: [
                "Orders, tokens & transactions: retained for at least 24 months, and up to 6 years where required.",
                "Account & profile data: retained while your account is active and up to 24 months after closure, unless needed longer for legal or security reasons.",
                "Logs & security telemetry: typically 6–24 months depending on purpose.",
                "Where possible, data is minimised, pseudonymised, or anonymised before deletion.",
            ],
        },
        {
            type: "text",
            title: "8. Your Rights",
            bullets: [
                "Access your data.",
                "Rectification of inaccurate data.",
                "Erasure ('right to be forgotten').",
                "Restriction of processing.",
                "Data portability.",
                "Object to processing based on legitimate interests.",
                "Withdraw consent at any time (for marketing, fitness data, or model improvement).",
            ],
            description:
                "To exercise your rights, email info@averis.co.uk from your account address. Proof of identity may be required. We aim to respond within one month, extendable by two months for complex requests.",
        },
        {
            type: "text",
            title: "9. Security",
            bullets: [
                "Access controls, role-based permissions, and MFA for admin interfaces.",
                "Encryption in transit (HTTPS/TLS) and at rest where applicable.",
                "Network segregation, firewalls, and backups.",
                "Logging, monitoring, and incident-response processes.",
                "Vendor due diligence and processor safeguards.",
            ],
            description:
                "No system is 100% secure, but we continuously improve protections and promptly investigate incidents.",
        },
        {
            type: "text",
            title: "10. Children’s Data",
            description:
                "The Service is for users 18+. We do not knowingly collect data from children. If you believe a child has provided data to us, contact info@averis.co.uk to have it deleted.",
        },
        {
            type: "text",
            title: "11. Changes",
            description:
                "We may update this Policy periodically. Material changes will be notified by email and/or prominent in-product notice. Updates apply prospectively.",
        },
        {
            type: "text",
            title: "12. Contact & Complaints",
            bullets: [
                "Controller: SHIREDON LIMITED",
                "Address: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, United Kingdom, CF31 1JF",
                "Email (privacy): info@averis.co.uk",
                "If you are unsatisfied with our response, you may lodge a complaint with the UK Information Commissioner’s Office (ICO) or your local data protection authority within the EEA.",
            ],
        },
    ],
};

export default privacyPolicySchema;
