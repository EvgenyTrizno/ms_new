import { FC } from "react";

import { MobileSwitcher } from "@/shared";
import { useProfile, useUserCondition } from "@/shared/model/store";

import man from "/assets/man.jpg";
import styles from "./MobileHeader.module.scss";

export const MobileHeader: FC = () => {
    const { condition } = useUserCondition();
    const { setIsProfile, isProfile } = useProfile();

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
                onClick={() => setIsProfile(!isProfile)}
            />
            <MobileSwitcher />
            <div className={styles.settings}>
                {/* <Icons icon="settings" /> */}
            </div>
        </div>
    );
};
