import { CSSProperties, FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface IBlueBoxProps {
    children: ReactNode;
    style?: CSSProperties;
    className: string;
}

export const BlueBox: FC<IBlueBoxProps> = ({ children, style, className }) => {
    return (
        <div className={`${className} ${styles.block}`} style={style}>
            {children}
        </div>
    );
};
