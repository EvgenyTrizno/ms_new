import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";

import icon from "./assets/icon.svg";

export const DiseasesHistory: FC = () => {
    return (
        <WhiteContentBlock>
            <Rows gap={12} rows={["auto"]}>
                <Row gap={10}>
                    <Text type="h5" fz="16px">
                        Сколько раз перемещал кнопку на
                    </Text>
                    <Image src={icon} alt="" />
                </Row>
            </Rows>
        </WhiteContentBlock>
    );
};
