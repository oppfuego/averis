import React from "react";
import {useUser} from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import styles from "./AuthButtons.module.scss";
import {FaUser} from "react-icons/fa";
import {GrMoney} from "react-icons/gr";

const AuthButtons: React.FC = () => {
    const user = useUser();
    if (user) {
        return (

            // <div className={styles.linkContainer}>
            //     <Link href="/profile">
            //         <FaUser className={styles.link}/>
            //     </Link>
            //
            // </div>
            <div className={styles.userContainer}>
                <Link href="/profile" className={styles.userCard}>
                    <div className={styles.userBalance}>
                        <span className={styles.balanceText}><GrMoney/> {user?.tokens ?? 0}</span>
                    </div>
                    <div className={styles.userIconWrapper}>
                        <FaUser className={styles.userIcon}/>
                    </div>
                </Link>
                <Link href="/dashboard" className={styles.dashboardButton}>
                    <ButtonUI text="Create CV" shape="default" hoverColor="linkHover" hoverEffect="scale"
                              fullWidth textColor="text"/>
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.nonAuthedButtons}>
            <Link href="/sign-in">
                <ButtonUI text="Sign In" color="tertiary" shape="default" hoverColor="link" hoverEffect="none"
                          fullWidth textColor="text"/>
            </Link>
            <Link href="/sign-up">
                <ButtonUI text="Sign Up" shape="default" color="backgroundDark" hoverColor="secondary"
                          hoverEffect="none"
                          fullWidth textColor="link"/>
            </Link>
        </div>
    );
};

export default AuthButtons;