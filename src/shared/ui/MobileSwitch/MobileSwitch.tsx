import { FC } from "react";

import { useUserCondition } from "@/shared/model/store";

import styles from "./MobileSwitch.module.scss";

export const MobileSwitch: FC = () => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span
                className={
                    sick
                        ? `${styles.slider} ${styles.sliderRed}`
                        : styles.slider
                }
            ></span>
        </label>
    );
};
