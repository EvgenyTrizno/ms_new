import { FC, ReactNode } from "react";

import styles from "./WhiteContentBlock.module.scss";

interface IWhiteBlock {
    children: ReactNode;
}

export const WhiteContentBlock: FC<IWhiteBlock> = ({ children }) => {
    return <div className={styles.box}>{children}</div>;
};
