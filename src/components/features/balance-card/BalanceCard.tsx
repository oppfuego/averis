"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { LogoutButton } from "@/components/ui/logout-button/LogoutButton";
import styles from "./BalanceCard.module.scss";
import { GiTwoCoins } from "react-icons/gi";
import {FaSignOutAlt} from "react-icons/fa";
import ButtonUI from "@/components/ui/button/ButtonUI";
import React from "react";

export default function BalanceCard() {
    const user = useUser();

    return (
        <section className={styles.balanceCard}>
            <div className={styles.left}>
                <h3>Your Token Balance</h3>
                <p className={styles.amount}>
                    <GiTwoCoins />
                    {user?.tokens ?? 0}
                    <span> tokens</span>
                </p>
            </div>

            <div className={styles.right}>
                <Link href="/pricing" className={styles.topUpBtn}>
                    <ButtonUI
                        variant="outlined"
                        color="secondary"
                        textColor="quaternary"
                        size="lg"
                        hoverEffect="shadow"
                        hoverColor="primary"
                        hoverTextColor="text"
                    >
                        Top-Up Tokens
                    </ButtonUI>
                </Link>
                <LogoutButton />
            </div>
        </section>
    );
}
