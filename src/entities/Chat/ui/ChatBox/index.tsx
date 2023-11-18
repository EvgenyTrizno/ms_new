import { FC } from "react";
import { IChatBoxProps } from "./types";

import styles from "./styles.module.scss";

export const ChatBox: FC<IChatBoxProps> = ({ children }) => {
    return (
        <div className={styles.chat}>
            <div className={styles.container}>{children}</div>
        </div>
    );
};
