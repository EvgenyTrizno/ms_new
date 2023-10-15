import { CSSProperties, FC, ReactNode } from "react";

import styles from "./WhiteContentBlock.module.scss";

interface IWhiteBlock {
    children: ReactNode;
    style?: CSSProperties;
}

export const WhiteContentBlock: FC<IWhiteBlock> = ({ children, style }) => {
    return (
        <div className={styles.box} style={style}>
            {children}
        </div>
    );
};
