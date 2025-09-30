"use client";

import React from "react";
import { useAllOrders } from "@/context/AllOrdersContext";
import styles from "./AllOrders.module.scss";
import { FaFileDownload } from "react-icons/fa";
import { downloadPDF } from "@/components/features/pdf-extractor/PDFExtractor";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";

const OrdersSection: React.FC = () => {
    const { cvOrders } = useAllOrders();
    const orders = cvOrders;

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return (
            date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
            }) +
            " " +
            date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            })
        );
    };

    const formatId = (id: string) => id.slice(-6);

    return (
        <div className={styles.ordersSection}>
            <h3 className={styles.title}>Your CV Orders</h3>

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
                            fullWidth
                        >
                            Generate your first CV
                        </ButtonUI>
                    </Link>
                </div>
            ) : (
                <div className={styles.ordersList}>
                    {orders.map((order) => (
                        <div key={order._id} className={styles.orderCard}>
                            <div className={styles.orderHeader}>
                                <span className={styles.orderId}>#{formatId(order._id)}</span>
                                <span className={styles.charge}>-30 tokens</span>
                            </div>
                            <p className={styles.email}>{order.email}</p>
                            <p className={styles.date}>{formatDate(order.createdAt)}</p>
                            <button
                                className={styles.downloadBtn}
                                onClick={() => downloadPDF(order, "Classic")}
                            >
                                <FaFileDownload /> Download
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrdersSection;
