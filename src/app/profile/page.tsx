"use client";

import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import styles from "./UserProfile.module.scss";
import { useUser } from "@/context/UserContext";
import AllOrders from "@/components/widgets/all-orders/AllOrders";
import CVOrders from "@/components/widgets/cv-orders/CVOrders"; // 👈 імпорт
import { LogoutButton } from "@/components/widgets/logout-button/LogoutButton";
import TransactionHistory from "@/components/widgets/all-transactions/AllTransactions";

const UserProfile: React.FC = () => {
    const user = useUser();

    return (
        <div className={styles.accountPage}>
            {/* Hero */}
            <header className={styles.hero}>
                <FaUserCircle className={styles.heroIcon}/>
                <div>
                    <h1>My Account</h1>
                    <p>Manage your profile, track your balance and view your orders</p>
                </div>
            </header>

            {/* Balance */}
            <section className={styles.balanceCard}>
                <div className={styles.balanceInfo}>
                    <p>Current Balance</p>
                    <h2>{user?.tokens ?? 0} <span>Tokens</span></h2>
                </div>
                <Link href="/pricing" className={styles.topUpBtn}>
                    Top-Up
                </Link>
            </section>

            <div className={styles.dashboard}>
                <AllOrders/>
                <TransactionHistory/>
            </div>


        </div>
    );
};

export default UserProfile;
