"use client";

import { Document, Page, Text, View, Image, StyleSheet, pdf } from "@react-pdf/renderer";
import { CVOrderType } from "@/backend/types/cv.types";

const s = StyleSheet.create({
    page: { padding: 40, fontSize: 11, fontFamily: "Helvetica" },
    h1: { fontSize: 22, fontWeight: "bold", marginBottom: 4 },
    contact: { color: "#444", marginBottom: 12 },
    sec: { fontSize: 14, fontWeight: "bold", marginTop: 12, marginBottom: 6, color: "#2563eb" },
    p: { marginBottom: 6, lineHeight: 1.4 },
    row: { flexDirection: "row" },
    left: { width: "35%", paddingRight: 10 },
    right: { width: "65%", paddingLeft: 10 },
    avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 12, alignSelf: "center" },
    chip: { padding: 6, backgroundColor: "#eef2ff", borderRadius: 6, marginBottom: 10, textAlign: "center" },
});

// 🟦 Classic CV
const Classic = (o: CVOrderType) => (
    <Document>
        <Page style={s.page}>
            <Text style={s.h1}>{o.fullName}</Text>
            <Text style={s.contact}>{o.email} • {o.phone}</Text>
            <Text style={s.sec}>Summary</Text><Text style={s.p}>{o.summary}</Text>
            <Text style={s.sec}>Work Experience</Text><Text style={s.p}>{o.workExperience}</Text>
            <Text style={s.sec}>Education</Text><Text style={s.p}>{o.education}</Text>
            <Text style={s.sec}>Skills</Text><Text style={s.p}>{o.skills}</Text>
        </Page>
    </Document>
);

// 🟪 Modern CV
const Modern = (o: CVOrderType) => (
    <Document>
        <Page style={{ ...s.page, backgroundColor: "#f8fafc" }}>
            <View style={s.row}>
                <View style={s.left}>
                    {o.photo ? <Image src={o.photo} style={s.avatar} /> : null}
                    <Text style={s.chip}>{o.industry} • {o.experienceLevel}</Text>
                    <Text>{o.email}</Text>
                    <Text>{o.phone}</Text>
                </View>
                <View style={s.right}>
                    <Text style={s.h1}>{o.fullName}</Text>
                    <Text style={s.sec}>Summary</Text><Text style={s.p}>{o.summary}</Text>
                    <Text style={s.sec}>Work Experience</Text><Text style={s.p}>{o.workExperience}</Text>
                    <Text style={s.sec}>Education</Text><Text style={s.p}>{o.education}</Text>
                    <Text style={s.sec}>Skills</Text><Text style={s.p}>{o.skills}</Text>
                </View>
            </View>
        </Page>
    </Document>
);

// 🎨 Creative CV (з кольоровим лівим сайдбаром + фото)
const Creative = (o: CVOrderType) => (
    <Document>
        <Page style={{ ...s.page, flexDirection: "row" }}>
            {/* Ліва панель */}
            <View style={{ ...s.left, backgroundColor: "#1d4ed8", color: "white", padding: 16, borderRadius: 8 }}>
                {o.photo ? <Image src={o.photo} style={s.avatar} /> : null}
                <Text style={{ ...s.h1, fontSize: 18, textAlign: "center" }}>{o.fullName}</Text>
                <Text style={{ textAlign: "center", marginBottom: 8 }}>{o.industry} • {o.experienceLevel}</Text>
                <Text>{o.email}</Text>
                <Text>{o.phone}</Text>
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>Skills</Text>
                <Text style={{ marginTop: 6 }}>{o.skills}</Text>
            </View>

            {/* Контент справа */}
            <View style={{ ...s.right, paddingLeft: 16 }}>
                <Text style={s.sec}>Summary</Text><Text style={s.p}>{o.summary}</Text>
                <Text style={s.sec}>Work Experience</Text><Text style={s.p}>{o.workExperience}</Text>
                <Text style={s.sec}>Education</Text><Text style={s.p}>{o.education}</Text>
            </View>
        </Page>
    </Document>
);

export async function downloadCVPDF(order: CVOrderType) {
    let doc;
    switch (order.cvStyle) {
        case "Modern":    doc = Modern(order); break;
        case "Creative":  doc = Creative(order); break;
        default:          doc = Classic(order);
    }

    const blob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cv-${order.cvStyle.toLowerCase()}-${order._id}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
}
