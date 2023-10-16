import { FC } from "react";

import { WhiteContentBlock } from "../WhiteContentBlock/WhiteContentBlock";
import { Btn, Text } from "@/shared";

import styles from "./RequestBlock.module.scss";
import { BlueBox } from "../BlueBox/BlueBox";

export const RequestBlock: FC = () => {
    return (
        <WhiteContentBlock>
            <div className={styles.title}>
                <Text type="h2" fz="18px">
                    Регистрация врача
                </Text>
            </div>
            <div className={styles.form}>
                <BlueBox style={{ padding: "12px 16px" }}>Иванов</BlueBox>
                <BlueBox style={{ padding: "12px 16px" }}>Иванов</BlueBox>
                <BlueBox style={{ padding: "12px 16px" }}>Иванов</BlueBox>
                <BlueBox style={{ padding: "12px 16px" }}>Иванов</BlueBox>
            </div>
            <Btn color="#0064FA">Подробнее</Btn>
        </WhiteContentBlock>
    );
};
