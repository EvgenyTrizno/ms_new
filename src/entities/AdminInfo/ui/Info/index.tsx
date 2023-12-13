import { FC } from "react";
import { IAdminInfo } from "./types";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { MainText } from "@/shared/ui/MainText";
import { Row } from "@/shared/ui/Row";
import { Avatar } from "@/shared/ui/Avatar";
import { Text } from "@/shared/ui/Text";
import { Image } from "@/shared/ui/Image";

import icon from "./assets/icon.svg";

export const AdminInfo: FC<IAdminInfo> = ({ name, number }) => {
    return (
        <WhiteContentBlock>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <MainText text="Администратор" />
                    <Image src={icon} alt="" />
                </Row>
                <Row gap={16}>
                    <Avatar img="" type="custom" size={80} />
                    <Rows gap={8} rows={["auto"]}>
                        <Text type="h4" fz="16px">
                            {name}
                        </Text>
                        <Text type="h4" fz="16px" style={{ marginBottom: 3 }}>
                            Номер телефона
                        </Text>
                        <Text type="p" fz="14px" color="#3C3D3E">
                            {number}
                        </Text>
                    </Rows>
                </Row>
            </Rows>
        </WhiteContentBlock>
    );
};
