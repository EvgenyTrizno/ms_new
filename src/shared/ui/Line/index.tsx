import { FC } from "react";
import { ILineProps } from "./types";

import styles from "./styles.module.scss";

export const Line: FC<ILineProps> = ({ color, height, width, style }) => {
    return (
        <div
            className={styles.line}
            style={{ ...style, backgroundColor: color, width, height }}
        ></div>
    );
};
