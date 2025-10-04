"use client";

import React, { useState } from "react";
import styles from "./TestimonialsSlider.module.scss";
import { media as mediaMap } from "@/resources/media";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    name: string;
    role?: string;
    image?: string;
    text: string;
}

function resolveMedia(key?: string): string | undefined {
    if (!key) return undefined;
    const val = (mediaMap as Record<string, any>)[key];
    if (!val) return undefined;
    if (typeof val === "string") return val;
    if (typeof val === "object" && val.src) return val.src;
    return undefined;
}

export default function TestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

    return (
        <motion.div
            className={styles.slider}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // 👈 з’являється при скролі у viewport
            viewport={{ once: true, amount: 0.3 }} // once=true = один раз, amount=0.3 = 30% блоку має бути у в’юпорті
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <ButtonUI
                shape="circle"
                size="lg"
                color="primary"
                textColor="quaternary"
                hoverColor="secondary"
                onClick={prev}
                aria-label="Previous"
                startIcon={<MdOutlineKeyboardArrowLeft style={{ fontSize: "35px" }} />}
            />

            <div className={styles.slideWrapper}>
                <AnimatePresence mode="wait">
                    {testimonials.map((t, i) =>
                        i === current ? (
                            <motion.div
                                key={i}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                {t.image && (
                                    <img
                                        src={resolveMedia(t.image)}
                                        alt={t.name}
                                        className={styles.avatar}
                                        loading="lazy"
                                    />
                                )}
                                <p className={styles.text}>"{t.text}"</p>
                                <h4 className={styles.name}>{t.name}</h4>
                                {t.role && <p className={styles.role}>{t.role}</p>}
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>
            </div>

            <ButtonUI
                shape="circle"
                size="lg"
                color="primary"
                textColor="quaternary"
                hoverColor="secondary"
                onClick={next}
                aria-label="Next"
                startIcon={<MdOutlineKeyboardArrowRight style={{ fontSize: "35px" }} />}
            />
        </motion.div>
    );
}
