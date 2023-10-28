import { FC } from "react";

import { Input } from "@/shared/ui/Input";
import { Row } from "@/shared/ui/Row";
import { IMessageBoxProps } from "../types";

import styles from "./styles.module.scss";

export const MessageBox: FC<IMessageBoxProps> = ({
    emoji,
    onChange,
    value,
}) => {
    return (
        <Row gap={0} className={styles.messageBox}>
            <Input
                type="text"
                placeholder="Напишите сообщение.."
                onChange={onChange}
                value={value}
                border="none"
                height="100%"
            />
            {emoji}
        </Row>
    );
};
