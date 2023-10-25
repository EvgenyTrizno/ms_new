import { FC } from "react";
import { ICheckbox } from "./types";

import { useUserCondition } from "@/shared/model/store";

import styles from "./styles.module.scss";

export const Checkbox: FC<ICheckbox> = ({ checked, value, onChange }) => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <div
            className={
                sick
                    ? `${styles.checkbox} ${styles.checkboxRed}`
                    : styles.checkbox
            }
        >
            <input
                type="checkbox"
                checked={checked}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
