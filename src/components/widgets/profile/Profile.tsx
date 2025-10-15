import React from "react";
import ProfileHead from "@/components/features/profile-head/ProfileHead";
import BalanceCard from "@/components/features/balance-card/BalanceCard";
import Dashboard from "@/components/features/dashboard/Dashboard";
import styles from "./Profile.module.scss";

const Profile = () => {
    return (
        <div className={styles.profilePage}>
            <ProfileHead />
            <div className={styles.cardsRow}>
                <BalanceCard />
            </div>
            <Dashboard />
        </div>
    );
};

export default Profile;
