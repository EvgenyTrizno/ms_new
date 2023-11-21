import { FC } from "react";
import { IFastMessage } from "./types";

import styles from "./styles.module.scss";

export const FastMessage: FC<IFastMessage> = ({ text }) => {
    return <div className={styles.fastMessage}>{text}</div>;
};
