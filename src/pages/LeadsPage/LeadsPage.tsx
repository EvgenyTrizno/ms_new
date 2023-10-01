import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { BlueSliderArrows, WhiteContentBlock } from "@/widgets";
import { Text } from "@/shared";

import woman from "/assets/woman.jpg";
import arrow from "/assets/arrow-right-blue.svg";
import styles from "./LeadsPage.module.scss";

const LeadsPage: FC = () => {
    return (
        <Layout>
            <div className={styles.leads}>
                <div className={styles.cols}>
                    <WhiteContentBlock>
                        <div className={styles.text}>
                            <Text type="h2" fz="18px">
                                Обзвон пациентов за сутки
                            </Text>
                            <div className={styles.result}>
                                <Text type="p" color="#7D7F82">
                                    В базе было найдено 43 номера. Обзвонено
                                </Text>
                                <Text type="p" color="#0064FA">
                                    &nbsp;43 номера
                                </Text>
                            </div>
                        </div>
                        <div className={styles.charts}></div>
                        <div className={styles.block}>
                            <Text type="h2" fz="18px">
                                Клиники вошедшие в неполный аккаунт (37)
                            </Text>
                            <div
                                className={styles.cols}
                                style={{ gridGap: 16 }}
                            >
                                {[1, 2, 3, 4].map((item) => (
                                    <div className={styles.item} key={item}>
                                        <img src={woman} alt="" />
                                        <div className={styles.data}>
                                            <Text type="h2" fz="14px">
                                                Горизонт Здоровья
                                            </Text>
                                            <Text type="h2" fz="12px">
                                                Общая медицинская клиника
                                            </Text>
                                            <div className={styles.redirect}>
                                                <Text
                                                    type="p"
                                                    fz="14px"
                                                    color="#0064FA"
                                                >
                                                    Профиль
                                                </Text>
                                                <img src={arrow} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <BlueSliderArrows />
                        </div>
                        <div className={styles.block}>
                            <Text type="h2" fz="18px">
                                Клиники вошедшие в полный аккаунт (112)
                            </Text>
                            <div
                                className={styles.cols}
                                style={{ gridGap: 16 }}
                            >
                                {[1, 2, 3, 4].map((item) => (
                                    <div className={styles.item} key={item}>
                                        <img src={woman} alt="" />
                                        <div className={styles.data}>
                                            <Text type="h2" fz="14px">
                                                Горизонт Здоровья
                                            </Text>
                                            <Text type="h2" fz="12px">
                                                Общая медицинская клиника
                                            </Text>
                                            <div className={styles.redirect}>
                                                <Text
                                                    type="p"
                                                    fz="14px"
                                                    color="#0064FA"
                                                >
                                                    Профиль
                                                </Text>
                                                <img src={arrow} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <BlueSliderArrows />
                        </div>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <div className={styles.text}>
                            <Text type="h2" fz="18px">
                                Обзвон по общей базе за сутки
                            </Text>
                            <div className={styles.result}>
                                <Text type="p" color="#7D7F82">
                                    В базе было найдено 43 номера. Обзвонено
                                </Text>
                                <Text type="p" color="#0064FA">
                                    &nbsp;43 номера
                                </Text>
                            </div>
                        </div>
                        <div className={styles.charts}></div>
                        <div className={styles.block}>
                            <Text type="h2" fz="18px">
                                Клиники вошедшие в неполный аккаунт (37)
                            </Text>
                            <div
                                className={styles.cols}
                                style={{ gridGap: 16 }}
                            >
                                {[1, 2, 3, 4].map((item) => (
                                    <div className={styles.item} key={item}>
                                        <img src={woman} alt="" />
                                        <div className={styles.data}>
                                            <Text type="h2" fz="14px">
                                                Горизонт Здоровья
                                            </Text>
                                            <Text type="h2" fz="12px">
                                                Общая медицинская клиника
                                            </Text>
                                            <div className={styles.redirect}>
                                                <Text
                                                    type="p"
                                                    fz="14px"
                                                    color="#0064FA"
                                                >
                                                    Профиль
                                                </Text>
                                                <img src={arrow} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <BlueSliderArrows />
                        </div>
                        <div className={styles.block}>
                            <Text type="h2" fz="18px">
                                Клиники вошедшие в полный аккаунт (112)
                            </Text>
                            <div
                                className={styles.cols}
                                style={{ gridGap: 16 }}
                            >
                                {[1, 2, 3, 4].map((item) => (
                                    <div className={styles.item} key={item}>
                                        <img src={woman} alt="" />
                                        <div className={styles.data}>
                                            <Text type="h2" fz="14px">
                                                Горизонт Здоровья
                                            </Text>
                                            <Text type="h2" fz="12px">
                                                Общая медицинская клиника
                                            </Text>
                                            <div className={styles.redirect}>
                                                <Text
                                                    type="p"
                                                    fz="14px"
                                                    color="#0064FA"
                                                >
                                                    Профиль
                                                </Text>
                                                <img src={arrow} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <BlueSliderArrows />
                        </div>
                    </WhiteContentBlock>
                </div>
                <div
                    className={styles.cols}
                    style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
                >
                    <WhiteContentBlock>ssdsd</WhiteContentBlock>
                </div>
            </div>
        </Layout>
    );
};

export default LeadsPage;
