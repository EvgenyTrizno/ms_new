import { FC } from "react";

import { Layout } from "../Layout/Layout";
import { Btn, Text } from "@/shared";

import center from "/assets/center-avatar.jpg";
import man from "/assets/man.jpg";
import styles from "./ClinicProfile.module.scss";

const ClinicProfile: FC = () => {
    return (
        <Layout>
            <div className={styles.clinic}>
                <div className={styles.info}>
                    <div className={styles.data}>
                        <div className={styles.box}>
                            <img
                                src={center}
                                alt=""
                                className={styles.centerAvatar}
                            />
                        </div>
                        <div className={styles.box}>
                            <div className={styles.clinic}>
                                <Text type="h2" fz="20px">
                                    Начал работу с 23 июня 2022
                                </Text>
                                <div className={styles.verify}>
                                    <Text type="p" fz="14px">
                                        Контракт подписан
                                    </Text>
                                    <span>
                                        <svg
                                            width="10"
                                            height="9"
                                            viewBox="0 0 10 9"
                                            fill="none"
                                        >
                                            <path
                                                d="M7.96497 2.27734L3.89091 6.35148L2.03906 4.4996"
                                                stroke="#00CC5E"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className={styles.btns}>
                                    <Btn color="#0064FA">Связаться</Btn>
                                    <Btn color="#D64657">Пожаловаться</Btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.aboutContainer}>
                            <div className={styles.about}>
                                <Text type="h2" fz="20px">
                                    Здоровый горизонт
                                </Text>
                                <div className={styles.text}>
                                    <Text type="h4" fz="16px">
                                        Клиника
                                    </Text>
                                    <Text type="p" fz="14px">
                                        Общая медицинская клиника
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h4" fz="16px">
                                        Адрес
                                    </Text>
                                    <Text type="p" fz="14px">
                                        Ташкент, Республика Узбекистан
                                    </Text>
                                    <Text type="p" fz="12px" color="#7D7F82">
                                        ул. Донская, д. 5
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h4" fz="16px">
                                        Номер телефона
                                    </Text>
                                    <Text type="p" fz="14px">
                                        +7(923)-123-45-67
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h4" fz="16px">
                                        Количество персонала
                                    </Text>
                                    <Text type="p" fz="14px" color="#7D7F82">
                                        128 человек
                                    </Text>
                                </div>
                                <div className={styles.text}>
                                    <Text type="h4" fz="16px">
                                        Что не указано в заполнении профиля
                                    </Text>
                                    <Text type="p" fz="14px" color="#7D7F82">
                                        79 человек
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.clinic}>
                                <Text type="h2" fz="1   6px">
                                    Какие болезни обслуживаются
                                </Text>
                                <Btn color="#0064FA">Полный перечень</Btn>
                            </div>
                        </div>
                    </div>
                    <div className={styles.clinic}>
                        <div className={styles.block}>
                            <Text type="h2" fz="20px">
                                Администратор
                            </Text>
                            <div className={styles.box}>
                                <div className={styles.admin}>
                                    <img src={man} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ClinicProfile;
