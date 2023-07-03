import { FC } from "react";
import { useNavigate } from "react-router";

import { Icons, MobileSwitcher } from "@/shared";
import { useUserCondition } from "@/shared/model/store";

import man from "/assets/man.jpg";
import styles from "./MobileHeader.module.scss";

export const MobileHeader: FC = () => {
    const navigate = useNavigate();
    const { condition } = useUserCondition();

    return (
        <div
            className={styles.mobileHeader}
            style={
                condition === "Болен" ? { borderBottomColor: "#F7E6E8" } : {}
            }
        >
            <img
                src={man}
                alt=""
                className={styles.avatar}
                onClick={() => navigate("/profile")}
            />
            <MobileSwitcher />
            <div className={styles.settings}>
                <Icons icon="settings" />
            </div>
        </div>
    );
};
