import { FC } from "react";
import { IChatContainerProps } from "./types";

import { Cols } from "@/shared/ui/Cols";

import styles from "./styles.module.scss";
import { SMALL_LAPTOP } from "@/shared/utils";

export const ChatContainer: FC<IChatContainerProps> = ({ children }) => {
    return (
        <Cols
            type="custom"
            gap={0}
            cols={SMALL_LAPTOP ? [] : ["480px", "1fr"]}
            className={styles.chatContainer}
        >
            {children}
        </Cols>
    );
};
