import { FC } from "react";

import { BlueBox } from "@/shared/ui/BlueBox";
import { Cols } from "@/shared/ui/Cols";
import { MainText } from "@/shared/ui/MainText";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Text } from "@/shared/ui/Text";
import { Rows } from "@/shared/ui/Rows";
import { BlueArrows } from "@/shared/ui/BlueArrows";
import { MOBILE, SMALL_LAPTOP } from "@/shared/utils";

import styles from "./styles.module.scss";

export const ExtraCalls: FC = () => {
    return (
        <WhiteContentBlock>
            <Rows gap={12} rows={["auto"]}>
                <MainText text="Экстренные вызовы за сутки" />
                <Cols type="auto" gap={10}>
                    <BlueBox className={styles.info}>
                        <Text
                            type="h4"
                            fz={
                                SMALL_LAPTOP ? "14px" : MOBILE ? "12px" : "16px"
                            }
                        >
                            Медианное значение
                        </Text>
                        <Text className={styles.count} type="h2" fz="24px">
                            16
                        </Text>
                    </BlueBox>
                    <BlueBox className={styles.info}>
                        <Text type="h4" fz="16px">
                            За последние сутки
                        </Text>
                        <Text
                            className={styles.count}
                            type="h2"
                            fz="24px"
                            color="#D64657"
                        >
                            32
                        </Text>
                    </BlueBox>
                </Cols>
                <Text type="h2" fz="18px">
                    Обращение в тех.поддержку
                </Text>
                <Cols type="auto" gap={10}>
                    <BlueBox className={styles.info}>
                        <Text type="h4" fz="16px">
                            Медианное значение
                        </Text>
                        <Text className={styles.count} type="h2" fz="24px">
                            16
                        </Text>
                    </BlueBox>
                    <BlueBox className={styles.info}>
                        <Text type="h4" fz="16px">
                            За последние сутки
                        </Text>
                        <Text
                            className={styles.count}
                            type="h2"
                            fz="24px"
                            color="#D64657"
                        >
                            32
                        </Text>
                    </BlueBox>
                </Cols>
                <BlueArrows prev={() => ({})} next={() => ({})} />
            </Rows>
        </WhiteContentBlock>
    );
};
