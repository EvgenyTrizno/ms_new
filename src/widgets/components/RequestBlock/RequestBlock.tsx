import { FC } from "react";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import { BlueBox } from "../../../shared/ui/BlueBox";

// import cross from "/assets/cross-red.svg";
import check from "/assets/check-green.svg";
import styles from "./RequestBlock.module.scss";
import { LAPTOP, SMALL_LAPTOP } from "@/shared/utils";

export const RequestBlock: FC = () => {
    return (
        <WhiteContentBlock>
            <div className={styles.title}>
                <Text
                    type="h2"
                    fz={LAPTOP ? "17px" : SMALL_LAPTOP ? "15px" : "18px"}
                >
                    Регистрация врача
                </Text>
                <div className={styles.status}>
                    <img src={check} alt="" />
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.top}>
                    <BlueBox style={{ padding: "12px 16px", width: "100%" }}>
                        <Text type="p" fz={SMALL_LAPTOP ? "14px" : ""}>
                            Иванов
                        </Text>
                    </BlueBox>
                    <BlueBox style={{ padding: "12px 16px", width: "100%" }}>
                        <Text type="p" fz={SMALL_LAPTOP ? "14px" : ""}>
                            Иван
                        </Text>
                    </BlueBox>
                </div>
                <BlueBox style={{ padding: "12px 16px" }}>Москва</BlueBox>
                <BlueBox style={{ padding: "12px 16px" }}>
                    <Text type="p" fz={SMALL_LAPTOP ? "14px" : ""}>
                        Российская Федерация
                    </Text>
                </BlueBox>
                <BlueBox style={{ padding: "12px 16px" }}>
                    <Text type="p" fz={SMALL_LAPTOP ? "14px" : ""}>
                        +7 (495) 755-69-83
                    </Text>
                </BlueBox>
            </div>
            <Btn color="#0064FA">Подробнее</Btn>
        </WhiteContentBlock>
    );
};
