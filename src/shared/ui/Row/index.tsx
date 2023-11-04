import { CSSProperties, FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface IRowProps {
    children: ReactNode;
    style?: CSSProperties;
    gap: number;
    className?: string;
    onClick?: () => void;
}

export const Row: FC<IRowProps> = ({
    children,
    style,
    gap,
    className,
    onClick,
}) => {
    return (
        <div
            className={`${className ?? ""} ${styles.row}`}
            style={{ ...style, gridGap: gap }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
