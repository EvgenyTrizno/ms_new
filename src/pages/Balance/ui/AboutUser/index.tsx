import { FC } from "react";

import { Username } from "@/entities/User";
import { Avatar } from "@/shared/ui/Avatar";
import { InfoText } from "@/shared/ui/InfoText";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { SMALL_LAPTOP } from "@/shared/utils";
import { getFullUsernameWithInitials } from "@/entities/User/lib/helpers/getFullUsernameWithInitials";

export const AboutUser: FC = () => {
    return (
        <Row gap={10}>
            <Avatar type="custom" size={50} img={""} />
            <Rows gap={8} rows={["auto"]}>
                <Username
                    name={
                        SMALL_LAPTOP
                            ? getFullUsernameWithInitials(
                                  "Ковалева",
                                  "Елена",
                                  "Владимировна"
                              )
                            : "Ковалева Елена Владимировна"
                    }
                />
                <InfoText text="Профиль" />
            </Rows>
        </Row>
    );
};
