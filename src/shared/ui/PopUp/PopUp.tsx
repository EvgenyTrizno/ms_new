import { FC } from "react";
import { IPopUp } from "./types";

import styles from "./PopUp.module.scss";

export const PopUp: FC<IPopUp> = ({
    width,
    height,
    children,
    top,
    left,
    right,
    bottom,
}) => {
    return (
        <ul
            className={styles.popup}
            style={{ width, height, top, left, right, bottom }}
        >
            {children}
        </ul>
    );
};
