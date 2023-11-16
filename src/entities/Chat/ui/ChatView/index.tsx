import { FC } from "react";

import { Avatar } from "@/shared/ui/Avatar";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";
import { IChatViewProps } from "./types";

export const ChatView: FC<IChatViewProps> = ({
    active,
    time,
    message,
    name,
    count,
    img,
    onClick,
}) => {
    return (
        <Row
            gap={20}
            className={`${styles.chat} ${active && styles.active}`}
            onClick={onClick}
        >
            <Avatar type="user" size="M" img={img} />
            <Rows gap={10} rows={["auto"]}>
                <Text type="h4" fz="14px">
                    {name}
                </Text>
                <Text type="p" fz="12px" color="#7D7F82">
                    {message}
                </Text>
                <div className={styles.time}>
                    <Text type="p" fz="12px" color="#7D7F82">
                        {time}
                    </Text>
                </div>
                {count && (
                    <div className={styles.count}>
                        <Text type="p" fz="10px" color="#fff" position="center">
                            {count}
                        </Text>
                    </div>
                )}
            </Rows>
        </Row>
    );
};
