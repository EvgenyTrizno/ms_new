import { CSSProperties, FC, ReactNode } from "react";

import styles from "./BlueBox.module.scss";

interface IBlueBoxProps {
    children: ReactNode;
    style?: CSSProperties;
}

export const BlueBox: FC<IBlueBoxProps> = ({ children }) => {
    return <div className={styles.block}>{children}</div>;
};
