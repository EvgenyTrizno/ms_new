import { FC } from "react";

import { IGrayBtnProps } from "./types";

import styles from "./styles.module.scss";

export const GrayBtn: FC<IGrayBtnProps> = ({ children }) => {
    return <div className={styles.btn}>{children}</div>;
};
