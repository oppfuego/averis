import React from "react";
import styles from "./ExamplesIntro.module.scss";

const ExamplesIntro = () => {
    return (
        <section className={styles.intro}>
            <h1 className={styles.title}>Examples of CV</h1>
            <p className={styles.text}>
                Check out our CV templates. Each example can be viewed directly on the website
                in PDF format with test data or download them for yourself. Use them as
                inspiration for your own CV.
            </p>
        </section>
    );
};

export default ExamplesIntro;
