"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface AiOrder {
    _id: string;
    userId: string;
    email: string;
    prompt: string;
    response: string;
    createdAt: string;
}

export interface CVOrder {
    _id: string;
    userId: string;
    email: string;
    fullName: string;
    phone: string;
    industry: string;
    experienceLevel: string;
    photo?: string;
    summary: string;
    workExperience: string;
    education: string;
    skills: string;
    cvStyle: "Classic" | "Modern" | "Creative";
    readyAt: string;
    createdAt: string;
}

interface AllOrdersContextType {
    aiOrders: AiOrder[];
    cvOrders: CVOrder[];
    refreshOrders: () => Promise<void>;
    loading: boolean;
}

const AllOrdersContext = createContext<AllOrdersContextType>({
    aiOrders: [],
    cvOrders: [],
    refreshOrders: async () => {},
    loading: false,
});

export const useAllOrders = () => useContext(AllOrdersContext);

export const AllOrdersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [aiOrders, setAiOrders] = useState<AiOrder[]>([]);
    const [cvOrders, setCvOrders] = useState<CVOrder[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            // 🔹 AI orders
            const resAi = await fetch("/api/ai/get-all-orders", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            const dataAi = await resAi.json();
            const normalizedAi = Array.isArray(dataAi) ? dataAi : dataAi.orders;
            setAiOrders(Array.isArray(normalizedAi) ? normalizedAi : []);

            // 🔹 CV orders
            const resCv = await fetch("/api/cv/get-all-orders", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            const dataCv = await resCv.json();
            const normalizedCv = Array.isArray(dataCv) ? dataCv : dataCv.orders;
            setCvOrders(Array.isArray(normalizedCv) ? normalizedCv : []);
        } catch (err: any) {
            setAiOrders([]);
            setCvOrders([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <AllOrdersContext.Provider value={{ aiOrders, cvOrders, refreshOrders: fetchOrders, loading }}>
            {children}
        </AllOrdersContext.Provider>
    );
};
