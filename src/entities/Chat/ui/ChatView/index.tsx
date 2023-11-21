import { FC } from "react";
import { IChatViewProps } from "./types";

import { Avatar } from "@/shared/ui/Avatar";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";

export const ChatView: FC<IChatViewProps> = ({
    active,
    time,
    message,
    name,
    count,
    img,
    onClick,
}) => {
    const { user } = useAuth();

    const sick = user && user.disease.length;

    return (
        <Row
            gap={20}
            className={`${styles.chat} ${active && styles.active} ${
                sick && active && styles.activeRed
            } ${sick && styles.sick}`}
            onClick={onClick}
        >
            {typeof img === "string" ? (
                <Avatar type="user" size="M" img={img} />
            ) : (
                img
            )}
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
                {count > 0 && (
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
