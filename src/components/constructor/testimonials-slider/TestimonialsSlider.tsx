"use client";
import React, { useState } from "react";
import styles from "./TestimonialsSlider.module.scss";
import { media as mediaMap } from "@/resources/media";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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

export default function TestimonialsSlider({
                                               testimonials,
                                           }: {
    testimonials: Testimonial[];
}) {
    const [current, setCurrent] = useState(0);

    const prev = () =>
        setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    const next = () =>
        setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

    return (
        <div className={styles.slider}>
            <ButtonUI
                shape="circle"
                size="lg"
                color="primary"
                textColor="quaternary"
                hoverColor="secondary"
                onClick={prev}
                aria-label="Previous"
                startIcon={<MdOutlineKeyboardArrowLeft style={{ fontSize: "35px" }} />} // ✅ іконка більша
            />

            <div className={styles.slideWrapper}>
                {testimonials.map((t, i) => {
                    const active = i === current;
                    return (
                        <div
                            key={i}
                            className={`${styles.card} ${active ? styles.active : ""}`}
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
                        </div>
                    );
                })}
            </div>

            <ButtonUI
                shape="circle"
                size="lg"
                color="primary"
                textColor="quaternary"
                hoverColor="secondary"
                onClick={prev}
                aria-label="Previous"
                startIcon={<MdOutlineKeyboardArrowRight style={{ fontSize: "35px" }} />} // ✅ іконка більша
            />
        </div>
    );
}
