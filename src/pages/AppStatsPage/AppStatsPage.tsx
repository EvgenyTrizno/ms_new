import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Text } from "@/shared";
import { BlueSliderArrows } from "@/widgets";

import woman from "/assets/woman.jpg";
import arrow from "/assets/arrow-right-blue.svg";
import playmarket from "/assets/playmarket.svg";
import appstore from "/assets/appstore.svg";
import styles from "./AppStatsPage.module.scss";

const AppStatsPage: FC = () => {
    return (
        <Layout>
            <div className={styles.app}>
                <div
                    className={styles.cols}
                    style={{ gridTemplateColumns: "333px 1fr" }}
                >
                    <div className={styles.stats}>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="h4">Посещений за сутки</Text>
                                <Text type="h2" fz="24px">
                                    13,856
                                </Text>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.text}>
                                <Text type="h4">
                                    Зарегестрированные за сутки
                                </Text>
                                <Text type="h2" fz="24px">
                                    13,856
                                </Text>
                            </div>
                        </div>
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
                    <div className={styles.box}>
                        <Text type="h2" fz="18px">
                            Возрастные группы посетителей
                        </Text>
                        <div className={styles.bar}></div>
                    </div>
                </div>
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
                                <div className={styles.blueBlock}>
                                    <div className={styles.stats}>
                                        <Text type="h4">
                                            Медианное значение
                                        </Text>
                                        <Text type="h2" fz="24px">
                                            16
                                        </Text>
                                    </div>
                                </div>
                                <div className={styles.blueBlock}>
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
                                </div>
                            </div>
                            <div className={styles.top}>
                                <Text type="h2" fz="18px">
                                    Ковалева Елена Владимировна
                                </Text>
                                <Text type="p" color="#7D7F82" fz="14px">
                                    2 часа назад
                                </Text>
                            </div>
                            <div className={styles.data}>
                                <img src={woman} alt="" />
                                <div
                                    className={styles.text}
                                    style={{ gridGap: 5 }}
                                >
                                    <Text type="h5" fz="14px">
                                        Причина:
                                    </Text>
                                    <Text type="p" fz="14px" color="#3C3D3E">
                                        Пациент испытывает резкую боль в груди и
                                        затрудненное дыхание, что может
                                        указывать на возможный инфаркт миокарда.
                                        Требуется срочная медицинская помощь для
                                        оценки состояния сердца и немедленного
                                        начала лечения.
                                    </Text>
                                    <div className={styles.nav}>
                                        <Text
                                            type="p"
                                            fz="14px"
                                            position="end"
                                            color="#0064FA"
                                        >
                                            Перейти к записи
                                        </Text>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
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
                            <div className={styles.blueBlock}>
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
                            </div>
                            <div className={styles.blueBlock}>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cols}>
                    <div className={styles.box}>
                        <Text type="h2" fz="18px">
                            Болезни пациентов в этом месяце
                        </Text>
                        <BlueSliderArrows />
                    </div>
                    <div className={styles.box}>
                        <Text type="h2" fz="18px">
                            Средний показатель проведения времени на сайте
                        </Text>
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
            </div>
        </Layout>
    );
};

export default AppStatsPage;
