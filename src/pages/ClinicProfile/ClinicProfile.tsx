import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Layout } from "../Layout/Layout";
import {
    BlueSliderArrows,
    EmployeeData,
    EmployeeInfoCard,
    Rating,
    Search,
} from "@/widgets";
import { Btn, Text } from "@/shared";

import man from "/assets/man.jpg";
import arrow from "/assets/arrow-right.svg";
import controller from "/assets/controler.svg";
import styles from "./ClinicProfile.module.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const ClinicProfile: FC = () => {
    const labels = [0, 15, 30];

    const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                },
                ticks: {
                    color: "#B1B2B4",
                    font: {
                        size: 12,
                        weight: "medium",
                    },
                },
            },
            y: {
                ticks: {
                    color: "#B1B2B4",
                    callback: (val) => val + "$",
                    font: {
                        size: 12,
                        weight: "medium",
                    },
                },
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                align: "start",
                labels: {
                    boxWidth: 5,
                    boxHeight: 5,
                    usePointStyle: true,
                    borderRadius: 10,
                    boxPadding: 0,
                    useBorderRadius: true,
                    color: "#262626",
                    padding: 5,
                    font: {
                        size: 14,
                        weight: "medium",
                    },
                },
            },
            tooltip: {
                backgroundColor: "#0064FA",
                caretSize: 0,
                boxWidth: 10,
                boxHeight: 0,
                titleAlign: "center",
                padding: 12,
                usePointStyle: false,
                callbacks: {
                    afterLabel: () => {
                        return undefined;
                    },
                    beforeLabel: () => {
                        return undefined;
                    },
                    title: (tooltipItems) => {
                        return tooltipItems[0].label;
                    },
                    label: () => {
                        return "";
                    },
                    labelPointStyle: () => {
                        return undefined;
                    },
                    footer: () => {
                        return undefined;
                    },
                },
                bodyFont: {
                    size: 0,
                    lineHeight: 0,
                },
                titleFont: {
                    size: 12,
                },
            },
        },
        datasets: {},
    };

    const data: ChartData<"line"> = {
        labels,
        datasets: [
            {
                label: "Премии",
                data: [10, 30, 50, 520],
                backgroundColor: "#0064FA",
                borderColor: "#0064FA",
                pointBorderWidth: 2,
                pointBackgroundColor: "white",
                tension: 0.1,
            },
            {
                label: "Штрафы",
                data: [1, 3, 5, 5],
                backgroundColor: "#D64657",
                borderColor: "#D64657",
                pointBorderWidth: 2,
                pointBackgroundColor: "white",
                tension: 0.1,
            },
        ],
    };
    return (
        <Layout>
            <div className={styles.clinic}>
                <div className={styles.info}>
                    <EmployeeInfoCard type="clinic" />
                    <EmployeeData type="clinic" />
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
                                    <div className={styles.text}>
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
                                <Line
                                    width="100%"
                                    height="160px"
                                    data={data}
                                    options={options}
                                />
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
                    <div
                        className={styles.colsX4}
                        style={{
                            gridTemplateColumns: "repeat(4, 332px)",
                            justifyContent: "space-between",
                        }}
                    >
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
                                                width="20px"
                                                height="20px"
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
                    <BlueSliderArrows />
                </div>
            </div>
        </Layout>
    );
};

export default ClinicProfile;
