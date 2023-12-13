import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { MainText } from "@/shared/ui/MainText";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";

import styles from "./styles.module.scss";

export const Sms: FC = () => {
    return (
        <WhiteContentBlock>
            <Row gap={0} style={{ justifyContent: "space-between" }}>
                <MainText text="Отправка SMS" />
            </Row>
            <div className={styles.container}>
                <BlueBox>
                    <MainText text="Потрачено за регистрации" />
                    <Text type="h2" position="center" className={styles.count}>
                        94 SMS
                    </Text>
                    <Text
                        type="h4"
                        className={styles.costs}
                        color="#7D7F82"
                        position="center"
                    >
                        9.4$
                    </Text>
                </BlueBox>
                <BlueBox>
                    <MainText text="Потрачено за восстановления" />
                    <Text type="h2" position="center" className={styles.count}>
                        94 SMS
                    </Text>
                    <Text
                        type="h4"
                        color="#7D7F82"
                        position="center"
                        className={styles.costs}
                    >
                        9.4$
                    </Text>
                </BlueBox>
            </div>
        </WhiteContentBlock>
    );
};
