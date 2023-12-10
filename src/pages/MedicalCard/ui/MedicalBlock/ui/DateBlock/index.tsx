import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Image } from "@/shared/ui/Image";
import { Text } from "@/shared/ui/Text";

import calendar from "./assets/calendar.svg";
import clock from "./assets/alarm-clock.svg";

export const DateBlock: FC = () => {
    return (
        <BlueBox style={{ height: "max-content" }}>
            <Rows gap={16} rows={["auto"]}>
                <Row gap={8}>
                    <Image src={calendar} alt="" />
                    <Text fz="12px" type="p">
                        21 Декабря
                    </Text>
                </Row>
                <Row gap={8}>
                    <Image src={clock} alt="" />
                    <Text fz="12px" type="p">
                        14:00-15:00
                    </Text>
                </Row>
            </Rows>
        </BlueBox>
    );
};
