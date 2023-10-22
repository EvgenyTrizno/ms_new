import { FC, ReactNode, CSSProperties } from "react";

import styles from "./Rows.module.scss";

interface IRowsProps {
    children: ReactNode;
    rows: string[];
    gap: number;
    style?: CSSProperties;
}

export const Rows: FC<IRowsProps> = ({ children, rows, gap }) => {
    return (
        <div
            className={styles.rows}
            style={{ gridGap: gap, gridTemplateRows: rows.join(" ") }}
        >
            {children}
        </div>
    );
};
