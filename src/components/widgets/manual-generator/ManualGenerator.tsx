"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { formSchemaCV } from "./formSchemaCV";
import Textarea from "@mui/joy/Textarea";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ButtonUI from "@/components/ui/button/ButtonUI";
import styles from "./ManualGenerator.module.scss";
import { useAlert } from "@/context/AlertContext";

const schema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    cvStyle: Yup.string().required("Required"),
    industry: Yup.string().required("Required"),
    experienceLevel: Yup.string().required("Required"),
    summary: Yup.string().required("Required"),
    workExperience: Yup.string().required("Required"),
    education: Yup.string().required("Required"),
    skills: Yup.string().required("Required"),
});

// 🔹 мок-дані для тесту
const mockCVData = {
    fullName: "John Doe",
    phone: "+1 234 567 890",
    photo: "",
    cvStyle: "Modern",
    industry: "IT",
    experienceLevel: "Mid-level",
    summary:
        "Experienced software developer with a focus on building scalable web applications and delivering high-quality code.",
    workExperience: `Frontend Developer at TechCorp (2020–2023)
- Developed user interfaces with React and Next.js
- Improved app performance by 30%
- Collaborated with backend team to integrate REST APIs

Junior Web Developer at WebStudio (2018–2020)
- Built landing pages with HTML, CSS, JS
- Supported SEO optimization and accessibility`,
    education: `B.Sc. in Computer Science, MIT, 2014–2018
High School, Boston, 2010–2014`,
    skills: "JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, Git, Agile, Problem-solving",
};

const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const r = new FileReader();
        r.onload = () => resolve(String(r.result));
        r.onerror = reject;
        r.readAsDataURL(file);
    });

const ManualGeneratorCV = () => {
    const { showAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const initialValues: Record<string, any> = {
        fullName: "",
        phone: "",
        photo: "",
        cvStyle: "Classic",
        industry: "IT",
        experienceLevel: "Mid-level",
        summary: "",
        workExperience: "",
        education: "",
        skills: "",
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    const res = await fetch("/api/cv/create-order", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "include",
                        body: JSON.stringify(values),
                    });
                    const data = await res.json();
                    if (res.ok) {
                        showAlert(
                            "Success",
                            "Your request was accepted. A specialist will prepare your CV and it will be available as a PDF within 24 hours.",
                            "success"
                        );
                    } else {
                        showAlert("Error", data.message || "Failed to create CV order", "error");
                    }
                } catch (e) {
                    showAlert("Error", "Network or server error", "error");
                }
                setLoading(false);
            }}
        >
            {({ values, setFieldValue, setValues }) => (
                <Form className={styles.form}>
                    {/* Personal */}
                    {formSchemaCV.personal.map((f) => (
                        <div key={f.name} className={styles.fullWidth}>
                            <label className={styles.label}>{f.label}</label>
                            {f.type === "file" ? (
                                <div className={styles.fileInputWrapper}>
                                    <label className={styles.fileInputCustom}>
                                        <span role="img" aria-label="photo">📷</span> Select photo
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={async (e) => {
                                                const file = e.target.files?.[0];
                                                if (file) setFieldValue("photo", await toBase64(file));
                                            }}
                                        />
                                    </label>
                                    {values.photo && (
                                        <img src={values.photo} alt="preview" className={styles.photoPreview} />
                                    )}
                                    {values.photo && (
                                        <span className={styles.fileDisplay}>Photo selected</span>
                                    )}
                                </div>
                            ) : (
                                <Field name={f.name} as={Input} placeholder={f.label} />
                            )}
                        </div>
                    ))}

                    {/* Selectors */}
                    <div className={styles.selectGrid}>
                        {formSchemaCV.selectors.map((f) => (
                            <div key={f.name} className={styles.formGroup}>
                                <label className={styles.label}>{f.label}</label>
                                <Select
                                    value={values[f.name]}
                                    onChange={(_, v) => setFieldValue(f.name, v)}
                                >
                                    {f.options.map((opt: string) => (
                                        <Option key={opt} value={opt}>
                                            {opt}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    {formSchemaCV.content.map((f) => (
                        <div key={f.name} className={styles.fullWidth}>
                            <label className={styles.label}>{f.label}</label>
                            <Field name={f.name} as={Textarea} minRows={4} placeholder={f.label} />
                        </div>
                    ))}

                    <div className={styles.actions}>
                        <ButtonUI
                            type="button"
                            color="secondary"
                            textColor="backgroundLight"
                            variant="soft"
                            hoverEffect="shadow"
                            onClick={() => setValues(mockCVData)}
                        >
                            Fill with mock data
                        </ButtonUI>

                        <ButtonUI
                            type="submit"
                            color="primary"
                            textColor="backgroundLight"
                            variant="solid"
                            hoverEffect="glow"
                            loading={loading}
                        >
                            Submit Request
                        </ButtonUI>
                    </div>

                </Form>
            )}
        </Formik>
    );
};

export default ManualGeneratorCV;
