import { FC, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ChartOptions,
    Filler,
} from "chart.js";
// import { AnimatePresence, motion } from "framer-motion";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

import { Layout } from "../Layout/Layout";
import { Text } from "@/shared";

import arrowDown from "/assets/arrow-down-gray.svg";
import arrowRight from "/assets/arrow-right-dark-gray.svg";
import circle from "/assets/tick-circle-green.svg";
import man from "/assets/man.jpg";
import styles from "./BalancePage.module.scss";

const BalancePage: FC = () => {
    // const [isOpen, setIsOpen] = useState<boolean>(false);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    // useEffect(() => {
    //     setIsOpen(true);
    // }, []);

    const formatMinutes = (minutes: number) => {
        if (minutes === 1) {
            return "1 минута";
        } else if (minutes >= 2 && minutes <= 4) {
            return `${minutes} минуты`;
        } else {
            return `${minutes} минут`;
        }
    };

    const month = [
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
    ];

    const data = {
        labels: month.map((item) => item.toUpperCase()),
        datasets: [
            {
                data: [0, 10, 4, 20, 15, 5, 30, 4, 40, 1, 2, 3, 8, 3, 2, 6, 3],
                backgroundColor: "hsla(216, 100%, 91%, 0.1)",
                borderColor: "blue",
                pointBorderColor: "transparent",
                pointBorderWidth: 4,
                tension: 0.1,
                borderWidth: 2,
                fill: true,
                pointRadius: 0,
            },
        ],
    };

    const options: ChartOptions<"line"> = {
        plugins: {
            legend: undefined,
        },
        scales: {
            y: {
                min: 0,
                max: 40,
                ticks: {
                    stepSize: 10,
                    callback: (value: string | number) => value + "K",
                },
                grid: {
                    color: "rgba(239, 239, 239, 0.8)",
                    lineWidth: 1,
                },
            },

            x: {
                grid: {
                    color: "rgba(239, 239, 239, 0.8)",
                    lineWidth: 1,
                },
            },
        },
    };

    return (
        <Layout>
            <div className={styles.balance}>
                <div className={styles.stats}>
                    <div className={styles.left}>
                        <div className={styles.top}>
                            <Text type="h2" fz="24px">
                                Баланс
                            </Text>
                            <Text type="h2" fz="18px" color="#7D7F82">
                                За сегодня
                            </Text>
                        </div>
                        <div className={styles.chart}>
                            <div className={styles.container}>
                                <div className={styles.wrapper}>
                                    {/* <Text type="h2" color="#0064FA">
                                        Баланс
                                    </Text> */}
                                    <Text type="h3" fz="24px">
                                        {formatter.format(21000)}
                                    </Text>
                                    {/* <div className={styles.deposit}>
                                        Deposit
                                    </div> */}
                                </div>
                                <Line data={data} options={options} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.filters}>
                            <div
                                className={styles.filter}
                                style={{ paddingLeft: 24 }}
                            >
                                <Text type="p" color="#7D7F82" fz="17px">
                                    Дата
                                </Text>
                                <img src={arrowDown} alt="" />
                            </div>
                            <div
                                className={styles.filter}
                                style={{ justifyContent: "center" }}
                            >
                                <Text type="p" color="#7D7F82" fz="17px">
                                    Операция
                                </Text>
                                <img src={arrowDown} alt="" />
                            </div>
                            <div
                                className={styles.filter}
                                style={{ justifyContent: "center" }}
                            >
                                <Text type="p" color="#7D7F82" fz="17px">
                                    Сумма
                                </Text>
                                <img src={arrowDown} alt="" />
                            </div>
                            <div
                                className={styles.filter}
                                style={{ justifyContent: "flex-end" }}
                            >
                                <Text type="p" color="#7D7F82" fz="17px">
                                    Статус
                                </Text>
                                <img src={arrowDown} alt="" />
                            </div>
                        </div>
                        <div className={styles.list}>
                            {[1, 2, 3, 4].map((item) => (
                                <div className={styles.cols} key={item}>
                                    <div className={styles.col}>
                                        <Text type="p" fz="19px">
                                            24 Фев, 1994
                                        </Text>
                                    </div>
                                    <div
                                        className={`${styles.col} ${styles.center}`}
                                    >
                                        <Text
                                            type="p"
                                            fz="19px"
                                            color="#00CC5E"
                                        >
                                            Пополнение
                                        </Text>
                                    </div>
                                    <div
                                        className={`${styles.col} ${styles.center}`}
                                    >
                                        <Text type="h2" fz="19px">
                                            $520
                                        </Text>
                                    </div>
                                    <div className={styles.col}>
                                        <div className={styles.status}>
                                            <Text type="p" fz="19px">
                                                Готово
                                            </Text>
                                            <img src={circle} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={styles.nav}>
                                <Text type="h4" fz="18px" color="#7D7F82">
                                    Месячный норматив
                                </Text>
                                <img src={arrowRight} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.table}>
                    <div className={styles.tableFilters}>
                        <div
                            className={styles.tableFilter}
                            style={{ marginLeft: "36px" }}
                        >
                            <Text type="p" fz="17px" color="#7D7F82">
                                Имя Фамилия
                            </Text>
                            <img src={arrowDown} alt="" />
                        </div>
                        <div
                            className={styles.tableFilter}
                            style={{ justifyContent: "center" }}
                        >
                            <Text type="p" fz="17px" color="#7D7F82">
                                Дата Рождения
                            </Text>
                            <img src={arrowDown} alt="" />
                        </div>
                        <div
                            className={styles.tableFilter}
                            style={{ justifyContent: "center" }}
                        >
                            <Text type="p" fz="17px" color="#7D7F82">
                                Болезнь · Проблема · Недуг
                            </Text>
                            <img src={arrowDown} alt="" />
                        </div>
                        <div
                            className={styles.tableFilter}
                            style={{ justifyContent: "flex-end" }}
                        >
                            <Text type="p" fz="17px" color="#7D7F82">
                                Осталось Времени
                            </Text>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                    <ul className={styles.box}>
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <li className={styles.cols} key={i}>
                                <div className={styles.col}>
                                    <div className={styles.data}>
                                        <Text
                                            color="#7D7F82"
                                            type="p"
                                            fz="17px"
                                        >
                                            {`${i + 1}.`}
                                        </Text>
                                        <img src={man} alt="" />
                                        <div className={styles.text}>
                                            <Text type="h2" fz="19px">
                                                Яковенко А. С.
                                            </Text>
                                            <Text
                                                type="p"
                                                fz="17px"
                                                color="#B1B2B4"
                                            >
                                                Пользователь
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.col}>
                                    <Text type="p" fz="19px" position="center">
                                        24 Фев, 1994
                                    </Text>
                                </div>
                                <div
                                    className={styles.col}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        color={styles.disease}
                                        style={{
                                            backgroundColor: "#EBF3FF",
                                            padding: "12px 16px",
                                            borderRadius: 16,
                                        }}
                                    >
                                        <Text
                                            type="h3"
                                            fz="19px"
                                            color="#0064FA"
                                        >
                                            Ковид
                                        </Text>
                                    </div>
                                </div>
                                <div
                                    className={styles.col}
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <div
                                        className={styles.end}
                                        style={{ backgroundColor: "#F7E6E8" }}
                                    >
                                        <Text
                                            type="p"
                                            fz="19px"
                                            position="end"
                                            color="#D64657"
                                        >
                                            {formatMinutes(1)}
                                        </Text>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <AnimatePresence initial>
                {isOpen && (
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        sddssdsd
                    </motion.div>
                )}
            </AnimatePresence> */}
        </Layout>
    );
};

export default BalancePage;
