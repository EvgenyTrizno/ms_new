import { FC } from "react";
import { ICircleProps } from "./types";

import styles from "./styles.module.scss";

export const Circle: FC<ICircleProps> = ({ icon }) => {
    return (
        <div className={styles.circle}>
            <img src={icon} alt="" />
        </div>
    );
};
