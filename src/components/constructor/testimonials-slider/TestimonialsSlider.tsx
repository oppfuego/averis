"use client";

import React, { useState } from "react";
import styles from "./TestimonialsSlider.module.scss";
import { media as mediaMap } from "@/resources/media";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdStar, MdStarBorder } from "react-icons/md";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../container/Container";
import Text from "../text/Text";

interface Testimonial {
    name: string;
    role?: string;
    image?: string;
    text: string;
    rating?: number; // 1–5
}

interface Props {
    title?: string;
    description?: string;
    testimonials: Testimonial[];
}

function resolveMedia(key?: string): string | undefined {
    if (!key) return undefined;
    const val = (mediaMap as Record<string, any>)[key];
    if (!val) return undefined;
    if (typeof val === "string") return val;
    if (typeof val === "object" && val.src) return val.src;
    return undefined;
}

export default function TestimonialsSlider({ title, description, testimonials }: Props) {
    const itemsPerSlide = 3; // 👈 змінити на 2, якщо треба по 2 в ряд
    const [current, setCurrent] = useState(0);

    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

    const prev = () => setCurrent((c) => (c === 0 ? totalSlides - 1 : c - 1));
    const next = () => setCurrent((c) => (c === totalSlides - 1 ? 0 : c + 1));

    const currentItems = testimonials.slice(
        current * itemsPerSlide,
        current * itemsPerSlide + itemsPerSlide
    );

    return (
        <Container
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "2rem 1rem" }}
        >
            {/* 🟢 Заголовок і опис */}
            <Text title={title} description={description} centerTitle centerDescription />

            {/* 🟢 Слайдер */}
            <motion.div
                className={styles.slider}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
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
                        <motion.div
                            key={current}
                            className={styles.cardsGrid}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            {currentItems.map((t, i) => (
                                <motion.div
                                    key={i}
                                    className={styles.card}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
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

                                    {/* ⭐ Рейтинг */}
                                    <div className={styles.stars}>
                                        {Array.from({ length: 5 }).map((_, idx) =>
                                            idx < (t.rating ?? 5) ? (
                                                <MdStar key={idx} className={styles.starFilled} />
                                            ) : (
                                                <MdStarBorder key={idx} className={styles.starEmpty} />
                                            )
                                        )}
                                    </div>

                                    <h4 className={styles.name}>{t.name}</h4>
                                    {t.role && <p className={styles.role}>{t.role}</p>}
                                </motion.div>
                            ))}
                        </motion.div>
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
        </Container>
    );
}
