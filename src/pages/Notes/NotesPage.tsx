import { FC } from "react";
import { useNavigate } from "react-router";

import { Calendar, Search } from "@/widgets";
import { Layout } from "../Layout/Layout";
import { Btn, Text } from "@/shared";

import arrow from "/assets/arrow-right-black.svg";
import addCircle from "/assets/add-circle.svg";
import clock from "/assets/clock-fast-forward.svg";
import calendar from "/assets/calendar.svg";
import alarm from "/assets/alarm-clock.svg";
import styles from "./NotesPage.module.scss";

const NotesPage: FC = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Search placeholder="Введите запрос" />
                    <Btn
                        color="#0064FA"
                        width="60px"
                        onClick={() => navigate("/select-center-map")}
                        padding="0"
                    >
                        <img src={addCircle} alt="" />
                    </Btn>
                </div>
                <div className={styles.wrapper}>
                    <Calendar height="500px" info={false} />
                    <div className={styles.list}>
                        <Text type="p" color="#7D7F82">
                            10 Октябрь
                        </Text>
                        {[1, 2, 3, 4, 5].map(() => (
                            <div className={styles.item}>
                                <div className={styles.top}>
                                    <div className={styles.nav}>
                                        <Text type="p" color="#7D7F82">
                                            Название записи
                                        </Text>
                                        <img src={arrow} alt="" />
                                    </div>
                                    <Text type="h3" fz="20px">
                                        Проверка мышц
                                    </Text>
                                </div>
                                <div className={styles.content}>
                                    <ul className={styles.list}>
                                        <li className={styles.li}>
                                            <Text
                                                type="p"
                                                fz="14px"
                                                color="#7D7F82"
                                            >
                                                Доступно:
                                            </Text>
                                            <Text
                                                type="p"
                                                fz="14px"
                                                color="#00CC5E"
                                            >
                                                Онлайн
                                            </Text>
                                        </li>
                                        <li className={styles.li}>
                                            <Text
                                                type="p"
                                                fz="14px"
                                                color="#7D7F82"
                                            >
                                                Центр:
                                            </Text>
                                            <Text type="p" fz="14px">
                                                Московский центр
                                            </Text>
                                        </li>
                                        <li className={styles.li}>
                                            <Text
                                                type="p"
                                                fz="14px"
                                                color="#7D7F82"
                                            >
                                                Врач:
                                            </Text>
                                            <Text type="p" fz="14px">
                                                Невролог И.И
                                            </Text>
                                        </li>
                                    </ul>
                                    <div className={styles.line}></div>
                                    <div className={styles.bottom}>
                                        <div className={styles.block}>
                                            <img src={calendar} alt="" />
                                            <Text type="p" fz="14px">
                                                24 декабря
                                            </Text>
                                        </div>
                                        <div className={styles.block}>
                                            <img src={alarm} alt="" />
                                            <Text type="p" fz="14px">
                                                24 декабря
                                            </Text>
                                        </div>
                                        <div className={styles.block}>
                                            <img src={clock} alt="" />
                                            <Text type="p" fz="14px">
                                                24 декабря
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotesPage;
