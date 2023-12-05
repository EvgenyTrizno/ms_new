import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { MainText } from "@/shared/ui/MainText/MainText";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { Rows } from "@/shared/ui/Rows";
import { Row } from "@/shared/ui/Row";

import playmarket from "./assets/playmarket.svg";
import appstore from "./assets/appstore.svg";

export const AppDownload: FC = () => {
    return (
        <WhiteContentBlock>
            <Rows gap={8} rows={["auto"]}>
                <MainText text="За последние сутки" />
                <BlueBox>
                    <Row gap={10}>
                        <img src={appstore} alt="" />
                        <Text type="h2" fz="20px">
                            App Store
                        </Text>
                    </Row>
                    <Text type="h2" fz="36px" position="center">
                        2163
                    </Text>
                </BlueBox>
                <BlueBox>
                    <Row gap={10}>
                        <img src={playmarket} alt="" />
                        <Text type="h2" fz="20px">
                            Google Play
                        </Text>
                    </Row>
                    <Text type="h2" fz="36px" position="center">
                        2163
                    </Text>
                </BlueBox>
            </Rows>
        </WhiteContentBlock>
    );
};
