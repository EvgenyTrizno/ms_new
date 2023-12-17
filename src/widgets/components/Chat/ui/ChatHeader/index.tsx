import { FC } from "react";
import { IChatHeaderProps } from "./types";
import { useNavigate } from "react-router";

import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";
import { Rows } from "@/shared/ui/Rows";
import { Username } from "@/entities/User/ui/Username";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";
import { Status } from "../Status";
import { MOBILE, TABLET } from "@/shared/utils";
import { Image } from "@/shared/ui/Image";

import arrow from "./assets/icon.svg";
import styles from "./styles.module.scss";

export const ChatHeader: FC<IChatHeaderProps> = ({
    call,
    actions,
    openInfo,
    status,
    user,
}) => {
    const navigate = useNavigate();

    return (
        <Row gap={0} className={styles.chatHeader}>
            <Row gap={16}>
                {(MOBILE || TABLET) && (
                    <Image src={arrow} alt="" onClick={() => navigate(-1)} />
                )}
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
