import { FC } from "react";
import { motion } from "framer-motion";

import { Layout } from "../Layout/Layout";
import { Btn, Filter, Text } from "@/shared";
import { Search } from "@/widgets";

import ghost from "/assets/ghost.svg";
import calendar from "/assets/calendar.svg";
import alarm from "/assets/alarm-clock.svg";
import clock from "/assets/clock-fast-forward.svg";
import settings from "/assets/setting.svg";
import arrow from "/assets/arrow-right.svg";
import plane from "/assets/paper-plane.svg";
import loading from "/assets/loading-circle.svg";
import styles from "./MedicalCardPage.module.scss";

const MedicalCardPage: FC = () => {
    const data = [1, 2, 3];

    return (
        <Layout>
            <div className={styles.medical}>
                <Search placeholder="Введите запрос" />
                <Filter data={["Подтвержденные", "Доп.проверка"]} />
                <div
                    className={styles.items}
                    style={
                        data.length === 0
                            ? { display: "block" }
                            : { display: "grid" }
                    }
                >
                    {data.length === 0 ? (
                        <div className={styles.empty}>
                            <div className={styles.inner}>
                                <img src={ghost} alt="" />
                                <Text type="h2" color="#262626" fz="32px">
                                    Ничего нет
                                </Text>
                                <div className={styles.text}>
                                    <Text
                                        type="p"
                                        fz="24px"
                                        position="center"
                                        color="#26262680"
                                    >
                                        Список пуст, создайте запись нажав на
                                        кнопку “Плюс”
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {data.map((item) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "linear",
                                    }}
                                    className={styles.item}
                                    key={item}
                                >
                                    <div className={styles.box}>
                                        <div className={styles.text}>
                                            <Text
                                                type="p"
                                                color="#9B9B9B"
                                                fz="12px"
                                            >
                                                Название записи
                                            </Text>
                                            <Text
                                                type="h2"
                                                color="#000"
                                                fz="17px"
                                            >
                                                Восстановление
                                            </Text>
                                        </div>
                                        <ul className={styles.list}>
                                            <li className={styles.li}>
                                                <Text type="p" color="#B1B2B4">
                                                    Формат:
                                                </Text>
                                                <Text
                                                    type="p"
                                                    color="#00CC5E"
                                                    fz="13px"
                                                >
                                                    Online
                                                </Text>
                                            </li>
                                            <li className={styles.li}>
                                                <Text type="p" color="#B1B2B4">
                                                    Центр:
                                                </Text>
                                                <Text type="p">
                                                    Московский Центр
                                                </Text>
                                            </li>
                                            <li className={styles.li}>
                                                <Text type="p" color="#B1B2B4">
                                                    Врач:
                                                </Text>
                                                <Text type="p">
                                                    Иван Иванов
                                                </Text>
                                            </li>
                                            <li className={styles.li}>
                                                <Text type="p" color="#B1B2B4">
                                                    Причина:
                                                </Text>
                                                <Text type="p">
                                                    Проверка мышц спины
                                                </Text>
                                            </li>
                                        </ul>
                                        <div className={styles.line}></div>
                                        <div className={styles.date}>
                                            <div className={styles.block}>
                                                <img src={calendar} alt="" />
                                                <Text type="p" fz="12px">
                                                    21 Декабря
                                                </Text>
                                            </div>
                                            <div className={styles.block}>
                                                <img src={alarm} alt="" />
                                                <Text type="p" fz="12px">
                                                    14:45
                                                </Text>
                                            </div>
                                            <div className={styles.block}>
                                                <img src={clock} alt="" />
                                                <Text type="p" fz="12px">
                                                    40 минут
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.text}>
                                            <Text
                                                type="p"
                                                fz="12px"
                                                position="center"
                                            >
                                                Добавлена в групповой чат для
                                                обсуждения
                                            </Text>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            <div className={styles.itemAny}>
                                <div className={styles.managment}>
                                    <div className={styles.item}>
                                        <img src={settings} alt="" />
                                    </div>
                                    <div className={styles.item}>
                                        <img src={plane} alt="" />
                                    </div>
                                    <div className={styles.item}>
                                        <img src={loading} alt="" />
                                    </div>
                                    <div className={styles.item}>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.title}>
                                        <Text
                                            type="p"
                                            color="#7D7F82"
                                            fz="12px"
                                        >
                                            Запись:
                                        </Text>
                                        <Text
                                            type="h2"
                                            color="#000000"
                                            fz="17px"
                                        >
                                            Восстановление
                                        </Text>
                                    </div>
                                    <div className={styles.box}>
                                        <ul>
                                            <li>
                                                <Text
                                                    type="p"
                                                    color="#B1B2B4"
                                                    fz="13px"
                                                >
                                                    Формат:
                                                </Text>
                                                <Text
                                                    type="p"
                                                    color="#00CC5E"
                                                    fz="13px"
                                                >
                                                    Онлайн
                                                </Text>
                                            </li>
                                            <li>
                                                <Text
                                                    type="p"
                                                    color="#B1B2B4"
                                                    fz="13px"
                                                >
                                                    Учреждение:
                                                </Text>
                                                <Text type="p" fz="13px">
                                                    Московский Центр
                                                </Text>
                                            </li>
                                            <li>
                                                <Text
                                                    type="p"
                                                    fz="13px"
                                                    color="#B1B2B4"
                                                >
                                                    Ведущий:
                                                </Text>
                                                <Text type="p" fz="13px">
                                                    Иван Иванов
                                                </Text>
                                            </li>
                                            <li>
                                                <Text
                                                    type="p"
                                                    color="#B1B2B4"
                                                    fz="13px"
                                                >
                                                    Причина:
                                                </Text>
                                                <Text type="p" fz="13px">
                                                    Проверка мышц спины
                                                </Text>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.box}>
                                        <ul>
                                            <li>
                                                <Text
                                                    type="p"
                                                    color="#9B9B9B"
                                                    fz="13px"
                                                >
                                                    Дата и время
                                                </Text>
                                            </li>
                                            <li>
                                                <Text
                                                    type="p"
                                                    color="#B1B2B4"
                                                    fz="13px"
                                                >
                                                    Дата:
                                                </Text>
                                                <Text type="p" fz="13px">
                                                    Не установлено
                                                </Text>
                                            </li>
                                            <li>
                                                <Text
                                                    type="p"
                                                    fz="13px"
                                                    color="#B1B2B4"
                                                >
                                                    Начало:
                                                </Text>
                                                <Text type="p" fz="13px">
                                                    Не установлено
                                                </Text>
                                            </li>
                                            <li>
                                                <Text
                                                    type="p"
                                                    color="#B1B2B4"
                                                    fz="13px"
                                                >
                                                    Длительность:
                                                </Text>
                                                <Text type="p" fz="13px">
                                                    40 минут
                                                </Text>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.btns}>
                                    <Btn color="#0064FA">Подтвердить</Btn>
                                    <Btn
                                        color="transparent"
                                        textColor="#0064FA"
                                        border="1px solid #0064FA"
                                    >
                                        Отменить
                                    </Btn>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default MedicalCardPage;
