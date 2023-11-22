import { FC } from "react";
import { IChatHeaderProps } from "./types";

import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";
import { Avatar } from "@/shared/ui/Avatar";
import { Rows } from "@/shared/ui/Rows";
import { Username } from "@/entities/User/ui/Username";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";

import styles from "./styles.module.scss";

export const ChatHeader: FC<IChatHeaderProps> = ({
    call,
    actions,
    openInfo,
}) => {
    return (
        <Row gap={0} className={styles.chatHeader}>
            <Row gap={16}>
                <Avatar
                    type="user"
                    img=""
                    size="M"
                    onClick={() => openInfo((prev) => !prev)}
                />
                <Rows gap={5} rows={["auto"]}>
                    <Username
                        name={getFullUsernameWithInitials(
                            "Яковенко",
                            "Анастасия",
                            "Сергеевна"
                        )}
                    />
                    <Text type="p" fz="14px" color="#00CC5E">
                        Online
                    </Text>
                </Rows>
            </Row>
            <Row gap={20}>
                {call}
                {actions}
            </Row>
        </Row>
    );
};
