"use client";

import AllOrders from "@/components/widgets/all-orders/AllOrders";
import TransactionHistory from "@/components/widgets/all-transactions/AllTransactions";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <AllOrders />
            <TransactionHistory />
        </div>
    );
}
