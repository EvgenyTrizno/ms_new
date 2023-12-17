import { FC } from "react";

import { BlueArrows } from "@/shared/ui/BlueArrows";
import { BlueBox } from "@/shared/ui/BlueBox";
import { Cols } from "@/shared/ui/Cols";
import { InfoText } from "@/shared/ui/InfoText";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { MOBILE, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { Text } from "@/shared/ui/Text";
import { Row } from "@/shared/ui/Row";
import { Indicator } from "@/shared/ui/Indicator";
import { MainText } from "@/shared/ui/MainText";

import read from "./assets/icon.svg";
import telegram from "./assets/telegram-icon.svg";
import users from "./assets/users.svg";
import styles from "./styles.module.scss";

export const SocialInfo: FC = () => {
    return (
        <WhiteContentBlock>
            <Row gap={0} className={styles.nav}>
                <Text type="h2">Telegram</Text>
                <Indicator text="Работает" />
            </Row>
            <Cols
                type="custom"
                gap={10}
                cols={MOBILE || TABLET ? [] : ["360px", "1fr"]}
            >
                <BlueBox>
                    <Text type="h2">Количество подписчиков</Text>
                    <div className={styles.data}>
                        <img src={telegram} alt="" />
                        <div className={styles.stats}>
                            <div className={styles.item}>
                                <Text type="h2" color="#00CC5E">
                                    +1145 /
                                </Text>
                                <Text type="h4" color="#7D7F82">
                                    за сутки
                                </Text>
                            </div>
                            <div className={styles.item}>
                                <Text type="h2" color="#D64657">
                                    -195 /
                                </Text>
                                <Text type="h4" color="#7D7F82">
                                    за сутки
                                </Text>
                            </div>
                        </div>
                    </div>
                    <Row gap={4} style={{ justifyContent: "center" }}>
                        <Text type="p">Прирост 6525</Text>
                        <img src={users} alt="" />
                        <Text type="p">за неделю</Text>
                    </Row>
                </BlueBox>
                <BlueBox>
                    <div className={styles.nav}>
                        <Text type="h2">Сбои в работе</Text>
                    </div>
                </BlueBox>
            </Cols>
            <Cols
                type="custom"
                cols={
                    SMALL_LAPTOP
                        ? ["1fr", "1fr"]
                        : MOBILE || TABLET
                        ? []
                        : ["600px", "1fr"]
                }
                gap={10}
            >
                <BlueBox className={styles.post}>
                    <div className={styles.info}>
                        <Row
                            gap={0}
                            style={{ justifyContent: "space-between" }}
                        >
                            <MainText text="Последний пост" />
                            <InfoText text="Все записи" />
                        </Row>
                        <Text type="p" color="#3C3D3E">
                            Сообщаем вам, что в связи с проведением
                            запланированных технических работ наш сайт и
                            мобильное приложение будут временно недоступны с
                            13.10.23 до 15.10.23. В это время мы будем проводить
                            необходимые обновления и улучшения, чтобы обеспечить
                            вам более стабильный и удобный опыт пользования
                            нашими услугами. Приносим извинения за возможные
                            неудобства, вызванные этой временной недоступностью.
                        </Text>
                    </div>
                    <Row
                        gap={0}
                        style={{ justifyContent: "space-between" }}
                        className={styles.view}
                    >
                        <Text type="p" color="#B1B2B4">
                            01/07/2023
                        </Text>
                        <Row gap={5}>
                            <Text type="p" color="#0064FA">
                                Просмотрело 1312 человек
                            </Text>
                            <img src={read} alt="" />
                        </Row>
                    </Row>
                </BlueBox>
                <BlueBox className={styles.targer}>
                    <Text type="h2">История таргета</Text>
                    <Cols gap={10} type="auto" count={MOBILE || TABLET ? 1 : 2}>
                        <BlueBox style={{ padding: "30px 20px" }}>
                            <Text type="p" color="#7D7F82" position="center">
                                История запуска таргета
                            </Text>
                        </BlueBox>
                        <BlueBox style={{ padding: "30px 20px" }}>
                            <Text type="p" color="#7D7F82" position="center">
                                История запуска таргета
                            </Text>
                        </BlueBox>
                        <BlueBox style={{ padding: "30px 20px" }}>
                            <Text type="p" color="#7D7F82" position="center">
                                История запуска таргета
                            </Text>
                        </BlueBox>
                        <BlueBox style={{ padding: "30px 20px" }}>
                            <Text type="p" color="#7D7F82" position="center">
                                История запуска таргета
                            </Text>
                        </BlueBox>
                    </Cols>
                    <BlueArrows
                        prev={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        next={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </BlueBox>
            </Cols>
        </WhiteContentBlock>
    );
};
