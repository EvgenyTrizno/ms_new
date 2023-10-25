import { CSSProperties, FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface IRowProps {
    children: ReactNode;
    style?: CSSProperties;
    gap: number;
}

export const Row: FC<IRowProps> = ({ children, style, gap }) => {
    return (
        <div className={styles.row} style={{ ...style, gridGap: gap }}>
            {children}
        </div>
    );
};
