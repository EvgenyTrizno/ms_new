import { CSSProperties, FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface IBlueBoxProps {
    children: ReactNode;
    style?: CSSProperties;
}

export const BlueBox: FC<IBlueBoxProps> = ({ children, style }) => {
    return (
        <div className={styles.block} style={style}>
            {children}
        </div>
    );
};
