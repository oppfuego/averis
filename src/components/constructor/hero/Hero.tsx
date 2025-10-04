"use client";

import React from "react";
import styles from "./Hero.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { media } from "@/resources/media";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
    title: string;
    highlight?: string;
    description: string;
    primaryCta?: { text: string; link: string };
    secondaryCta?: { text: string; link: string };
    image?: string; // ключ з media
}

const HeroSection: React.FC<HeroSectionProps> = ({
                                                     title,
                                                     highlight,
                                                     description,
                                                     primaryCta,
                                                     secondaryCta,
                                                     image,
                                                 }) => {
    const bgImage = image
        ? (media as Record<string, string | StaticImageData>)[image]
        : undefined;

    const bgUrl = bgImage
        ? typeof bgImage === "string"
            ? bgImage
            : (bgImage as StaticImageData).src
        : "";

    return (
        <section
            className={styles.hero}
            style={{
                backgroundImage: bgUrl ? `url(${bgUrl})` : "none",
            }}
        >
            <div className={styles.overlay}>
                {/* Заголовок */}
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {title}{" "}
                    {highlight && (
                        <motion.span
                            className={styles.highlight}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                        >
                            {highlight}
                        </motion.span>
                    )}
                </motion.h1>

                {/* Опис */}
                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                >
                    {description}
                </motion.p>

                {/* CTA */}
                <motion.div
                    className={styles.ctaRow}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.25 },
                        },
                    }}
                >
                    {primaryCta && (
                        <motion.a
                            href={primaryCta.link}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <ButtonUI
                                variant="solid"
                                size="lg"
                                color="quaternary"
                                shape="rounded"
                                textColor="primary"
                                hoverEffect="scale"
                                hoverColor="quaternary"
                            >
                                {primaryCta.text}
                            </ButtonUI>
                        </motion.a>
                    )}
                    {secondaryCta && (
                        <motion.a
                            href={secondaryCta.link}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <ButtonUI
                                variant="outlined"
                                size="lg"
                                color="quaternary"
                                textColor="quaternary"
                                shape="rounded"
                                hoverEffect="scale"
                                hoverColor="quaternary"
                                hoverTextColor="primary"
                            >
                                {secondaryCta.text}
                            </ButtonUI>
                        </motion.a>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
