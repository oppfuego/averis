"use client";

import React from "react";
import Grid from "../grid/Grid";
import Card from "../card/Card";
import { media as mediaMap } from "@/resources/media";
import { motion } from "framer-motion";
import styles from "./TeamGrid.module.scss";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

interface TeamGridProps {
    title?: string;
    description?: string;
    members: TeamMember[];
}

function resolveMedia(key?: string) {
    if (!key) return undefined;
    return (mediaMap as Record<string, unknown>)[key] as any;
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const TeamGrid: React.FC<TeamGridProps> = ({ title, description, members }) => {
    return (
        <section className={styles.section}>
            <motion.div
                className={styles.head}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {title && <h2 className={styles.sectionTitle}>{title}</h2>}
                {description && <p className={styles.sectionDesc}>{description}</p>}
            </motion.div>

            <Grid columns={members.length > 3 ? 3 : members.length} gap="2rem">
                {members.map((m, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                    >
                        <Card
                            image={resolveMedia(m.image)}
                            title={`${m.name} — ${m.role}`}
                            description={m.bio}
                        />
                    </motion.div>
                ))}
            </Grid>
        </section>
    );
};

export default TeamGrid;
