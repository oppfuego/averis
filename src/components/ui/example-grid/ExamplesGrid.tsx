import React from "react";
import styles from "./ExamplesGrid.module.scss";
import { cvExamples } from "@/data/cvExample";
import CVCard from "@/components/ui/cv-card/CVCard";

const ExamplesGrid = () => {
    return (
        <section className={styles.grid}>
            {cvExamples.map((cv) => (
                <CVCard key={cv.id} {...cv} />
            ))}
        </section>
    );
};

export default ExamplesGrid;
