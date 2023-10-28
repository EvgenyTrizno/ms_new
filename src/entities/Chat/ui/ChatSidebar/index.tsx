import { FC } from "react";
import { IChatSidebarProps } from "./types";

import { Rows } from "@/shared/ui/Rows";

import styles from "./styles.module.scss";

export const ChatSidebar: FC<IChatSidebarProps> = ({ children }) => {
    return (
        <div className={styles.sidebar}>
            <Rows gap={10} rows={["auto"]}>
                {children}
            </Rows>
        </div>
    );
};
