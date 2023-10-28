import { FC, ReactNode, CSSProperties } from "react";

import styles from "./styles.module.scss";

interface IRowsProps {
    children: ReactNode;
    rows: string[];
    gap: number;
    style?: CSSProperties;
    className?: string;
}

export const Rows: FC<IRowsProps> = ({ children, rows, gap, className }) => {
    return (
        <div
            className={`${className ?? ""} ${styles.rows}`}
            style={{ gridGap: gap, gridTemplateRows: rows.join(" ") }}
        >
            {children}
        </div>
    );
};
