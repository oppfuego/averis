"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Input, Textarea } from "@mui/joy";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Confetti from "react-confetti";
import styles from "./ContactForm.module.scss";
import { validationSchema, initialValues, sendContactRequest } from "./schema";
import { useAlert } from "@/context/AlertContext";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import {COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE} from "@/resources/constants";

const ContactUsForm = () => {
    const { showAlert } = useAlert();
    const [showConfetti, setShowConfetti] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (
        values: typeof initialValues,
        { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
    ) => {
        try {
            await sendContactRequest(values);
            resetForm();
            setSuccessMsg("✅ Thanks! Your message has been sent.");
            setShowConfetti(true);
            showAlert("Success", "Your request has been sent!", "success");
            setTimeout(() => setShowConfetti(false), 6000);
        } catch {
            showAlert("Error", "Failed to send. Please try again.", "error");
        }
        setSubmitting(false);
    };

    return (
        <div className={styles.contactWrapper}>
            {showConfetti && <Confetti />}
            <div className={styles.contactCard}>
                {/* Left side with info */}
                <div className={styles.infoSide}>
                    <h2>📬 Get in Touch</h2>
                    <p>
                        Have questions or want to collaborate? Our team will respond within{" "}
                        <strong>24 hours</strong>.
                    </p>
                    <ul>
                        <li>
                            <FaMapMarkerAlt /> {COMPANY_ADDRESS}
                        </li>
                        <li>
                            <FaEnvelope /> {COMPANY_EMAIL}
                        </li>
                        <li>
                            <FaPhone /> {COMPANY_PHONE}
                        </li>
                    </ul>
                </div>

                {/* Right side with form */}
                <div className={styles.formSide}>
                    <h3>Send us a message</h3>

                    {successMsg ? (
                        <div className={styles.successMsg}>{successMsg}</div>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, isSubmitting }) => (
                                <Form className={styles.form}>
                                    <div className={styles.row}>
                                        <Field name="name">
                                            {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                                <Input
                                                    {...field}
                                                    placeholder="First Name"
                                                    color={touched.name && errors.name ? "danger" : "neutral"}
                                                    fullWidth
                                                />
                                            )}
                                        </Field>
                                        <Field name="secondName">
                                            {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                                <Input
                                                    {...field}
                                                    placeholder="Last Name"
                                                    color={touched.secondName && errors.secondName ? "danger" : "neutral"}
                                                    fullWidth
                                                />
                                            )}
                                        </Field>
                                    </div>

                                    <Field name="email">
                                        {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="Email"
                                                color={touched.email && errors.email ? "danger" : "neutral"}
                                                fullWidth
                                            />
                                        )}
                                    </Field>

                                    <Field name="phone">
                                        {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                            <Input
                                                {...field}
                                                type="tel"
                                                placeholder="Phone Number"
                                                color={touched.phone && errors.phone ? "danger" : "neutral"}
                                                fullWidth
                                            />
                                        )}
                                    </Field>

                                    <Field name="message">
                                        {({ field }: { field: React.TextareaHTMLAttributes<HTMLTextAreaElement> }) => (
                                            <Textarea
                                                {...field}
                                                placeholder="Your message"
                                                minRows={5}
                                                sx={{ borderRadius: "12px" }}
                                            />
                                        )}
                                    </Field>

                                    <ButtonUI
                                        type="submit"
                                        fullWidth
                                        loading={isSubmitting}
                                        text="Send Message"
                                        color="secondary"
                                        textColor="backgroundLight"
                                        sx={{
                                            mt: 2,
                                            fontSize: "1.1rem",
                                            borderRadius: "12px",
                                            background: "linear-gradient(90deg, #2563eb, #0ea5e9)",
                                            "&:hover": { opacity: 0.9 },
                                        }}
                                    />
                                </Form>
                            )}
                        </Formik>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;
