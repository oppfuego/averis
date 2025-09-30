import mongoose, { Schema, Document } from "mongoose";

export interface CVOrderDocument extends Document {
    userId: mongoose.Types.ObjectId;
    email: string;

    fullName: string;
    phone: string;
    photo?: string; // base64 або URL
    cvStyle: "Classic" | "Modern" | "Creative";
    industry: string;
    experienceLevel: string;

    summary: string;
    workExperience: string;
    education: string;
    skills: string;

    // AI результат
    response: string;

    // «людина працює»: доступність через 24 год
    status: "pending" | "ready";
    readyAt: Date;

    createdAt: Date;
}

const cvOrderSchema = new Schema<CVOrderDocument>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },

    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    photo: { type: String },

    cvStyle: { type: String, enum: ["Classic", "Modern", "Creative"], default: "Classic" },
    industry: { type: String, required: true },
    experienceLevel: { type: String, required: true },

    summary: { type: String, required: true },
    workExperience: { type: String, required: true },
    education: { type: String, required: true },
    skills: { type: String, required: true },

    response: { type: String, required: true },

    status: { type: String, enum: ["pending", "ready"], default: "ready" },
    readyAt: { type: Date, required: true },

    createdAt: { type: Date, default: Date.now },
});

export const CVOrder =
    mongoose.models.CVOrder || mongoose.model<CVOrderDocument>("CVOrder", cvOrderSchema);
