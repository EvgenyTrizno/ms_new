import { FC } from "react";
import { IChatHeaderProps } from "./types";

import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";
import { Rows } from "@/shared/ui/Rows";
import { Username } from "@/entities/User/ui/Username";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";

import styles from "./styles.module.scss";
import { Status } from "../Status";

export const ChatHeader: FC<IChatHeaderProps> = ({
    call,
    actions,
    openInfo,
    status,
    user,
}) => {
    return (
        <Row gap={0} className={styles.chatHeader}>
            <Row gap={16}>
                <Avatar
                    type="user"
                    img={user?.image ?? ""}
                    size="M"
                    onClick={() => openInfo((prev) => !prev)}
                />
                <Rows gap={5} rows={["auto"]}>
                    <Username
                        name={getFullUsernameWithInitials(
                            user?.last_name ?? "",
                            user?.first_name ?? "",
                            ""
                        )}
                    />
                    <Status status={status} />
                </Rows>
            </Row>
            <Row gap={20}>
                {call}
                {actions}
            </Row>
        </Row>
    );
};
