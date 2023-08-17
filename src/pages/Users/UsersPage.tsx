import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Text } from "@/shared";

import woman from "/assets/woman.jpg";
import arrowRightBlue from "/assets/arrow-right-blue.svg";
import styles from "./UsersPage.module.scss";

const UsersPage: FC = () => {
    return (
        <Layout>
            <div className={styles.users}>
                <div className={styles.box}>
                    <div className={styles.view}>
                        <div className={styles.info}>
                            <img src={woman} alt="" />
                            <div className={styles.text}>
                                <Text type="h2" fz="21px">
                                    Яковенко А. С.
                                </Text>
                                <Text type="p" fz="19px" color="#B1B2B4">
                                    Пользователь
                                </Text>
                            </div>
                        </div>
                        <div className={styles.viewStats}>
                            <div className={styles.viewBlock}>
                                <Text type="p" fz="19px">
                                    12 Обращений в центр
                                </Text>
                            </div>
                            <div className={styles.viewBlock}>
                                <Text type="p" fz="19px">
                                    12 Вызовов в скорую
                                </Text>
                            </div>
                            <div className={styles.alerts}>
                                <div className={styles.alert}>
                                    Норматив 20 минут
                                </div>
                                <div className={styles.alert}>
                                    Прошло 9 минут
                                </div>
                            </div>
                        </div>
                        <div className={styles.redirect}>
                            <Text type="h4" color="#0064FA" fz="18px">
                                Изучить подробнее
                            </Text>
                            <img src={arrowRightBlue} alt="" />
                        </div>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.title}>
                            <Text type="h2" fz="24px">
                                Основные данные
                            </Text>
                        </div>
                        <div className={styles.blocks}>
                            <div className={styles.block}>
                                <div className={styles.blockItem}>
                                    <Text type="p" color="#7D7F82" fz="17px">
                                        Дата Рождения
                                    </Text>
                                    <Text type="p" fz="19px">
                                        24 Фев, 1994
                                    </Text>
                                </div>
                                <div className={styles.blockItem}>
                                    <Text type="p" color="#7D7F82" fz="17px">
                                        Интерес
                                    </Text>
                                    <Text type="p" fz="19px">
                                        Хоккей
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <div className={styles.blockItem}>
                                    <Text type="p" color="#7D7F82" fz="17px">
                                        Страна
                                    </Text>
                                    <Text type="p" fz="19px">
                                        Россия
                                    </Text>
                                </div>
                                <div className={styles.blockItem}>
                                    <Text type="p" color="#7D7F82" fz="17px">
                                        Город
                                    </Text>
                                    <Text type="p" fz="19px">
                                        Ташкент
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <div className={styles.blockItem}>
                                    <Text type="p" color="#7D7F82" fz="17px">
                                        Дата Поступления
                                    </Text>
                                    <Text type="p" fz="19px">
                                        24 Фев 2022
                                    </Text>
                                </div>
                                <div className={styles.blockItem}>
                                    <Text type="p" color="#7D7F82" fz="17px">
                                        Болезнь · Проблема · Недуг
                                    </Text>
                                    <Text type="p" fz="19px">
                                        Ковид
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <div className={styles.blockItem}>
                                    <Text type="p" color="#7D7F82" fz="17px">
                                        Дата Поступления
                                    </Text>
                                    <Text type="p" fz="19px">
                                        24 Фев, 1994
                                    </Text>
                                </div>
                                <div className={styles.blockItem}>
                                    <Text type="p" color="#7D7F82" fz="17px">
                                        Болезнь · Проблема · Недуг
                                    </Text>
                                    <Text type="p" fz="19px">
                                        Ковид
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default UsersPage;
