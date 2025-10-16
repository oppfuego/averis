"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import ButtonUI from "@/components/ui/button/ButtonUI";
import styles from "./ManualGenerator.module.scss";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";

const BASE_COST = 30;

const LANGUAGES = [
    { value: "English", label: "English (default)", cost: 0 },
    { value: "Ukrainian", label: "Ukrainian", cost: 5 },
    { value: "German", label: "German", cost: 5 },
    { value: "French", label: "French", cost: 5 },
];

const EXTRA_CATEGORIES = {
    training: [
        { name: "adaptation", label: "Home / Gym Adaptation", cost: 10 },
        { name: "tracking", label: "Progress Tracking", cost: 10 },
        { name: "recovery", label: "Recovery Guide", cost: 8 },
        { name: "warmupPlan", label: "Warm-up Routine", cost: 5 },
        { name: "cooldownPlan", label: "Cool-down & Stretching", cost: 5 },
        { name: "injuryPrevention", label: "Injury Prevention Guide", cost: 7 },
        { name: "equipmentAlternatives", label: "No-Equipment Alternatives", cost: 6 },
        { name: "weeklyAdjustments", label: "Weekly Adjustment Tips", cost: 10 },
        { name: "progressReport", label: "Progress Report Template", cost: 10 },
    ],
    nutrition: [
        { name: "nutrition", label: "Nutrition Plan", cost: 15 },
        { name: "mealSchedule", label: "Meal Timing Schedule", cost: 12 },
        { name: "hydrationPlan", label: "Hydration Plan", cost: 6 },
        { name: "supplementGuide", label: "Supplement Recommendations", cost: 10 },
    ],
    mindset: [
        { name: "motivation", label: "Motivation Plan", cost: 5 },
        { name: "goalBreakdown", label: "Goal Breakdown Strategy", cost: 8 },
        { name: "disciplineTracker", label: "Discipline & Habit Tracker", cost: 8 },
        { name: "mindsetTips", label: "Mindset Tips Collection", cost: 5 },
    ],
};

const schema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    goal: Yup.string().required("Required"),
    fitnessLevel: Yup.string().required("Required"),
    days: Yup.number().min(1).required("Required"),
    planType: Yup.string().oneOf(["coach", "ai"]).required("Required"),
    language: Yup.string().oneOf(LANGUAGES.map((l) => l.value)),
});

interface FormValues {
    fullName: string;
    goal: string;
    fitnessLevel: string;
    days: number;
    planType: "coach" | "ai";
    language: string;
    extras: string[];
}

const ManualWorkoutForm = () => {
    const { showAlert } = useAlert();
    const user = useUser();
    const [loading, setLoading] = useState(false);

    const initialValues: FormValues = {
        fullName: "",
        goal: "",
        fitnessLevel: "Beginner",
        days: 7,
        planType: "coach",
        language: "English",
        extras: [],
    };

    // 🧩 Mock data for testing
    const mockData: FormValues = {
        fullName: "John Doe",
        goal: "Build lean muscle and improve endurance",
        fitnessLevel: "Intermediate",
        days: 21,
        planType: "ai",
        language: "English",
        extras: ["tracking", "nutrition", "motivation"],
    };

    return (
        <Formik<FormValues>
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    const allExtras = Object.values(EXTRA_CATEGORIES).flat();
                    const extraCost = values.extras.reduce((sum, name) => {
                        const opt = allExtras.find((o) => o.name === name);
                        return sum + (opt?.cost || 0);
                    }, 0);

                    const durationCost = Math.floor(values.days / 7) * 10;
                    const languageCost = values.language && values.language !== "English" ? 5 : 0;
                    const totalTokens = BASE_COST + extraCost + durationCost + languageCost;

                    const payload = {
                        category: "training",
                        planType: values.planType === "coach" ? "reviewed" : "instant",
                        language: values.language || "English",
                        extras: values.extras,
                        totalTokens,
                        email: user?.email,
                        fields: {
                            fullName: values.fullName,
                            goal: values.goal,
                            fitnessLevel: values.fitnessLevel,
                            days: values.days,
                            language: values.language || "English",
                        },
                    };

                    const res = await fetch("/api/universal/create-order", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        body: JSON.stringify(payload),
                    });

                    const data = await res.json();
                    if (res.ok) {
                        showAlert(
                            "Success",
                            values.planType === "coach"
                                ? "Your plan will be reviewed by a coach and delivered in PDF within 24 hours."
                                : "Your instant training plan is ready in PDF format.",
                            "success"
                        );
                    } else {
                        showAlert("Error", data.message || "Failed to create plan", "error");
                    }
                } catch {
                    showAlert("Error", "Network or server issue", "error");
                } finally {
                    setLoading(false);
                }
            }}
        >
            {({ values, setFieldValue, setValues }) => {
                const allExtras = Object.values(EXTRA_CATEGORIES).flat();
                const extraCost = values.extras.reduce((sum, name) => {
                    const opt = allExtras.find((o) => o.name === name);
                    return sum + (opt?.cost || 0);
                }, 0);

                const durationCost = Math.floor(values.days / 7) * 10;
                const languageCost = values.language && values.language !== "English" ? 5 : 0;
                const totalTokens = BASE_COST + extraCost + durationCost + languageCost;

                return (
                    <Form className={styles.form}>
                        <header className={styles.header}>
                            <h2>Training Plan Configuration</h2>
                            <p>
                                Choose your training type, define fitness parameters, and customize modules.
                                You can also fill with demo data to test the flow.
                            </p>
                        </header>

                        <div className={styles.actionsInline}>
                            <ButtonUI
                                type="button"
                                variant="outline"
                                color="secondary"
                                onClick={() => setValues(mockData)}
                            >
                                🧪 Fill with Mock Data
                            </ButtonUI>
                        </div>

                        {/* === GRID SECTION === */}
                        <div className={styles.grid}>
                            <div className={styles.block}>
                                <h3>Personal Information</h3>
                                <div className={styles.inputGroup}>
                                    <label>Full Name</label>
                                    <Field name="fullName" as={Input} placeholder="Enter your name" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Goal</label>
                                    <Field
                                        name="goal"
                                        as={Input}
                                        placeholder="e.g. Muscle gain, weight loss, endurance"
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Fitness Level</label>
                                    <Select
                                        value={values.fitnessLevel}
                                        onChange={(_, v) => setFieldValue("fitnessLevel", v)}
                                    >
                                        <Option value="Beginner">Beginner</Option>
                                        <Option value="Intermediate">Intermediate</Option>
                                        <Option value="Advanced">Advanced</Option>
                                    </Select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Language</label>
                                    <Select
                                        value={values.language}
                                        onChange={(_, v) => setFieldValue("language", v || "English")}
                                    >
                                        {LANGUAGES.map((lang) => (
                                            <Option key={lang.value} value={lang.value}>
                                                {lang.label}
                                            </Option>
                                        ))}
                                    </Select>
                                    <span className={styles.note}>
                    English is free, other languages cost +5 tokens
                  </span>
                                </div>
                            </div>

                            <div className={styles.block}>
                                <h3>Plan Details</h3>
                                <div className={styles.radioGroup}>
                                    <label
                                        className={`${styles.radioCard} ${
                                            values.planType === "coach" ? styles.active : ""
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="planType"
                                            value="coach"
                                            checked={values.planType === "coach"}
                                            onChange={() => setFieldValue("planType", "coach")}
                                        />
                                        <div>
                                            <strong>Coach Plan</strong>
                                            <p>Delivered in 24h with expert verification</p>
                                        </div>
                                    </label>

                                    <label
                                        className={`${styles.radioCard} ${
                                            values.planType === "ai" ? styles.active : ""
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="planType"
                                            value="ai"
                                            checked={values.planType === "ai"}
                                            onChange={() => setFieldValue("planType", "ai")}
                                        />
                                        <div>
                                            <strong>AI Instant Plan</strong>
                                            <p>Auto-generated instantly in PDF format</p>
                                        </div>
                                    </label>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Duration</label>
                                    <Select
                                        value={values.days}
                                        onChange={(_, v) => setFieldValue("days", v)}
                                    >
                                        <Option value={1}>1 day</Option>
                                        <Option value={7}>1 week</Option>
                                        <Option value={14}>2 weeks</Option>
                                        <Option value={21}>3 weeks</Option>
                                        <Option value={28}>4 weeks</Option>
                                    </Select>
                                    <span className={styles.note}>Each week adds +10 tokens</span>
                                </div>
                            </div>
                        </div>

                        {/* === EXTRAS === */}
                        <div className={styles.sectionGroup}>
                            {Object.entries(EXTRA_CATEGORIES).map(([category, options]) => (
                                <div key={category} className={styles.section}>
                                    <h3>
                                        {category.charAt(0).toUpperCase() + category.slice(1)} Modules
                                    </h3>
                                    <div className={styles.optionsGrid}>
                                        {options.map((opt) => (
                                            <label key={opt.name} className={styles.option}>
                                                <input
                                                    type="checkbox"
                                                    checked={values.extras.includes(opt.name)}
                                                    onChange={(e) => {
                                                        if (e.target.checked)
                                                            setFieldValue("extras", [...values.extras, opt.name]);
                                                        else
                                                            setFieldValue(
                                                                "extras",
                                                                values.extras.filter((x) => x !== opt.name)
                                                            );
                                                    }}
                                                />
                                                <span className={styles.optionLabel}>{opt.label}</span>
                                                <span className={styles.optionCost}>+{opt.cost}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.summary}>
                            <div className={styles.summaryContent}>
                                <div>
                                    <p>Base: 30 tokens</p>
                                    <p>Extras: +{extraCost}</p>
                                    <p>Duration: +{durationCost}</p>
                                    <p>Language: +{languageCost}</p>
                                </div>
                                <h4>
                                    Total: <span>{totalTokens}</span> tokens
                                </h4>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <ButtonUI
                                type="submit"
                                color="primary"
                                variant="solid"
                                textColor="backgroundLight"
                                hoverEffect="glow"
                                loading={loading}
                            >
                                Generate Training Plan
                            </ButtonUI>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default ManualWorkoutForm;
