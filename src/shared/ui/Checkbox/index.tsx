import { FC } from "react";
import { ICheckbox } from "./types";

import styles from "./styles.module.scss";
import { useAuth } from "@/shared/model/store/auth";

export const Checkbox: FC<ICheckbox> = ({ checked, value, onChange }) => {
    const { user } = useAuth();
    const sick = user && user.disease.length;
    // const sick = "Болен";

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
