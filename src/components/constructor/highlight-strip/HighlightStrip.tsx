"use client";
import React from "react";
import styles from "./HighlightStrip.module.scss";

interface HighlightItem {
    icon: string;     // шлях до іконки або emoji
    text: string;     // текст
    color?: string;   // фон іконки
}

interface HighlightStripProps {
    items: HighlightItem[];
}

const HighlightStrip: React.FC<HighlightStripProps> = ({ items }) => {
    // дублюємо масив для безкінечного скролу
    const repeatedItems = [...items, ...items];

    return (
        <div className={styles.strip}>
            <div className={styles.track}>
                {repeatedItems.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div
                            className={styles.iconBox}
                            style={{
                                background: item.color || "linear-gradient(135deg, #e0f7e9, #c0f2d1)",
                            }}
                        >
                            {item.icon.startsWith("/") ? (
                                <img src={item.icon} alt={item.text} className={styles.iconImg} />
                            ) : (
                                <span className={styles.iconEmoji}>{item.icon}</span>
                            )}
                        </div>
                        <p className={styles.text}>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighlightStrip;
