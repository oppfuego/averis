"use client";

import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import { CVOrderType } from "@/backend/types/cv.types";

// 🧩 Текстові блоки з перенесенням рядків
const renderParagraphs = (text?: string, style?: any) =>
    text
        ?.split(/\n{1,2}/)
        .filter((t) => t.trim())
        .map((p, i) => (
            <Text key={i} style={style}>
                {p.trim().replace(/\n/g, " ")}
            </Text>
        ));

// 🎨 Динамічний набір тем
const getTheme = (o: CVOrderType) => {
    const primary = o.themeColor && o.themeColor !== "Default" ? o.themeColor : "#2563EB"; // синій за замовчуванням
    const font = o.fontStyle && o.fontStyle !== "Default" ? o.fontStyle : "Helvetica";
    const accent =
        primary === "#DC2626"
            ? "#FEE2E2"
            : primary === "#059669"
                ? "#D1FAE5"
                : primary === "#7C3AED"
                    ? "#EDE9FE"
                    : primary === "#F59E0B"
                        ? "#FEF3C7"
                        : "#DBEAFE"; // пастельний відтінок
    return { primary, accent, font, text: "#111827", bg: "#FFFFFF" };
};

// 🧠 Extras-сторінки (cover letter, LinkedIn і т.д.)
const renderExtrasPages = (o: CVOrderType, theme: ReturnType<typeof getTheme>) => {
    if (!o.extrasData) return null;

    const titles: Record<string, string> = {
        coverLetter: "COVER LETTER",
        linkedin: "LINKEDIN SUMMARY",
        keywords: "KEYWORD OPTIMIZATION",
        atsCheck: "ATS COMPATIBILITY",
        jobAdaptation: "JOB-TAILORED VERSION",
        achievements: "ACHIEVEMENTS BOOST",
        skillsGap: "AI SKILLS GAP REPORT",
        onePage: "CONDENSED CV",
    };

    return Object.entries(o.extrasData).map(([key, raw]) => {
        const title = titles[key] || key;
        const value = String(raw)
            .replace(/\*\*(.*?)\*\*/g, "$1")
            .replace(/```[a-z]*\n?/g, "")
            .replace(/```/g, "");

        return (
            <Page
                key={key}
                size="A4"
                style={{
                    padding: 50,
                    backgroundColor: theme.bg,
                    fontFamily: theme.font,
                    color: theme.text,
                }}
            >
                <View
                    style={{
                        borderBottom: `3pt solid ${theme.primary}`,
                        marginBottom: 16,
                        paddingBottom: 6,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 18,
                            color: theme.primary,
                            fontWeight: "bold",
                            letterSpacing: 1,
                        }}
                    >
                        {title}
                    </Text>
                </View>
                {renderParagraphs(value, {
                    fontSize: 11,
                    marginBottom: 8,
                    textAlign: "justify",
                    lineHeight: 1.5,
                })}
            </Page>
        );
    });
};

//
// 🧾 CLASSIC
//
//
// 🧾 CLASSIC
//
export const ClassicCV = (o: CVOrderType) => {
    const theme = getTheme(o);
    const s = StyleSheet.create({
        page: {
            padding: 45,
            fontFamily: theme.font,
            color: theme.text,
            backgroundColor: theme.bg,
        },
        header: {
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginBottom: 10,
            borderBottom: `3pt solid ${theme.primary}`,
            paddingBottom: 8,
        },
        avatar: {
            width: 70,
            height: 70,
            borderRadius: 35,
            border: `2pt solid ${theme.primary}`,
        },
        h1: {
            fontSize: 22,
            fontWeight: "bold",
            color: theme.primary,
            marginBottom: 4,
        },
        h2: {
            fontSize: 13,
            color: theme.primary,
            marginVertical: 6,
            borderBottom: `2pt solid ${theme.primary}`,
            paddingBottom: 2,
            textTransform: "uppercase",
        },
        p: {
            fontSize: 11,
            marginBottom: 6,
            textAlign: "justify",
        },
        sectionBox: {
            backgroundColor: theme.accent,
            borderLeft: `4pt solid ${theme.primary}`,
            padding: 10,
            marginTop: 8,
            marginBottom: 10,
            borderRadius: 6,
        },
    });

    return (
        <Document>
            <Page size="A4" style={s.page}>
                {/* 🔹 Header з фото */}
                <View style={s.header}>
                    {o.photo && (
                        <Image src={o.photo} style={s.avatar} />
                    )}
                    <View>
                        <Text style={s.h1}>{o.fullName}</Text>
                        <Text style={{ color: theme.primary }}>
                            {o.email} • {o.phone}
                        </Text>
                    </View>
                </View>

                {/* 🔹 Summary */}
                <View style={s.sectionBox}>
                    <Text style={s.h2}>Professional Summary</Text>
                    {renderParagraphs(o.summary, s.p)}
                </View>

                {/* 🔹 Experience */}
                <View style={s.sectionBox}>
                    <Text style={s.h2}>Experience</Text>
                    {renderParagraphs(o.workExperience, s.p)}
                </View>

                {/* 🔹 Education */}
                <View style={s.sectionBox}>
                    <Text style={s.h2}>Education</Text>
                    {renderParagraphs(o.education, s.p)}
                </View>

                {/* 🔹 Skills */}
                <View style={s.sectionBox}>
                    <Text style={s.h2}>Skills</Text>
                    {renderParagraphs(o.skills, s.p)}
                </View>
            </Page>

            {renderExtrasPages(o, theme)}
        </Document>
    );
};

//
// 💼 MODERN
//
export const ModernCV = (o: CVOrderType) => {
    const theme = getTheme(o);
    const s = StyleSheet.create({
        page: {
            padding: 35,
            backgroundColor: theme.bg,
            fontFamily: theme.font,
            color: theme.text,
        },
        left: {
            width: "32%",
            backgroundColor: theme.accent,
            padding: 14,
            borderRadius: 8,
        },
        right: { width: "68%", paddingLeft: 20 },
        avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 12, border: `3pt solid ${theme.primary}` },
        chip: {
            backgroundColor: theme.primary,
            color: "white",
            fontSize: 9,
            padding: 4,
            borderRadius: 4,
            textAlign: "center",
        },
        h1: { fontSize: 20, fontWeight: "bold", color: theme.primary, marginBottom: 6 },
        h2: { fontSize: 13, marginVertical: 6, color: theme.primary },
        p: { fontSize: 10.5, marginBottom: 6, textAlign: "justify" },
    });

    return (
        <Document>
            <Page size="A4" style={s.page}>
                <View style={{ flexDirection: "row" }}>
                    <View style={s.left}>
                        {o.photo && <Image src={o.photo} style={s.avatar} />}
                        <Text style={s.chip}>
                            {o.industry} • {o.experienceLevel}
                        </Text>
                        <Text style={{ fontSize: 10, marginTop: 8 }}>{o.email}</Text>
                        <Text style={{ fontSize: 10 }}>{o.phone}</Text>
                        <Text style={[s.h2, { borderBottom: `1pt solid ${theme.primary}` }]}>Skills</Text>
                        {renderParagraphs(o.skills, s.p)}
                    </View>
                    <View style={s.right}>
                        <Text style={s.h1}>{o.fullName}</Text>
                        <Text style={s.h2}>Summary</Text>
                        {renderParagraphs(o.summary, s.p)}
                        <Text style={s.h2}>Experience</Text>
                        {renderParagraphs(o.workExperience, s.p)}
                        <Text style={s.h2}>Education</Text>
                        {renderParagraphs(o.education, s.p)}
                    </View>
                </View>
            </Page>
            {renderExtrasPages(o, theme)}
        </Document>
    );
};

//
// 🎨 CREATIVE
//
export const CreativeCV = (o: CVOrderType) => {
    const theme = getTheme(o);

    const s = StyleSheet.create({
        page: {
            fontFamily: theme.font,
            color: theme.text,
            backgroundColor: theme.bg,
            padding: 0,
        },
        header: {
            backgroundColor: theme.primary,
            color: "white",
            padding: 30,
            flexDirection: "row",
            alignItems: "center",
        },
        avatar: {
            width: 100,
            height: 100,
            borderRadius: 50,
            border: "3pt solid white",
            marginRight: 20,
        },
        nameBlock: {
            flexGrow: 1,
        },
        name: {
            fontSize: 22,
            fontWeight: "bold",
            color: "white",
            marginBottom: 4,
        },
        subtitle: {
            fontSize: 11,
            color: "#E5E7EB",
        },
        contact: {
            fontSize: 10,
            color: "#F3F4F6",
            marginTop: 4,
        },

        // Основна зона
        content: {
            flexDirection: "row",
            padding: 25,
        },
        sidebar: {
            width: "35%",
            backgroundColor: theme.accent,
            padding: 20,
            borderRadius: 10,
            marginRight: 20,
            minHeight: "90%",
        },
        main: {
            width: "65%",
            paddingRight: 15,
        },
        h2: {
            fontSize: 14,
            color: theme.primary,
            fontWeight: "bold",
            marginBottom: 6,
            textTransform: "uppercase",
            borderBottom: `2pt solid ${theme.primary}`,
            paddingBottom: 2,
        },
        p: {
            fontSize: 11,
            marginBottom: 6,
            textAlign: "justify",
        },
        skillTag: {
            backgroundColor: theme.primary,
            color: "white",
            fontSize: 9,
            padding: "4 6",
            borderRadius: 4,
            marginRight: 5,
            marginBottom: 5,
        },
        skillContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 6,
        },
        block: {
            marginBottom: 12,
        },
    });

    return (
        <Document>
            <Page size="A4" style={s.page}>
                {/* 🔹 Верхній блок */}
                <View style={s.header}>
                    {o.photo && <Image src={o.photo} style={s.avatar} />}
                    <View style={s.nameBlock}>
                        <Text style={s.name}>{o.fullName}</Text>
                        <Text style={s.subtitle}>
                            {o.industry} • {o.experienceLevel}
                        </Text>
                        <Text style={s.contact}>
                            {o.email} • {o.phone}
                        </Text>
                    </View>
                </View>

                {/* 🔹 Контент */}
                <View style={s.content}>
                    {/* 🔸 Sidebar */}
                    <View style={s.sidebar}>
                        <Text style={[s.h2, { color: theme.primary }]}>Skills</Text>
                        <View style={s.skillContainer}>
                            {o.skills
                                ?.split(/[,;\n]/)
                                .filter((s) => s.trim())
                                .map((skill, i) => (
                                    <Text key={i} style={s.skillTag}>
                                        {skill.trim()}
                                    </Text>
                                ))}
                        </View>

                        <View style={[s.block, { marginTop: 20 }]}>
                            <Text style={[s.h2, { color: theme.primary }]}>Education</Text>
                            {renderParagraphs(o.education, s.p)}
                        </View>

                        <View style={s.block}>
                            <Text style={[s.h2, { color: theme.primary }]}>Highlights</Text>
                            <Text style={[s.p, { fontStyle: "italic" }]}>
                                Innovative • Team Player • Fast Learner
                            </Text>
                        </View>
                    </View>

                    {/* 🔹 Main */}
                    <View style={s.main}>
                        <View style={s.block}>
                            <Text style={s.h2}>Summary</Text>
                            {renderParagraphs(o.summary, s.p)}
                        </View>

                        <View style={s.block}>
                            <Text style={s.h2}>Experience</Text>
                            {renderParagraphs(o.workExperience, s.p)}
                        </View>

                        <View style={s.block}>
                            <Text style={s.h2}>Achievements</Text>
                            <Text style={s.p}>
                                - Improved project delivery efficiency by 30%.{"\n"}- Mentored junior developers.{"\n"}- Implemented scalable UI components with AI tools.
                            </Text>
                        </View>
                    </View>
                </View>
            </Page>

            {renderExtrasPages(o, theme)}
        </Document>
    );
};


//
// 🧠 MANAGER REVIEWED
//
export const ManagerReviewedCV = (o: CVOrderType) => {
    const theme = getTheme(o);
    const s = StyleSheet.create({
        page: {
            padding: 40,
            border: `3pt solid ${theme.primary}`,
            fontFamily: theme.font,
            color: theme.text,
            backgroundColor: theme.bg,
        },
        h1: {
            fontSize: 20,
            textAlign: "center",
            textDecoration: "underline",
            color: theme.primary,
            marginBottom: 6,
        },
        p: { fontSize: 11, marginBottom: 8, textAlign: "justify" },
    });

    return (
        <Document>
            <Page size="A4" style={s.page}>
                <Text style={s.h1}>{o.fullName}</Text>
                <Text style={{ textAlign: "center", color: theme.primary, marginBottom: 8 }}>
                    {o.email} • {o.phone}
                </Text>
                {renderParagraphs(o.response, s.p)}
            </Page>
            {renderExtrasPages(o, theme)}
        </Document>
    );
};

//
// ⚡ ONE PAGE
//
export const OnePageCV = (o: CVOrderType) => {
    const theme = getTheme(o);
    const s = StyleSheet.create({
        page: {
            padding: 30,
            borderTop: `6pt solid ${theme.primary}`,
            fontFamily: theme.font,
            color: theme.text,
            backgroundColor: theme.bg,
        },
        h1: { fontSize: 18, color: theme.primary, marginBottom: 4 },
        h2: { fontSize: 12, marginVertical: 5, color: theme.primary },
        p: { fontSize: 10.5, marginBottom: 5, textAlign: "justify" },
        divider: { height: 2, backgroundColor: theme.primary, marginVertical: 6 },
    });

    return (
        <Document>
            <Page size="A4" style={s.page}>
                <Text style={s.h1}>{o.fullName}</Text>
                <Text style={{ color: theme.primary, marginBottom: 10 }}>
                    {o.email} • {o.phone}
                </Text>
                <View style={s.divider} />
                <Text style={s.h2}>Summary</Text>
                {renderParagraphs(o.summary, s.p)}
                <Text style={s.h2}>Experience</Text>
                {renderParagraphs(o.workExperience, s.p)}
                <Text style={s.h2}>Education</Text>
                {renderParagraphs(o.education, s.p)}
                <Text style={s.h2}>Skills</Text>
                {renderParagraphs(o.skills, s.p)}
            </Page>
            {renderExtrasPages(o, theme)}
        </Document>
    );
};
