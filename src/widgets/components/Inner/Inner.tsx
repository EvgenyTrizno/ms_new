import { FC, ReactNode } from "react";

import styles from "./Inner.module.scss";

interface IInnerProps {
    children: ReactNode;
}

export const Inner: FC<IInnerProps> = ({ children }) => {
    return <div className={styles.inner}>{children}</div>;
};
