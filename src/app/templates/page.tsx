"use client";

import React from "react";
import Text from "@/components/constructor/text/Text";
import ExamplesGrid from "@/components/ui/example-grid/ExamplesGrid";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import HighlightStrip from "@/components/constructor/highlight-strip/HighlightStrip";
import FAQ from "@/components/constructor/faq/FAQ";
import { media as mediaMap } from "@/resources/media";

function resolveMedia(key?: string) {
    if (!key) return undefined;
    const v = (mediaMap as Record<string, unknown>)[key];
    if (!v && process.env.NODE_ENV !== "production") {
        console.warn(`⚠️ Media not found: ${key}`);
    }
    return v as any;
}

const Page = () => {
    return (
        <>
            {/* Intro */}
            <Text
                title="Examples of CV"
                description={`Check out our CV templates. Each example can be viewed directly on the website 
                in PDF format with test data or download them for yourself. Use them as 
                inspiration for your own CV.`}
                titleLevel={1}
                centerTitle
                centerDescription
            />

            {/* Highlight Strip для акценту */}
            <HighlightStrip
                messages={[
                    "ATS-friendly CVs 🚀",
                    "Polished by HR experts 👩‍💼",
                    "Templates for every industry 📑",
                ]}
            />


            {/* Основний грід прикладів */}
            <ExamplesGrid />

            {/* InfoBlock для додаткової цінності */}
            <InfoBlock
                title="Why Use Our CV Templates?"
                description="Our CV examples are designed by HR experts to help you stand out. Each template is fully optimized for applicant tracking systems (ATS) and tailored to different industries."
                bullets={[
                    "Professional, recruiter-approved layouts",
                    "100% ATS-optimized formatting",
                    "Easy to edit and customize",
                ]}
                align="center"
                image={resolveMedia("image2")} // ✅ через resolveMedia
            />

            {/* Values Icons */}
            <ValuesIcons
                title="Key Benefits"
                description="When using our CV templates you get:"
                values={[
                    { icon: "⚡", title: "Speed", text: "Generate your CV in minutes" },
                    { icon: "📑", title: "ATS Safe", text: "Pass recruiter filters easily" },
                    { icon: "🎨", title: "Designs", text: "Modern layouts for all industries" },
                ]}
            />

            {/* FAQ у кінці */}
            <FAQ
                items={[
                    {
                        question: "Can I download the CV examples?",
                        answer: "Yes, each template is available as a PDF with sample data.",
                    },
                    {
                        question: "Are the CVs ATS-friendly?",
                        answer: "Absolutely. All our templates are designed to pass applicant tracking systems.",
                    },
                    {
                        question: "Can I customize the CV?",
                        answer: "Of course! You can edit text, layout, and design to match your profile.",
                    },
                ]}
            />
        </>
    );
};

export default Page;
