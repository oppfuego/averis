"use client";
import React from "react";
import { Document, Page, Text, View, pdf } from "@react-pdf/renderer";
import { UniversalOrderType } from "@/backend/types/universal.types";
import { pdfStylesAI, pdfStylesCoach } from "./pdfTheme";

// локальний тип для об'єкта стилів (спрощений)
type PDFStyles = any;

// 🧼 Очистка текста от невидимых символов, эмодзи и markdown
function cleanText(raw: string) {
    if (!raw) return "";

    return String(raw)
        .normalize("NFKC")
        // убрать суррогатные пары (в т.ч. эмодзи и символы вне BMP)
        .replace(/[\uD800-\uDFFF]/g, "")
        // variation selectors (часто остаются от эмодзи)
        .replace(/[\uFE00-\uFE0F]/g, "")
        // управляющие символы + Latin-1 C1
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
        // soft hyphen
        .replace(/\u00AD/g, "")
        // невидимые zero-width и подобные
        .replace(/[\u200B-\u200D\u2060]/g, "")
        // неразрывный пробел -> обычный пробел
        .replace(/\u00A0/g, " ")
        // лишние символы разметки/разделители
        .replace(/[•·¨|=<>_#]/g, "")
        // жирный markdown **text** -> text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        // нормализация тире
        .replace(/---+/g, "—")
        // перевод строк к \n
        .replace(/(\r\n|\r|\n)/g, "\n")
        // убрать повторяющиеся пробелы и пустые строки
        .replace(/\s{2,}/g, " ")
        .replace(/\n{2,}/g, "\n")
        .trim();
}

// допоміжний рендер для екстрас: логічні заголовки і абзаци
function renderExtrasContent(text: string, styles: PDFStyles) {
    const cleaned = cleanText(text);
    const lines = cleaned.split(/\n+/).map((l) => cleanText(l)).filter((l) => l.trim());

    return (
        <>
            {lines.map((line, idx) => {
                const isHeading = /[:：]\s*$/.test(line) || /^[A-ZА-ЯІЇЄ0-9][^:]{2,20}:$/.test(line);
                if (isHeading) {
                    return (
                        <Text key={`h-${idx}`} style={styles.extrasHeading}>
                            {line.replace(/[:：]\s*$/, "").trim()}
                        </Text>
                    );
                }
                return (
                    <Text key={`p-${idx}`} style={styles.extrasParagraph}>
                        {line.trim()}
                    </Text>
                );
            })}
        </>
    );
}

// 🧩 Таблиця (універсальна)
const Table = ({ headers, rows, styles }: { headers: string[]; rows: string[][]; styles: PDFStyles }) => (
    <View style={styles.table}>
        <View style={styles.tableRow}>
            {headers.map((h, i) => (
                <Text key={i} style={styles.tableCellHeader}>
                    {cleanText(h)}
                </Text>
            ))}
        </View>
        {rows.map((row, i) => (
            <View key={i} style={styles.tableRow}>
                {row.map((cell, j) => (
                    <Text key={j} style={styles.tableCell}>
                        {cleanText(cell)}
                    </Text>
                ))}
            </View>
        ))}
    </View>
);

// ===== РЕНДЕР ДНІВ: AI =====
function renderTrainingDaysAI(text: string, styles: PDFStyles) {
    const cleaned = cleanText(text);
    const sections = cleaned.split(/Day\s*\d+:/i);
    const days = cleaned.match(/Day\s*\d+:/gi) || [];

    if (!days.length) return <Text style={styles.paragraph}>{cleaned}</Text>;

    return sections.map((content, i) => {
        if (i === 0) return null;
        const title = cleanText(days[i - 1].trim());
        return (
            <View key={i} style={styles.dayBlock}>
                <Text style={styles.dayTitle}>{title}</Text>
                {content
                    .split(/\n+/)
                    .filter((line) => line.trim())
                    .map((line, idx) => {
                        const l = cleanText(line);
                        if (l.startsWith("- Focus:"))
                            return (
                                <Text key={idx} style={styles.focus}>
                                    {l.replace("- Focus:", "Focus:").trim()}
                                </Text>
                            );
                        if (l.startsWith("- Tip:"))
                            return (
                                <Text key={idx} style={styles.tip}>
                                    {l.replace("- Tip:", "Tip:").trim()}
                                </Text>
                            );
                        return (
                            <Text key={idx} style={styles.paragraph}>
                                {l.trim()}
                            </Text>
                        );
                    })}
            </View>
        );
    });
}

// ===== РЕНДЕР ДНІВ: COACH (нова структура) =====
function renderTrainingDaysCoach(text: string, styles: PDFStyles) {
    const cleaned = cleanText(text);
    const sections = cleaned.split(/Day\s*\d+:/i);
    const dayTokens = cleaned.match(/Day\s*\d+:/gi) || [];

    if (!dayTokens.length) return <Text style={styles.paragraph}>{cleaned}</Text>;

    return sections.map((content, i) => {
        if (i === 0) return null;
        const token = dayTokens[i - 1];
        const dayIndex = (token.match(/\d+/)?.[0] || String(i));
        const lines = content.split(/\n+/).map((l) => cleanText(l)).filter((l) => l.trim());

        const focusLines = lines.filter((l) => l.toLowerCase().startsWith("- focus:"));
        const tipLines = lines.filter((l) => l.toLowerCase().startsWith("- tip:"));
        const bulletLines = lines.filter((l) => !l.toLowerCase().startsWith("- focus:") && !l.toLowerCase().startsWith("- tip:"));

        // розкладемо пункти у 2 колонки
        const mid = Math.ceil(bulletLines.length / 2);
        const colLeft = bulletLines.slice(0, mid);
        const colRight = bulletLines.slice(mid);

        return (
            <View key={i} style={styles.dayCard}>
                <View style={styles.dayHeader}>
                    <Text style={styles.dayIndex}>Day {dayIndex}</Text>
                    <Text style={styles.dayTitle}>Training</Text>
                </View>
                <View style={styles.dayBody}>
                    {focusLines.map((f, idx) => (
                        <Text key={`f-${idx}`} style={styles.bullet}>{f.replace(/^-\s*focus:/i, "Focus:").trim()}</Text>
                    ))}

                    <View style={styles.dayRow}>
                        <View style={styles.dayCol}>
                            {colLeft.map((b, idx) => (
                                <Text key={`l-${idx}`} style={styles.bullet}>{b.replace(/^-/, '•').trim()}</Text>
                            ))}
                        </View>
                        <View style={styles.dayCol}>
                            {colRight.map((b, idx) => (
                                <Text key={`r-${idx}`} style={styles.bullet}>{b.replace(/^-/, '•').trim()}</Text>
                            ))}
                        </View>
                    </View>

                    {tipLines.length > 0 && (
                        <View style={styles.noteBox}>
                            {tipLines.map((t, idx) => (
                                <Text key={`t-${idx}`} style={styles.paragraph}>{t.replace(/^-\s*tip:/i, "Tip:").trim()}</Text>
                            ))}
                        </View>
                    )}
                </View>
            </View>
        );
    });
}

// ===== EXTRAS: AI =====
function renderExtrasAI(extras: Record<string, string>, styles: PDFStyles, opts: { fullName: string; goal: string }) {
    const entries = Object.entries(extras);
    if (entries.length === 0) return null;

    return (
        <>
            {entries.map(([key, val]) => {
                const preparedTitle =
                    key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()) ||
                    "Extra Section";
                const title = cleanText(preparedTitle);
                const cleaned = cleanText(val);

                if (key === "tracking") {
                    return (
                        <Page key={key} style={styles.extrasPage}>
                            <Text style={styles.extrasTitle}>{`${title} — for ${opts.fullName}`}</Text>
                            <Text style={styles.extrasMeta}>{`Goal: ${opts.goal}`}</Text>
                            <View style={styles.extrasContent}>
                                <Text style={styles.extrasParagraph}>
                                    {cleanText("Keep track of your workouts, nutrition, and progress daily.")}
                                </Text>
                                <Table
                                    styles={styles}
                                    headers={["Day", "Workout Type", "Duration", "Notes"]}
                                    rows={Array.from({ length: 7 }).map((_, i) => [
                                        `${i + 1}`,
                                        "",
                                        "",
                                        "",
                                    ])}
                                />
                            </View>
                        </Page>
                    );
                }

                if (key === "disciplineTracker") {
                    return (
                        <Page key={key} style={styles.extrasPage}>
                            <Text style={styles.extrasTitle}>{`${title} — for ${opts.fullName}`}</Text>
                            <Text style={styles.extrasMeta}>{`Goal: ${opts.goal}`}</Text>
                            <View style={styles.extrasContent}>
                                <Table
                                    styles={styles}
                                    headers={["Day", "Activity", "Duration", "Comment"]}
                                    rows={Array.from({ length: 14 }).map((_, i) => [
                                        `${i + 1}`,
                                        "",
                                        "",
                                        "",
                                    ])}
                                />
                                <Text style={styles.extrasParagraph}>
                                    {cleanText("Stay consistent — mark every completed workout here.")}
                                </Text>
                            </View>
                        </Page>
                    );
                }

                return (
                    <Page key={key} style={styles.extrasPage}>
                        <Text style={styles.extrasTitle}>{`${title} — for ${opts.fullName}`}</Text>
                        <Text style={styles.extrasMeta}>{`Goal: ${opts.goal}`}</Text>
                        <View style={styles.extrasContent}>
                            {renderExtrasContent(cleaned, styles)}
                        </View>
                    </Page>
                );
            })}
        </>
    );
}

// ===== EXTRAS: COACH (нова структура, без пустих правих колонок) =====
function renderExtrasCoach(extras: Record<string, string>, styles: PDFStyles, opts: { fullName: string; goal: string }) {
    const entries = Object.entries(extras);
    if (entries.length === 0) return null;

    return (
        <>
            {entries.map(([key, val]) => {
                const preparedTitle =
                    key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase()) ||
                    "Extra Section";
                const title = cleanText(preparedTitle);
                const cleaned = cleanText(val);

                if (key === "tracking") {
                    return (
                        <Page key={key} style={styles.extrasPage}>
                            <Text style={styles.extrasTitle}>{`${title} — for ${opts.fullName}`}</Text>
                            <Text style={styles.extrasMeta}>{`Goal: ${opts.goal}`}</Text>
                            <View style={styles.extrasContent}>
                                <Table
                                    styles={styles}
                                    headers={["Day", "Workout Type", "Duration", "Notes"]}
                                    rows={Array.from({ length: 7 }).map((_, i) => [
                                        `${i + 1}`,
                                        "",
                                        "",
                                        "",
                                    ])}
                                />
                            </View>
                        </Page>
                    );
                }

                if (key === "disciplineTracker") {
                    return (
                        <Page key={key} style={styles.extrasPage}>
                            <Text style={styles.extrasTitle}>{`${title} — for ${opts.fullName}`}</Text>
                            <Text style={styles.extrasMeta}>{`Goal: ${opts.goal}`}</Text>
                            <View style={styles.extrasContent}>
                                <Table
                                    styles={styles}
                                    headers={["Day", "Activity", "Duration", "Comment"]}
                                    rows={Array.from({ length: 14 }).map((_, i) => [
                                        `${i + 1}`,
                                        "",
                                        "",
                                        "",
                                    ])}
                                />
                            </View>
                        </Page>
                    );
                }

                // Коуч: верстаємо у один стовпчик з логічними заголовками
                return (
                    <Page key={key} style={styles.extrasPage}>
                        <Text style={styles.extrasTitle}>{`${title} — for ${opts.fullName}`}</Text>
                        <Text style={styles.extrasMeta}>{`Goal: ${opts.goal}`}</Text>
                        <View style={styles.extrasContent}>
                            {renderExtrasContent(cleaned, styles)}
                        </View>
                    </Page>
                );
            })}
        </>
    );
}

// 🧾 Головна функція
export async function downloadTrainingPDF(order: UniversalOrderType) {
    const main = order.response || "";
    const extras = order.extrasData || {};

    const isCoach = order.planType === "reviewed";
    const styles: PDFStyles = isCoach ? pdfStylesCoach : pdfStylesAI;

    const fullName = cleanText(order.fields.fullName || "");
    const goal = cleanText(order.fields.goal || "");
    const fitnessLevel = cleanText(order.fields.fitnessLevel || "");
    const days = String(order.fields.days ?? "");

    const doc = (
        <Document>
            {/* MAIN PLAN */}
            <Page style={styles.page}>
                {/* Header: різний для AI/Coach */}
                {isCoach ? (
                    <View style={styles.header}>
                        <View style={styles.headerRow}>
                            <Text style={styles.title}>Training Plan — {fullName}</Text>
                        </View>
                        <Text style={styles.meta}>
                            Goal: {goal} | Level: {fitnessLevel} | Duration: {days} days
                        </Text>
                    </View>
                ) : (
                    <View style={styles.header}>
                        <Text style={styles.title}>Training Plan — {fullName}</Text>
                        <Text style={styles.meta}>
                            Goal: {goal} | Level: {fitnessLevel} | Duration: {days} days
                        </Text>
                    </View>
                )}

                <Text style={styles.sectionTitle}>Main Plan</Text>
                {isCoach ? renderTrainingDaysCoach(main, styles) : renderTrainingDaysAI(main, styles)}
            </Page>

            {/* EXTRAS */}
            {isCoach ? renderExtrasCoach(extras, styles, { fullName, goal }) : renderExtrasAI(extras, styles, { fullName, goal })}

            {/* FINAL MOTIVATION */}
            <Page style={styles.page}>
                <View style={styles.motivationBlock}>
                    <Text style={styles.motivationText}>{cleanText("You’ve Got This")}</Text>
                    <Text style={styles.motivationQuote}>
                        {cleanText("Progress is built through consistency. One day, one workout, one win at a time.")}
                    </Text>
                </View>
            </Page>
        </Document>
    );

    const blob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `training-plan-${fullName}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
}

export { downloadTrainingPDF as downloadUniversalPDF };
