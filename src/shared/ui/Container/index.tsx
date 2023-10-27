import { FC } from "react";
import { IContainerProps } from "./types";

import styles from "./styles.module.scss";

export const Container: FC<IContainerProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};
