import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

export const DoctorCard: FC = () => {
    return (
        <BlueBox style={{ backgroundColor: "#fff" }}>
            <Row gap={12} style={{ alignItems: "flex-start" }}>
                <Avatar type="custom" size={92} img="" />
                <Rows gap={12} rows={["auto"]}>
                    <Text type="h4" fz="16px">
                        Зайцева Елена Юрьевна
                    </Text>
                    <Rows gap={2} rows={["auto"]}>
                        <Text type="h6" fz="14px">
                            Должность
                        </Text>
                        <Text type="p" fz="14px" color="#3C3C4399">
                            Врач-хирург
                        </Text>
                    </Rows>
                    <Rows gap={2} rows={["auto"]}>
                        <Text type="h6" fz="14px">
                            Опыт работы
                        </Text>
                        <Text type="p" fz="14px" color="#3C3C4399">
                            23 года
                        </Text>
                    </Rows>
                </Rows>
            </Row>
        </BlueBox>
    );
};
