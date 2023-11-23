import { FC } from "react";
import { ISlideProps } from "./types";

import { Avatar } from "@/shared/ui/Avatar";
import { BlueBox } from "@/shared/ui/BlueBox";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

export const Slide: FC<ISlideProps> = ({
    name,
    infoData,
    registrationDate,
    width,
}) => {
    return (
        <BlueBox style={{ width }}>
            <Rows gap={16} rows={["auto"]}>
                <Avatar
                    type="custom"
                    size={120}
                    img=""
                    style={{ margin: "0 auto" }}
                />
                <Text type="h3" fz="18px" style={{ marginBottom: 12 }}>
                    {name}
                </Text>
            </Rows>
            {infoData}
            {registrationDate && (
                <Text type="p" fz="12px" color="#B1B2B4">
                    {registrationDate}
                </Text>
            )}
        </BlueBox>
    );
};
