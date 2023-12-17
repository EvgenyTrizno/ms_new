import { FC } from "react";
import { IChatContainerProps } from "./types";

import { Cols } from "@/shared/ui/Cols";

import styles from "./styles.module.scss";
import { MOBILE, SMALL_LAPTOP } from "@/shared/utils";

export const ChatContainer: FC<IChatContainerProps> = ({ children, top }) => {
    return (
        <Cols
            type="custom"
            gap={0}
            cols={SMALL_LAPTOP || MOBILE ? [] : ["480px", "1fr"]}
            className={styles.chatContainer}
            style={{ top }}
        >
            {children}
        </Cols>
    );
};
