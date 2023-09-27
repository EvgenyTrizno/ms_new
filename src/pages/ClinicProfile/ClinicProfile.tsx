import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Layout } from "../Layout/Layout";
import { Rating, Search } from "@/widgets";
import { Btn, Text } from "@/shared";

import center from "/assets/center-avatar.jpg";
import man from "/assets/man.jpg";
import arrow from "/assets/arrow-right.svg";
import controller from "/assets/controler.svg";
import styles from "./ClinicProfile.module.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ClinicProfile: FC = () => {
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                borderColor: "rgb(255, 99, 132)",
                data: [1, 3, 5, 5],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Dataset 2",
                borderColor: "rgb(53, 162, 235)",
                data: [1, 3, 5, 5],
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };
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
                        <div className={styles.about}>
                            <div className={styles.data}>
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
                            <div className={styles.box}>
                                <div className={styles.nav}>
                                    <Text type="h2" fz="20px">
                                        Администратор
                                    </Text>
                                    <img src={arrow} alt="" />
                                </div>
                                <div className={styles.admin}>
                                    <img src={man} alt="" />
                                    <div className={styles.data}>
                                        <Text type="h2" fz="18px">
                                            Алексеев Эрнест Владимирович
                                        </Text>
                                        <div
                                            className={styles.text}
                                            style={{ gridGap: 3 }}
                                        >
                                            <Text type="h2" fz="16px">
                                                Номер телефона
                                            </Text>
                                            <Text type="p" fz="14px">
                                                +7(923)-123-45-67
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.box}>
                                <div className={styles.stats}>
                                    <div className={styles.text}>
                                        <Text type="h2" fz="18px">
                                            Количество посещений за день
                                        </Text>
                                        <div className={styles.row}>
                                            <div className={styles.sumBlock}>
                                                <Text type="h2" fz="28px">
                                                    86
                                                </Text>
                                                <Text type="h2" fz="16px">
                                                    Онлайн
                                                </Text>
                                            </div>
                                            <div className={styles.sumBlock}>
                                                <Text type="h2" fz="28px">
                                                    86
                                                </Text>
                                                <Text type="h2" fz="16px">
                                                    Оффлайн
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <div className={styles.text}>
                                    <Text type="h2" fz="18px">
                                        Записи
                                    </Text>
                                    <div className={styles.colsX2}>
                                        <div className={styles.sumBlock}>
                                            <Text type="h2" fz="28px">
                                                86
                                            </Text>
                                            <div
                                                className={styles.text}
                                                style={{ gridGap: 0 }}
                                            >
                                                <Text type="h2" fz="16px">
                                                    Всего
                                                </Text>
                                                <Text type="p" fz="14px">
                                                    Записей
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.sumBlock}>
                                            <Text type="h2" fz="28px">
                                                86
                                            </Text>
                                            <div
                                                className={styles.text}
                                                style={{ gridGap: 0 }}
                                            >
                                                <Text type="h2" fz="16px">
                                                    Подтвержено
                                                </Text>
                                                <Text type="p" fz="14px">
                                                    Записей
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.sumBlock}>
                                            <Text type="h2" fz="28px">
                                                86
                                            </Text>
                                            <div
                                                className={styles.text}
                                                style={{ gridGap: 0 }}
                                            >
                                                <Text type="h2" fz="16px">
                                                    Отменено
                                                </Text>
                                                <Text type="p" fz="14px">
                                                    Записей
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.sumBlock}>
                                            <Text type="h2" fz="28px">
                                                86
                                            </Text>
                                            <div
                                                className={styles.text}
                                                style={{ gridGap: 0 }}
                                            >
                                                <Text type="h2" fz="16px">
                                                    Перенесено
                                                </Text>
                                                <Text type="p" fz="14px">
                                                    Записей
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.colsX2}
                    style={{ gridTemplateColumns: "360px 1fr" }}
                >
                    <div className={styles.box}>
                        <Text type="h2" fz="18px">
                            Баланс на счету
                        </Text>
                        <div className={styles.bal}>
                            <div className={styles.sum}>
                                <Text type="p">За день</Text>
                                <div
                                    className={`${styles.sumBlock} ${styles.mt5}`}
                                >
                                    <Text type="h2" fz="28px">
                                        $
                                    </Text>
                                    <Text type="p" fz="20px">
                                        1,567
                                    </Text>
                                </div>
                            </div>
                            <div className={styles.sum}>
                                <Text type="p">За день</Text>
                                <div
                                    className={`${styles.sumBlock} ${styles.mt5}`}
                                >
                                    <Text type="h2" fz="28px">
                                        $
                                    </Text>
                                    <Text type="h2" fz="20px">
                                        42,567
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <div className={styles.nav}>
                                <Text type="h2" fz="18px">
                                    Премии и штрафы
                                </Text>
                            </div>
                            <div className={styles.chart}>
                                <Line width="100%" height="160px" data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.searchContainer}>
                    <Search placeholder="Поиск специалиста или пациента" />
                    <Btn
                        color="#0064FA"
                        fz="14px"
                        width="133px"
                        height="48px"
                        padding="14px 18px"
                    >
                        <div className={styles.filter}>
                            <img src={controller} alt="" />
                            <Text type="p" fz="14px">
                                Фильтры
                            </Text>
                        </div>
                    </Btn>
                </div>
                <div className={styles.box}>
                    <div className={styles.colsX4}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                            <div key={item} className={styles.comment}>
                                <div className={styles.rowText}>
                                    <img src={man} alt="" />
                                    <div
                                        className={styles.text}
                                        style={{ gridGap: 10 }}
                                    >
                                        <Text type="h2" fz="14px">
                                            Ковалева Елена Владимировна
                                        </Text>
                                        <div className={styles.bottom}>
                                            <Rating
                                                defaultValue={5}
                                                gap="5px"
                                            />
                                            <div className={styles.more}>
                                                <Text
                                                    type="p"
                                                    color="#0064FA"
                                                    fz="14px"
                                                >
                                                    Профиль
                                                </Text>
                                                <svg
                                                    width="17"
                                                    height="16"
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M6.16484 13.5564C6.03817 13.5564 5.9115 13.5097 5.8115 13.4097C5.61817 13.2164 5.61817 12.8964 5.8115 12.703L10.1582 8.35638C10.4782 8.03638 10.4782 7.51638 10.1582 7.19638L5.8115 2.84971C5.61817 2.65638 5.61817 2.33638 5.8115 2.14305C6.00484 1.94971 6.32484 1.94971 6.51817 2.14305L10.8648 6.48971C11.2048 6.82971 11.3982 7.28971 11.3982 7.77638C11.3982 8.26305 11.2115 8.72305 10.8648 9.06305L6.51817 13.4097C6.41817 13.503 6.2915 13.5564 6.16484 13.5564Z"
                                                        fill="#0064FA"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.arrows}>
                        <div className={styles.arrow}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M12.9167 16.6654L6.25008 9.9987L12.9167 3.33203"
                                    stroke="#0064FA"
                                    stroke-opacity="0.5"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div className={styles.arrow}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M7.9165 16.6654L14.5832 9.9987L7.9165 3.33203"
                                    stroke="#0064FA"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ClinicProfile;
