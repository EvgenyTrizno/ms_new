import { FC, ReactNode } from "react";

import styles from "./BlueBox.module.scss";

interface IBlueBoxProps {
    children: ReactNode;
}

export const BlueBox: FC<IBlueBoxProps> = ({ children }) => {
    return <div className={styles.block}>{children}</div>;
};
