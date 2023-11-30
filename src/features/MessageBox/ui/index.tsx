import { ChangeEvent, FC, useState } from "react";

import { Input } from "@/shared/ui/Input";
import { Row } from "@/shared/ui/Row";
import { IMessageBoxProps } from "../types";

import styles from "./styles.module.scss";

export const MessageBox: FC<IMessageBoxProps> = ({ emoji }) => {
    const [msg, setMsg] = useState<string>("");

    const typing = (e: ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value);
        // ws &&
        //     ws.send(
        //         JSON.stringify({
        //             action: "typing",
        //         })
        //     );
    };

    return (
        <Row gap={0} className={styles.messageBox}>
            <Input
                type="text"
                placeholder="Напишите сообщение.."
                onChange={typing}
                value={msg}
                border="none"
                height="100%"
            />
            {emoji}
        </Row>
    );
};
