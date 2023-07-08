import { FC } from "react";
import { IMobilePopUp } from "./types";

import styles from "./MobilePopUp.module.scss";

export const MobilePopUp: FC<IMobilePopUp> = ({
    children,
    width,
    height,
    right,
    top,
    left,
    bottom,
}) => {
    return (
        <div
            className={styles.popup}
            style={{ width, height, top, right, left, bottom }}
        >
            <ul>{children}</ul>
        </div>
    );
};
