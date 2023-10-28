import { FC } from "react";
import { IChatPanelProps } from "./types";

import { Row } from "@/shared/ui/Row";

import styles from "./styles.module.scss";

export const ChatPanel: FC<IChatPanelProps> = ({
    attachment,
    sendMsg,
    messageBox,
}) => {
    return (
        <Row gap={20} className={styles.panel}>
            {attachment}
            {messageBox}
            {sendMsg}
        </Row>
    );
};
