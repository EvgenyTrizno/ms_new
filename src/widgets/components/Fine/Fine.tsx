import { FC } from "react";

import { Text } from "@/shared";

import hammer from "/assets/hammer.svg";
import styles from "./Fine.module.scss";

export const Fine: FC = () => {
    return (
        <div className={styles.fine}>
            <div className={`${styles.icon} ${styles.iconRed}`}>
                <img src={hammer} alt="" />
            </div>
            <Text type="p" fz="14px">
                13 апреля 2023
            </Text>
        </div>
    );
};
