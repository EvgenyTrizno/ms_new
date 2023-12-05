import { Rating } from "@/features/Rating";
import { Avatar } from "@/shared/ui/Avatar";
import { InfoText } from "@/shared/ui/InfoText";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { FC } from "react";

export const EmployeeInfo: FC = () => {
    return (
        <Row gap={10}>
            <Avatar img="" type="custom" size={50} />
            <Rows gap={10} rows={["auto"]}>
                <Text type="h5" fz="14px">
                    Ковалева Елена Владимировна
                </Text>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Rating defaultValue={5} />
                    <InfoText text="Профиль" />
                </Row>
            </Rows>
        </Row>
    );
};
