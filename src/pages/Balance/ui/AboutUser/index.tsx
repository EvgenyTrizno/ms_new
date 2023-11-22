import { FC } from "react";

import { Username } from "@/entities/User";
import { Avatar } from "@/shared/ui/Avatar";
import { InfoText } from "@/shared/ui/InfoText";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";

export const AboutUser: FC = () => {
    return (
        <Row gap={10}>
            <Avatar type="custom" size={50} img={""} />
            <Rows gap={8} rows={["auto"]}>
                <Username name="Ковалева Елена Владимировна" />
                <InfoText text="Профиль" />
            </Rows>
        </Row>
    );
};
