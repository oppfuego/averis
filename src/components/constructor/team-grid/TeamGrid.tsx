"use client";
import React from "react";
import Grid from "../grid/Grid";
import Card from "../card/Card";
import { media as mediaMap } from "@/resources/media";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

function resolveMedia(key?: string) {
    if (!key) return undefined;
    return (mediaMap as Record<string, unknown>)[key] as any;
}

const TeamGrid: React.FC<{ members: TeamMember[] }> = ({members}) => {
    return (
        <Grid columns={3} gap="2rem">
            {members.map((m, i) => (
                <Card
                    key={i}
                    image={resolveMedia(m.image)}
                    title={`${m.name} — ${m.role}`}
                    description={m.bio}
                />
            ))}
        </Grid>
    );
};

export default TeamGrid;
