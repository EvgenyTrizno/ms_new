import { FC } from "react";
import { ICircleProps } from "./types";

import styles from "./styles.module.scss";

export const Circle: FC<ICircleProps> = ({ icon, color }) => {
    return (
        <div className={styles.circle} style={{ backgroundColor: color }}>
            <img src={icon} alt="" />
        </div>
    );
};
