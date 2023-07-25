import { FC } from "react";

import { useUserCondition } from "@/shared/model/store";

import styles from "./MobileSwitch.module.scss";
import { IMobileSwitch } from "./types";

export const MobileSwitch: FC<IMobileSwitch> = ({ onChange, checked }) => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <label className={styles.switch}>
            <input type="checkbox" onChange={onChange} checked={checked} />
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
