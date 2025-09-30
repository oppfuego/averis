"use client";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import styles from "./FAQ.module.scss";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>❓ Frequently Asked Questions</h2>
            <div className={styles.faq}>
                {items.map((item, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div key={idx} className={`${styles.item} ${isOpen ? styles.active : ""}`}>
                            <button
                                className={styles.question}
                                onClick={() => toggle(idx)}
                                aria-expanded={isOpen}
                            >
                                <span>{item.question}</span>
                                <span className={isOpen ? styles.arrowOpen : styles.arrow}>
                  <IoIosArrowDown />
                </span>
                            </button>
                            <div
                                className={styles.answer}
                                style={{
                                    maxHeight: isOpen ? "500px" : "0",
                                    opacity: isOpen ? 1 : 0,
                                }}
                            >
                                <div className={styles.answerContent}>{item.answer}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
