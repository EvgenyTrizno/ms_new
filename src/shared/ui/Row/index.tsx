import { CSSProperties, FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface IRowProps {
    children: ReactNode;
    style?: CSSProperties;
    gap: number;
    className?: string;
}

export const Row: FC<IRowProps> = ({ children, style, gap, className }) => {
    return (
        <div
            className={`${className ?? ""} ${styles.row}`}
            style={{ ...style, gridGap: gap }}
        >
            {children}
        </div>
    );
};
