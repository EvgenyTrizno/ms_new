import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Image } from "@/shared/ui/Image";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";

import photo from "../../assets/photo.jpg";
import { AddresData } from "../AddresData";

export const CenterCard: FC = () => {
    return (
        <BlueBox style={{ backgroundColor: "#fff" }}>
            <Image src={photo} alt="" style={{ marginBottom: 12 }} />
            <Rows gap={8} rows={["auto"]}>
                <Text type="h4" fz="16px">
                    Название центра
                </Text>
                <AddresData />
            </Rows>
        </BlueBox>
    );
};
