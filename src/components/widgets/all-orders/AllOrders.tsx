"use client";

import React from "react";
import { useAllOrders } from "@/context/AllOrdersContext";
import styles from "./AllOrders.module.scss";
import { FaFileDownload, FaRegClock, FaCoins } from "react-icons/fa";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import { downloadCVPDF } from "@/components/features/pdf-extractor/PDFExtractorCV";
import { CVOrderType } from "@/backend/types/cv.types";

const AllOrders: React.FC = () => {
    const { cvOrders } = useAllOrders();
    const orders = cvOrders;

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
        return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    };

    const formatId = (id: string) => id.slice(-6);

    const handleDownload = async (order: CVOrderType) => {
        try {
            if (order.extrasData && Object.keys(order.extrasData).length > 0) {
                await downloadCVPDF(order);
                return;
            }

            const res = await fetch(`/api/cv/get-order?id=${order._id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();

            if (!data?.order) return;
            const fullOrder = data.order as CVOrderType;
            await downloadCVPDF(fullOrder);
        } catch (err: any) {
            console.error("❌ Download error:", err.message);
        }
    };

    return (
        <section className={styles.ordersSection}>
            <div className={styles.header}>
                <h3>Your Orders</h3>
                <p>View and download your generated resumes</p>
            </div>

            {orders.length === 0 ? (
                <div className={styles.emptyState}>
                    <span className={styles.emptyIcon}>📭</span>
                    <p>No orders yet.</p>
                    <Link href="/dashboard">
                        <ButtonUI
                            color="primary"
                            size="md"
                            shape="rounded"
                            textColor="quaternary"
                            hoverEffect="shadow"
                        >
                            Generate your first resume
                        </ButtonUI>
                    </Link>
                </div>
            ) : (
                <div className={styles.ordersGrid}>
                    {orders.map((order) => (
                        <div key={order._id.toString()} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.idWrapper}>
                                    <span className={styles.orderId}>#{formatId(order._id.toString())}</span>
                                    <span
                                        className={`${styles.badge} ${
                                            order.reviewType === "manager" ? styles.manager : styles.instant
                                        }`}
                                    >
                    {order.reviewType === "manager" ? "Manager Review" : "Instant"}
                  </span>
                                </div>
                                <button
                                    className={styles.downloadBtn}
                                    onClick={() => handleDownload(order)}
                                    aria-label="Download"
                                >
                                    <FaFileDownload />
                                </button>
                            </div>

                            <div className={styles.cardBody}>
                                <p className={styles.email}>{order.email}</p>
                                <div className={styles.meta}>
                  <span className={styles.date}>
                    <FaRegClock /> {formatDate(order.createdAt)} at {formatTime(order.createdAt)}
                  </span>
                                    <span className={styles.tokens}>
                    <FaCoins /> {order.reviewType === "manager" ? "-60" : "-30"} tokens
                  </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default AllOrders;
