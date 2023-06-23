import { FC } from "react";

import styles from "./Switch.module.scss";

export const Switch: FC = () => {
    return (
        <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
        </label>
    );
};
