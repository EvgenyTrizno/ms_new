import { FC } from "react";
import { IEmployeeInfo } from "./types";

import { Rating } from "@/features/Rating";
import { Avatar } from "@/shared/ui/Avatar";
import { InfoText } from "@/shared/ui/InfoText";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

export const EmployeeInfo: FC<IEmployeeInfo> = ({ avatar, name, rating }) => {
    return (
        <Row gap={10}>
            <Avatar img={avatar} type="custom" size={50} />
            <Rows gap={10} rows={["auto"]}>
                <Text type="h5" fz="14px">
                    {name}
                </Text>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Rating defaultValue={rating} />
                    <InfoText text="Профиль" />
                </Row>
            </Rows>
        </Row>
    );
};
