import { FC } from "react";
import { IPopUp } from "./types";

import { Portal } from "../Portal";

import styles from "./styles.module.scss";

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
        <Portal>
            <ul
                className={styles.popup}
                style={{ width, height, top, left, right, bottom }}
            >
                {children}
            </ul>
        </Portal>
    );
};
