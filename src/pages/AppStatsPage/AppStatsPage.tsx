import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Text } from "@/shared";
import {
    AdminPanelContainer,
    BlueBox,
    BlueSliderArrows,
    Cols,
    WhiteContentBlock,
} from "@/widgets";

import playmarket from "/assets/playmarket.svg";
import appstore from "/assets/appstore.svg";
import styles from "./AppStatsPage.module.scss";

const AppStatsPage: FC = () => {
    return (
        <Layout>
            <AdminPanelContainer>
                <Cols type="auto" gap={10}>
                    <WhiteContentBlock>
                        <Text type="h2" fz="18px">
                            Болезни пациентов
                        </Text>
                        <div className={styles.chart}></div>
                        <BlueSliderArrows />
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <Text type="h2" fz="18px">
                            Количество скачиваний
                        </Text>
                        <div className={styles.chart}></div>
                    </WhiteContentBlock>
                </Cols>
                <Cols type="custom" gap={10} cols={["1fr", "333px"]}>
                    <div className={styles.box}>
                        <Text type="h2" fz="18px">
                            Возрастные группы пользователей
                        </Text>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.stats}>
                        <WhiteContentBlock>
                            <div className={styles.text}>
                                <Text type="h4">Посещений за сутки</Text>
                                <Text type="h2" fz="24px">
                                    13,856
                                </Text>
                            </div>
                        </WhiteContentBlock>
                        <WhiteContentBlock>
                            <div className={styles.text}>
                                <Text type="h4">
                                    Зарегестрированные за сутки
                                </Text>
                                <Text type="h2" fz="24px">
                                    13,856
                                </Text>
                            </div>
                        </WhiteContentBlock>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="h4">
                                    Удаленные аккаунты за сутки
                                </Text>
                                <Text type="h2" fz="24px">
                                    13,856
                                </Text>
                            </div>
                        </div>
                    </div>
                </Cols>
                <div
                    className={styles.cols}
                    style={{ gridTemplateColumns: "604px 1fr 270px" }}
                >
                    <div className={styles.box}>
                        <div className={styles.block}>
                            <Text type="h2" fz="18px">
                                Экстренные вызовы за сутки
                            </Text>
                            <div className={styles.extra}>
                                <Cols type="auto" gap={10}>
                                    <BlueBox>
                                        <div className={styles.stats}>
                                            <Text type="h4">
                                                Медианное значение
                                            </Text>
                                            <Text type="h2" fz="24px">
                                                16
                                            </Text>
                                        </div>
                                    </BlueBox>
                                    <BlueBox>
                                        <div className={styles.stats}>
                                            <Text type="h4">
                                                За последние сутки
                                            </Text>
                                            <Text
                                                type="h2"
                                                fz="24px"
                                                color="#D64657"
                                            >
                                                32
                                            </Text>
                                        </div>
                                    </BlueBox>
                                </Cols>
                            </div>
                            <Text type="h2" fz="18px">
                                Обращение в тех.поддержку
                            </Text>
                            <div className={styles.extra}>
                                <Cols type="auto" gap={10}>
                                    <BlueBox>
                                        <div className={styles.stats}>
                                            <Text type="h4">
                                                Медианное значение
                                            </Text>
                                            <Text type="h2" fz="24px">
                                                16
                                            </Text>
                                        </div>
                                    </BlueBox>
                                    <BlueBox>
                                        <div className={styles.stats}>
                                            <Text type="h4">
                                                За последние сутки
                                            </Text>
                                            <Text
                                                type="h2"
                                                fz="24px"
                                                color="#D64657"
                                            >
                                                32
                                            </Text>
                                        </div>
                                    </BlueBox>
                                </Cols>
                            </div>
                            <BlueSliderArrows />
                        </div>
                    </div>
                    <div className={styles.box}></div>
                    <div className={styles.box}>
                        <div className={styles.downloads}>
                            <Text type="h2" fz="18px">
                                За последние сутки
                            </Text>
                            <BlueBox>
                                <div className={styles.rowText}>
                                    <img src={appstore} alt="" />
                                    <Text type="h2" fz="20px">
                                        App Store
                                    </Text>
                                </div>
                                <div className={styles.count}>
                                    <Text type="h2" fz="36px" position="center">
                                        2163
                                    </Text>
                                </div>
                            </BlueBox>
                            <BlueBox>
                                <div className={styles.rowText}>
                                    <img src={playmarket} alt="" />
                                    <Text type="h2" fz="20px">
                                        Google Play
                                    </Text>
                                </div>
                                <div className={styles.count}>
                                    <Text type="h2" fz="36px" position="center">
                                        2163
                                    </Text>
                                </div>
                            </BlueBox>
                        </div>
                    </div>
                </div>
                <div className={styles.cols}>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <Text type="h2" fz="18px">
                                Часто задаваемые вопросы тех.поддержке у
                                пользователей
                            </Text>
                            <div className={styles.questions}>
                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        className={styles.blueBlock}
                                        key={item}
                                    >
                                        <div className={styles.question}>
                                            <Text type="h4">
                                                Какие принимаются методы оплаты?
                                            </Text>
                                            <Text type="h2" fz="24px">
                                                217
                                            </Text>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <Text type="h2" fz="18px">
                                Часто задаваемые вопросы в тех.поддержке у
                                сотрудников
                            </Text>
                            <div className={styles.questions}>
                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        className={styles.blueBlock}
                                        key={item}
                                    >
                                        <div className={styles.question}>
                                            <Text type="h4">
                                                Какие принимаются методы оплаты?
                                            </Text>
                                            <Text type="h2" fz="24px">
                                                217
                                            </Text>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <WhiteContentBlock>
                    <div className={styles.nav}>
                        <Text type="h2" fz="18px">
                            Отправка SMS
                        </Text>
                    </div>
                    <Cols type="auto" gap={12} count={3}>
                        <BlueBox>
                            <Text type="h4">За регистрацию</Text>
                            <div className={styles.count}>
                                <Text type="h2" fz="36px" position="center">
                                    94 SMS
                                </Text>
                                <Text
                                    type="h4"
                                    fz="20px"
                                    color="#7D7F82"
                                    position="center"
                                >
                                    9.4$
                                </Text>
                            </div>
                        </BlueBox>
                        <BlueBox>
                            <Text type="h4">За вход</Text>
                            <div className={styles.count}>
                                <Text type="h2" fz="36px" position="center">
                                    94 SMS
                                </Text>
                                <Text
                                    type="h4"
                                    fz="20px"
                                    color="#7D7F82"
                                    position="center"
                                >
                                    9.4$
                                </Text>
                            </div>
                        </BlueBox>
                        <BlueBox>
                            <Text type="h4">За восстановление</Text>
                            <div className={styles.count}>
                                <Text type="h2" fz="36px" position="center">
                                    94 SMS
                                </Text>
                                <Text
                                    type="h4"
                                    fz="20px"
                                    color="#7D7F82"
                                    position="center"
                                >
                                    9.4$
                                </Text>
                            </div>
                        </BlueBox>
                    </Cols>
                </WhiteContentBlock>
            </AdminPanelContainer>
        </Layout>
    );
};

export default AppStatsPage;
