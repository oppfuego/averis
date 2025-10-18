"use client";

import React from "react";
import {useAllOrders} from "@/context/AllOrdersContext";
import styles from "./AllOrders.module.scss";
import {FaFileDownload, FaRegClock, FaCoins} from "react-icons/fa";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import {downloadCVPDF} from "@/components/features/pdf-extractor/PDFExtractorCV";
import {downloadUniversalPDF} from "@/pdf-creator/PdfCreator";
import {CVOrderType} from "@/backend/types/cv.types";
import {UniversalOrderType} from "@/backend/types/universal.types";

const AllOrders: React.FC = () => {
    const {aiOrders, loading, refreshOrders} = useAllOrders();

    // ❇️ Universal orders — переіменовуємо для зручності
    const universalOrders = aiOrders as unknown as UniversalOrderType[];

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const formatTime = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
    };

    const formatId = (id: string) => id.slice(-6);

    const handleDownloadCV = async (order: CVOrderType) => {
        try {
            if (order.extrasData && Object.keys(order.extrasData).length > 0) {
                await downloadCVPDF(order);
                return;
            }
            const res = await fetch(`/api/cv/get-order?id=${order._id}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const data = await res.json();
            if (data?.order) await downloadCVPDF(data.order);
        } catch (err: any) {
            console.error("❌ CV Download error:", err.message);
        }
    };

    const handleDownloadUniversal = async (order: UniversalOrderType) => {
        try {
            console.log("🧾 ORDER BEFORE DOWNLOAD:", order);

            if (order.extrasData && Object.keys(order.extrasData).length > 0) {
                console.log("✅ EXTRAS FROM MEMORY:", order.extrasData);
                await downloadUniversalPDF(order);
                return;
            }

            const res = await fetch(`/api/universal/get-order?id=${order._id}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const data = await res.json();

            console.log("🌐 ORDER FROM API:", data?.order);

            if (data?.order) await downloadUniversalPDF(data.order);
        } catch (err: any) {
            console.error("❌ Training Download error:", err.message);
        }
    };


    if (loading) return <p className={styles.loading}>Loading orders...</p>;

    if (universalOrders.length === 0)
        return (
            <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>📭</span>
                <p>No orders yet.</p>
                <Link href="/dashboard">
                    <ButtonUI color="primary" size="md" shape="rounded" hoverEffect="shadow">
                        Create your first order
                    </ButtonUI>
                </Link>
            </div>
        );

    return (
        <section className={styles.ordersSection}>
            <div className={styles.header}>
                <h3>Your Orders</h3>
                <p>View and download your generated content</p>
                <ButtonUI onClick={refreshOrders} color="primary" size="sm">
                    Refresh
                </ButtonUI>
            </div>

            {/* ====================== UNIVERSAL ORDERS ====================== */}
            {universalOrders.length > 0 && (
                <>
                    <h4 className={styles.sectionTitle}>Training Orders</h4>
                    <div className={styles.ordersGrid}>
                        {universalOrders.map((order) => (
                            <div key={order._id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.idWrapper}>
                                        <span className={styles.orderId}>#{formatId(order._id)}</span>
                                        <span
                                            className={`${styles.badge} ${
                                                order.planType === "reviewed" ? styles.manager : styles.instant
                                            }`}
                                        >
                      {order.planType === "reviewed" ? "Reviewed" : "Instant"}
                    </span>
                                    </div>
                                    <button
                                        className={styles.downloadBtn}
                                        onClick={() => handleDownloadUniversal(order)}
                                        aria-label="Download"
                                    >
                                        <FaFileDownload/>
                                    </button>
                                </div>

                                <div className={styles.cardBody}>
                                    <p className={styles.email}>{order.email}</p>
                                    <div className={styles.meta}>
                    <span className={styles.date}>
                      <FaRegClock/> {formatDate(order.createdAt)} at {formatTime(order.createdAt)}
                    </span>
                                        <span className={styles.tokens}>
                      <FaCoins/> -{order.totalTokens} tokens
                    </span>
                                    </div>
                                    <p className={styles.extraInfo}>
                                        Category: <strong>{order.category}</strong> | Language:{" "}
                                        {order.language || "English"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default AllOrders;
