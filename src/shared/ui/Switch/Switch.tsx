import { FC } from "react";
import { ISwitchProps } from "@/shared/types";

import { useUserCondition } from "@/shared/model/store";

import styles from "./Switch.module.scss";

export const Switch: FC<ISwitchProps> = ({ onChange }) => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <label className={styles.switch}>
            <input type="checkbox" onChange={onChange} />
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
