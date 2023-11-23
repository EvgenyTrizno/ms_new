import { FC } from "react";
import { IMember } from "./types";

import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";
import { Rows } from "@/shared/ui/Rows";
import { UserRank, Username } from "@/entities/User";
import { Text } from "@/shared/ui/Text";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";
import { BlueBox } from "@/shared/ui/BlueBox";

export const Member: FC<IMember> = ({
    surname,
    name,
    patronymic,
    avatar,
    role,
}) => {
    return (
        <BlueBox>
            <Row gap={12}>
                <Avatar type="user" size="S" img={avatar} />
                <Rows gap={5} rows={["auto"]} style={{ width: "100%" }}>
                    <Row
                        gap={0}
                        style={{
                            justifyContent: "space-between",
                        }}
                    >
                        <Username
                            name={getFullUsernameWithInitials(
                                surname,
                                name,
                                patronymic
                            )}
                        />
                        <UserRank rank={role} fz="12px" />
                    </Row>
                    <Text type="p" fz="12px">
                        Онлайн
                    </Text>
                </Rows>
            </Row>
        </BlueBox>
    );
};
