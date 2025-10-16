import { StyleSheet } from "@react-pdf/renderer";

export const theme = {
    primary: "#2563EB",
    secondary: "#EFF6FF",
    accent: "#1E3A8A",
    text: "#111827",
    gray: "#6B7280",
    light: "#F9FAFB",
    white: "#FFFFFF",
};

// AI стиль (поточний)
export const pdfStylesAI = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 12,
        fontFamily: "Helvetica",
        backgroundColor: theme.white,
        lineHeight: 1.6,
    },
    header: {
        borderBottom: `2pt solid ${theme.primary}`,
        marginBottom: 25,
        paddingBottom: 6,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: theme.primary,
        marginBottom: 4,
    },
    meta: {
        fontSize: 11,
        color: theme.gray,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: theme.primary,
        textTransform: "uppercase",
        marginTop: 18,
        marginBottom: 10,
        borderBottom: `1pt solid ${theme.primary}33`,
        paddingBottom: 4,
    },
    paragraph: {
        fontSize: 12,
        color: theme.text,
        marginBottom: 6,
        textAlign: "left",
    },
    dayBlock: {
        backgroundColor: theme.secondary,
        borderLeft: `4pt solid ${theme.primary}`,
        borderRadius: 6,
        padding: 10,
        marginBottom: 12,
    },
    dayTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: theme.accent,
        marginBottom: 4,
    },
    focus: {
        fontWeight: "bold",
        color: theme.primary,
        marginTop: 3,
        marginBottom: 2,
    },
    tip: {
        fontStyle: "italic",
        color: theme.gray,
        fontSize: 11,
        marginTop: 4,
    },
    divider: {
        height: 1,
        backgroundColor: `${theme.primary}22`,
        marginVertical: 10,
    },
    table: {
        width: "100%",
        flexDirection: "column",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: theme.primary,
        marginVertical: 8,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCellHeader: {
        flex: 1,
        backgroundColor: theme.primary,
        color: theme.white,
        fontSize: 11,
        fontWeight: "bold",
        padding: 4,
        borderRight: `1pt solid ${theme.white}`,
    },
    tableCell: {
        flex: 1,
        padding: 4,
        borderRight: `1pt solid ${theme.primary}33`,
        fontSize: 11,
        color: theme.text,
    },
    extrasPage: {
        padding: 40,
        backgroundColor: theme.light,
    },
    extrasTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: theme.primary,
        textTransform: "uppercase",
        marginBottom: 6,
    },
    extrasMeta: {
        fontSize: 10,
        color: theme.gray,
        marginBottom: 10,
    },
    extrasContent: {
        backgroundColor: theme.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: `${theme.primary}22`,
        padding: 16,
        marginTop: 4,
    },
    extrasHeading: {
        fontSize: 13,
        fontWeight: "bold",
        color: theme.accent,
        marginTop: 8,
        marginBottom: 4,
    },
    extrasParagraph: {
        fontSize: 12,
        color: theme.text,
        marginBottom: 10,
        textAlign: "left",
        lineHeight: 1.8,
        paddingLeft: 8,
    },
    motivationBlock: {
        marginTop: 30,
        padding: 20,
        backgroundColor: theme.primary,
        borderRadius: 8,
        textAlign: "center",
    },
    motivationText: {
        color: theme.white,
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4,
    },
    motivationQuote: {
        color: theme.white,
        fontSize: 12,
        fontStyle: "italic",
    },
});

// Coach стиль (новий візуал і структура)
const coach = {
    primary: "#0F766E", // teal
    secondary: "#ECFDF5",
    accent: "#115E59",
    text: "#0B0F0E",
    gray: "#5B6361",
    light: "#F2FBF8",
    white: "#FFFFFF",
};

export const pdfStylesCoach = StyleSheet.create({
    page: {
        padding: 48,
        fontSize: 12,
        fontFamily: "Helvetica",
        backgroundColor: coach.light,
        lineHeight: 1.6,
    },
    header: {
        backgroundColor: coach.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: `${coach.primary}26`,
        padding: 14,
        marginBottom: 22,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: coach.primary,
    },
    meta: {
        fontSize: 10,
        color: coach.gray,
        marginTop: 4,
    },
    // секції
    sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: coach.accent,
        textTransform: "uppercase",
        marginTop: 12,
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 12,
        color: coach.text,
        marginBottom: 6,
        textAlign: "left",
    },

    // День як карточка з шапкою
    dayCard: {
        backgroundColor: coach.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: `${coach.primary}26`,
        marginBottom: 12,
        overflow: "hidden",
    },
    dayHeader: {
        backgroundColor: coach.primary,
        paddingVertical: 6,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    dayIndex: {
        color: coach.white,
        fontSize: 12,
        fontWeight: "bold",
        marginRight: 8,
    },
    dayTitle: {
        color: coach.white,
        fontSize: 12,
        fontWeight: "bold",
    },
    dayBody: {
        padding: 10,
    },
    dayRow: {
        flexDirection: "row",
        gap: 8,
    },
    dayCol: {
        flex: 1,
    },
    bullet: {
        fontSize: 11,
        color: coach.text,
        marginBottom: 4,
        paddingLeft: 6,
        borderLeftWidth: 2,
        borderLeftColor: `${coach.primary}33`,
    },
    noteBox: {
        borderWidth: 1,
        borderColor: `${coach.primary}26`,
        borderRadius: 6,
        padding: 8,
        minHeight: 60,
        backgroundColor: `${coach.primary}08`,
    },

    // таблиці
    table: {
        width: "100%",
        flexDirection: "column",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: coach.primary,
        marginVertical: 8,
        borderRadius: 6,
        overflow: "hidden",
    },
    tableRow: { flexDirection: "row" },
    tableCellHeader: {
        flex: 1,
        backgroundColor: coach.primary,
        color: coach.white,
        fontSize: 11,
        fontWeight: "bold",
        padding: 6,
        borderRight: `1pt solid ${coach.white}`,
    },
    tableCell: {
        flex: 1,
        padding: 6,
        borderRight: `1pt solid ${coach.primary}33`,
        fontSize: 11,
        color: coach.text,
    },

    // EXTRAS для коуча
    extrasPage: {
        padding: 48,
        backgroundColor: coach.light,
    },
    extrasTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: coach.accent,
        textTransform: "uppercase",
        marginBottom: 6,
    },
    extrasMeta: {
        fontSize: 10,
        color: coach.gray,
        marginBottom: 10,
    },
    extrasContent: {
        backgroundColor: coach.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: `${coach.primary}26`,
        padding: 16,
    },
    extrasHeading: {
        fontSize: 12,
        fontWeight: "bold",
        color: coach.accent,
        marginTop: 8,
        marginBottom: 4,
        borderLeftWidth: 2,
        borderLeftColor: `${coach.primary}66`,
        paddingLeft: 6,
    },
    extrasParagraph: {
        fontSize: 12,
        color: coach.text,
        marginBottom: 10,
        textAlign: "left",
        lineHeight: 1.8,
        paddingLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: `${coach.primary}1A`,
    },
    extrasGridRow: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 8,
    },
    extrasGridCell: {
        flex: 1,
        borderWidth: 1,
        borderColor: `${coach.primary}26`,
        borderRadius: 6,
        padding: 8,
        minHeight: 52,
        backgroundColor: `${coach.primary}08`,
    },
    signatureBlock: {
        marginTop: 12,
        borderTopWidth: 1,
        borderTopColor: `${coach.primary}26`,
        paddingTop: 8,
        color: coach.gray,
        fontSize: 10,
    },

    // фінал
    motivationBlock: {
        marginTop: 24,
        padding: 16,
        backgroundColor: coach.primary,
        borderRadius: 10,
        textAlign: "center",
    },
    motivationText: {
        color: coach.white,
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4,
    },
    motivationQuote: {
        color: coach.white,
        fontSize: 12,
        fontStyle: "italic",
    },
});
