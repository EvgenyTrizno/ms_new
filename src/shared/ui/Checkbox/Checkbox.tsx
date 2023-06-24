import { FC } from "react";
import { ICheckbox } from "./types";

import styles from "./Checkbox.module.scss";

export const Checkbox: FC<ICheckbox> = ({ checked, value }) => {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" checked={checked} value={value} />
        </div>
    );
};
