import { CSSProperties, FC, ReactNode } from "react";

import styles from "./Inner.module.scss";

interface IInnerProps {
    children: ReactNode;
    style?: CSSProperties;
}

export const Inner: FC<IInnerProps> = ({ children, style }) => {
    return (
        <div className={styles.inner} style={style}>
            {children}
        </div>
    );
};
