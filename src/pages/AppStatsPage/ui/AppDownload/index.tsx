import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { MainText } from "@/shared/ui/MainText";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";

import playmarket from "./assets/playmarket.svg";
import appstore from "./assets/appstore.svg";

import styles from "./styles.module.scss";

export const AppDownload: FC = () => {
    return (
        <WhiteContentBlock>
            <MainText text="За последние сутки" />
            <div className={styles.container}>
                <BlueBox className={styles.app}>
                    <Row gap={10}>
                        <img src={appstore} alt="" />
                        <Text type="h4" fz="20px">
                            App Store
                        </Text>
                    </Row>
                    <Text type="h2" fz="36px" position="center">
                        2163
                    </Text>
                </BlueBox>
                <BlueBox className={styles.app}>
                    <Row gap={10}>
                        <img src={playmarket} alt="" />
                        <Text type="h4" fz="20px">
                            Google Play
                        </Text>
                    </Row>
                    <Text type="h2" fz="36px" position="center">
                        2163
                    </Text>
                </BlueBox>
            </div>
        </WhiteContentBlock>
    );
};
