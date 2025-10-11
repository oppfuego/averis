"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Timeline.module.scss";

interface Step {
    title: string;
    description: string;
}

interface TimelineProps {
    title?: string;
    steps: Step[];
}

const Timeline: React.FC<TimelineProps> = ({ title, steps }) => {
    return (
        <section className={styles.timelineSection}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <div className={styles.cardsGrid}>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className={styles.number}>{index + 1}</div>
                        <h4 className={styles.cardTitle}>{step.title}</h4>
                        <p className={styles.cardDescription}>{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
