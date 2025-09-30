import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
} from "@/resources/constants";

const termsSchema: PageSchema = {
    meta: {
        title: `Terms & Conditions – ${COMPANY_NAME}`,
        description: `Official Terms & Conditions of ${COMPANY_NAME}. Rules of use, payments, refunds, liability, and user rights.`,
        keywords: [
            "terms",
            "terms and conditions",
            "service agreement",
            "tokens",
            "CV generation",
            "refund policy",
        ],
        canonical: "/terms",
        ogImage: {
            title: `${COMPANY_NAME} – Terms & Conditions`,
            description: "Clear and transparent conditions for using our CV generation services.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Terms & Conditions",
            description: "Effective date: 10 September 2025",
        },
        {
            type: "text",
            title: "1. General Provisions",
            description: `1.1. These Terms and Conditions set out the rules for using the website ${COMPANY_NAME} and the services offered by ${COMPANY_LEGAL_NAME} (Company No. ${COMPANY_NUMBER}), registered at ${COMPANY_ADDRESS} (the “Company,” “we,” “us,” or “our”).\n\n1.2. By accessing our website, creating a CV draft, or purchasing token packages, you confirm your agreement with these Terms. If you do not agree, please do not use the Services.`,
        },
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                "“Services” — tools and features that allow you to create, edit, improve, and export CVs/resumes in PDF or DOCX format, including AI-assisted improvements or personal manager support.",
                "“Draft” — a preliminary version of a CV/resume created by the user.",
                "“Final File” — the completed CV/resume in PDF or DOCX format downloaded by the user.",
                "“Client,” “you” — any individual or entity using our Services or purchasing tokens.",
                "“Tokens” — internal credits used to pay for Services (1 GBP or 1 EUR = 100 tokens).",
            ],
        },
        {
            type: "text",
            title: "3. Right to Use and Account Registration",
            description: `3.1. You must be at least 18 years old to register or purchase Services, or act as an authorized representative of a legal entity.\n\n3.2. You agree to provide accurate, up-to-date information during registration and keep it current.\n\n3.3. You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted through your account.`,
        },
        {
            type: "text",
            title: "4. Ordering, Tokens and Payment",
            description: `4.1. Payments must be made via the methods listed on our website. Services become available only after full payment is received.\n\n4.2. Prices are shown in GBP or EUR. Taxes may apply as required by law.`,
        },
        {
            type: "text",
            title: "5. Service Delivery",
            description: `5.1. Drafts and final files are generated automatically after the required tokens are deducted.\n\n5.2. You are responsible for reviewing your Final File immediately after download.\n\n5.3. In the event of technical errors, the Company may offer regeneration of the file or a refund of the tokens used.`,
        },
        {
            type: "text",
            title: "6. Cancellation and Refunds",
            description: `6.1. Token packages may be canceled before use; refunds are issued minus any applicable payment provider fees.\n\n6.2. Tokens already spent on Services cannot be refunded.\n\n6.3. If a significant technical fault caused by us occurs, compensation or refunds may be provided in line with our refund policy.`,
        },
        {
            type: "text",
            title: "7. Intellectual Property",
            description: `7.1. You retain all rights to the information and materials you upload or enter to create your CV/resume.\n\n7.2. We make no claim of ownership over your content and use it solely for providing Services.\n\n7.3. Final Files generated are fully yours once created.`,
        },
        {
            type: "text",
            title: "8. Confidentiality and Data Processing",
            description: `8.1. We handle personal data in line with our Privacy Policy and relevant data protection laws (UK GDPR and the Data Protection Act 2018).\n\n8.2. Uploaded data is automatically deleted after processing unless required for technical support or legal obligations.`,
        },
        {
            type: "text",
            title: "9. Warranties and Disclaimer",
            description: `9.1. We warrant that Services will be provided with reasonable care and in accordance with their descriptions.\n\n9.2. The Services are provided “as is.” We do not guarantee employment, interview invitations, or any specific career results from using the generated CV/resume.`,
        },
        {
            type: "text",
            title: "10. Limitation of Liability",
            description: `10.1. The Company shall not be liable for indirect or consequential damages, including loss of profit, data, or reputation, except in cases of gross negligence or willful misconduct.\n\n10.2. Our total liability is limited to the actual amount you paid for the token package used for the Service that gave rise to the claim.`,
        },
        {
            type: "text",
            title: "11. Indemnity",
            description: `You agree to indemnify and hold harmless the Company from any claims, damages, or expenses (including reasonable legal fees) resulting from:\n(a) your breach of these Terms;\n(b) unauthorized use of third-party data; or\n(c) misuse of generated files.`,
        },
        {
            type: "text",
            title: "12. Third-Party Links",
            description: "Our website may include links to third-party websites or resources. We are not responsible for their content, accuracy, or availability.",
        },
        {
            type: "text",
            title: "13. Suspension and Termination",
            description: `13.1. We reserve the right to suspend or terminate your account if you breach these Terms, engage in fraudulent activity, or pose a risk to security.\n\n13.2. Termination does not relieve you of obligations accrued prior to termination.`,
        },
        {
            type: "text",
            title: "14. Changes to These Terms",
            description: "We may amend these Terms from time to time. Significant updates will be published on the website or sent via email. Continued use of the Service after such updates constitutes your acceptance.",
        },
        {
            type: "text",
            title: "15. Notices",
            bullets: [
                `📧 ${COMPANY_EMAIL}`,
                `📍 ${COMPANY_ADDRESS}`,
            ],
        },
        {
            type: "text",
            title: "16. Governing Law and Jurisdiction",
            description: "These Terms are governed by the laws of England and Wales. Any disputes shall be resolved exclusively in the courts of England and Wales, except where mandatory consumer protection laws apply in your country of residence.",
        },
        {
            type: "text",
            title: "17. Miscellaneous",
            description: `17.1. If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue in effect.\n\n17.2. Failure to enforce any right does not constitute a waiver of that right.\n\n17.3. These Terms represent the complete agreement between you and the Company regarding the use of our Services.`,
        },
        {
            type: "text",
            title: "Company details",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Registered office: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
            ],
        },
    ],
};

export default termsSchema;
