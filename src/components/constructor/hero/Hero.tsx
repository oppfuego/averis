"use client";

import React from "react";
import styles from "./Hero.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {media} from "@/resources/media";
import type {StaticImageData} from "next/image";

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
        ? typeof bgImage === 'string'
            ? bgImage
            : (bgImage as StaticImageData).src
        : '';

    return (
        <section
            className={styles.hero}
            style={{
                backgroundImage: bgUrl ? `url(${bgUrl})` : 'none',
            }}
        >
            <div className={styles.overlay}>
                <h1 className={styles.title}>
                    {title}{" "}
                    {highlight && <span className={styles.highlight}>{highlight}</span>}
                </h1>
                <p className={styles.description}>{description}</p>

                <div className={styles.ctaRow}>
                    {primaryCta && (
                        <a href={primaryCta.link}>
                            <ButtonUI variant="solid" size="lg" color="quaternary" shape="rounded" textColor="primary"
                                      hoverEffect="scale" hoverColor="quaternary">
                                {primaryCta.text}
                            </ButtonUI>
                        </a>
                    )}
                    {secondaryCta && (
                        <a href={secondaryCta.link}>
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
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
