"use client";

import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
    pdf,
} from "@react-pdf/renderer";
import { AiOrder, CVOrder } from "@/context/AllOrdersContext";

const s = StyleSheet.create({
    page: { padding: 40, fontSize: 11, fontFamily: "Helvetica" },
    h1: { fontSize: 22, fontWeight: "bold", marginBottom: 4 },
    contact: { color: "#444", marginBottom: 12 },
    sec: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 12,
        marginBottom: 6,
        color: "#2563eb",
        borderBottom: "1px solid #2563eb",
        paddingBottom: 2,
    },
    p: { marginBottom: 6, lineHeight: 1.4 },
    row: { flexDirection: "row" },
    left: { width: "35%", paddingRight: 10 },
    right: { width: "65%", paddingLeft: 10 },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
        alignSelf: "center",
        border: "2px solid #2563eb",
    },
    chip: {
        padding: 6,
        backgroundColor: "#eef2ff",
        borderRadius: 6,
        marginBottom: 10,
        textAlign: "center",
    },
    footer: {
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        fontSize: 10,
        textAlign: "center",
        color: "grey",
    },
});

const renderContent = (content: string | undefined | null) => {
    if (!content || typeof content !== "string") {
        return <Text style={s.p}>No content available</Text>;
    }

    return content
        .split("\n")
        .map((line, idx) => {
            const safeLine = (line ?? "").toString().trim();
            if (!safeLine) return null;

            if (/^(Summary|Work Experience|Education|Skills)/i.test(safeLine)) {
                return (
                    <Text key={idx} style={s.sec}>
                        {safeLine}
                    </Text>
                );
            }

            return (
                <Text key={idx} style={s.p}>
                    {safeLine}
                </Text>
            );
        })
        .filter(Boolean);
};

// 🟦 Classic CV
const Classic = (o: CVOrder) => (
    <Document>
        <Page style={s.page}>
            <Text style={{ ...s.h1, color: "#111827" }}>{o.fullName}</Text>
            <Text style={s.contact}>
                {o.email} • {o.phone}
            </Text>
            <Text style={s.sec}>Summary</Text>
            <Text style={s.p}>{o.summary}</Text>
            <Text style={s.sec}>Work Experience</Text>
            <Text style={s.p}>{o.workExperience}</Text>
            <Text style={s.sec}>Education</Text>
            <Text style={s.p}>{o.education}</Text>
            <Text style={s.sec}>Skills</Text>
            <Text style={s.p}>{o.skills}</Text>
        </Page>
    </Document>
);

// 🟪 Modern CV (з кольоровими секціями і акцентами)
const Modern = (o: CVOrder) => (
    <Document>
        <Page style={{ ...s.page, backgroundColor: "#f8fafc" }}>
            <View style={s.row}>
                <View
                    style={{
                        ...s.left,
                        backgroundColor: "#2563eb",
                        color: "white",
                        padding: 16,
                        borderRadius: 8,
                    }}
                >
                    {o.photo ? <Image src={o.photo} style={s.avatar} /> : null}
                    <Text style={{ textAlign: "center", marginBottom: 10, fontWeight: "bold" }}>
                        {o.industry} • {o.experienceLevel}
                    </Text>
                    <Text style={{ textAlign: "center" }}>{o.email}</Text>
                    <Text style={{ textAlign: "center" }}>{o.phone}</Text>
                </View>

                <View style={s.right}>
                    <Text style={{ ...s.h1, color: "#1d4ed8" }}>{o.fullName}</Text>
                    <Text style={s.sec}>Summary</Text>
                    <Text style={s.p}>{o.summary}</Text>
                    <Text style={s.sec}>Work Experience</Text>
                    <Text style={s.p}>{o.workExperience}</Text>
                    <Text style={s.sec}>Education</Text>
                    <Text style={s.p}>{o.education}</Text>
                    <Text style={s.sec}>Skills</Text>
                    <Text style={s.p}>{o.skills}</Text>
                </View>
            </View>
        </Page>
    </Document>
);

// 🎨 Creative CV (кольоровий sidebar, акценти, більше декоративності)
const Creative = (o: CVOrder) => (
    <Document>
        <Page style={{ ...s.page, flexDirection: "row" }}>
            <View
                style={{
                    ...s.left,
                    backgroundColor: "#1e293b",
                    color: "white",
                    padding: 20,
                    borderRadius: 8,
                }}
            >
                {o.photo ? <Image src={o.photo} style={s.avatar} /> : null}
                <Text style={{ ...s.h1, fontSize: 18, textAlign: "center", marginBottom: 6 }}>
                    {o.fullName}
                </Text>
                <Text style={{ textAlign: "center", marginBottom: 6 }}>
                    {o.industry} • {o.experienceLevel}
                </Text>
                <Text style={{ fontSize: 10, textAlign: "center", marginBottom: 12 }}>
                    {o.email} | {o.phone}
                </Text>

                <View style={{ marginTop: 12 }}>
                    <Text style={{ fontWeight: "bold", marginBottom: 4, borderBottom: "1px solid #fff" }}>
                        Skills
                    </Text>
                    <Text>{o.skills}</Text>
                </View>
            </View>

            <View style={{ ...s.right, paddingLeft: 20 }}>
                <Text style={{ ...s.sec, color: "#9333ea" }}>Summary</Text>
                <Text style={s.p}>{o.summary}</Text>
                <Text style={{ ...s.sec, color: "#9333ea" }}>Work Experience</Text>
                <Text style={s.p}>{o.workExperience}</Text>
                <Text style={{ ...s.sec, color: "#9333ea" }}>Education</Text>
                <Text style={s.p}>{o.education}</Text>
            </View>
        </Page>
    </Document>
);

// 🔹 Unified
export const downloadPDF = async (
    order: AiOrder | CVOrder,
    template: "Classic" | "Modern" | "Creative" = "Classic"
) => {
    let MyDoc;

    if ("cvStyle" in order) {
        switch (order.cvStyle) {
            case "Modern":
                MyDoc = Modern(order);
                break;
            case "Creative":
                MyDoc = Creative(order);
                break;
            default:
                MyDoc = Classic(order);
        }
    } else {
        MyDoc = (
            <Document>
                <Page style={s.page} wrap>
                    <Text style={s.h1}>Generated Document</Text>
                    {renderContent(order.response)}
                    <Text
                        style={s.footer}
                        render={({ pageNumber, totalPages }) =>
                            `${pageNumber} / ${totalPages}`
                        }
                    />
                </Page>
            </Document>
        );
    }

    const blob = await pdf(MyDoc).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `cv-${template.toLowerCase()}-${order._id}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
};
