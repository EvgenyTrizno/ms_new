import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    ChartOptions,
    ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Layout } from "../Layout/Layout";
import { Circle, EmployeeData, EmployeeInfoCard, Fine } from "@/widgets";
import { Btn, Text } from "@/shared";

import styles from "./EmployeeProfilePage.module.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const EmployeeProfilePage: FC = () => {
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
                beginAtZero: true,
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 50,
                    color: "#B1B2B4",
                    callback: (val) => val + "%",
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
                display: false,
            },
            title: {
                display: false,
            },
        },
    };

    const labels = [1, 15, 30];

    const data: ChartData<"line"> = {
        labels,
        datasets: [
            {
                fill: false,
                label: "Dataset 2",
                data: [0, 10, 50, 10, 90, 60],
                borderColor: "#0064FA",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                pointStyle: false,
                tension: 0.5,
            },
        ],
    };

    const myPlugin = {
        id: "customShadow",
        beforeDraw: (chart: ChartJS) => {
            const ctx = chart.ctx;
            ctx.save();

            const originalLineDraw = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = "rgba(0, 100, 250, 0.25)";
                ctx.shadowBlur = 5;
                ctx.shadowOffsetX = 4;
                ctx.shadowOffsetY = 4;
                // eslint-disable-next-line prefer-rest-params
                originalLineDraw.apply(this, arguments as any);
                ctx.restore();
            };
        },
    };

    ChartJS.register(myPlugin);

    return (
        <Layout>
            <div className={styles.profile}>
                <div className={styles.info}>
                    <EmployeeInfoCard type="employee" />
                    <EmployeeData type="employee" />
                    <div className={styles.block}>
                        <Text type="h2" fz="18px">
                            Опыт работы
                        </Text>
                        <div className={styles.skills}>
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div className={styles.box} key={item}>
                                    <div className={styles.row}>
                                        <svg
                                            width="51"
                                            height="50"
                                            viewBox="0 0 51 50"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_798_25873)">
                                                <path
                                                    d="M0.333252 0H50.3333V50H0.333252V0Z"
                                                    fill="#F7DF1E"
                                                />
                                                <path
                                                    d="M13.4804 41.785L17.3066 39.4693C18.0449 40.7781 18.7164 41.8855 20.3271 41.8855C21.871 41.8855 22.8447 41.2816 22.8447 38.9324V22.9562H27.5433V38.9988C27.5433 43.8654 24.6906 46.0807 20.5285 46.0807C16.7697 46.0807 14.5878 44.134 13.4802 41.7846M30.0955 41.2814L33.9212 39.0664C34.9285 40.7111 36.2375 41.9193 38.5531 41.9193C40.5001 41.9193 41.7416 40.9459 41.7416 39.6033C41.7416 37.9924 40.4662 37.4217 38.3181 36.4822L37.1437 35.9783C33.7537 34.5355 31.505 32.723 31.505 28.8969C31.505 25.3727 34.19 22.6875 38.3855 22.6875C41.3726 22.6875 43.5207 23.7281 45.0644 26.4467L41.4058 28.7963C40.6001 27.3531 39.7279 26.7826 38.3853 26.7826C37.0091 26.7826 36.1365 27.6553 36.1365 28.7963C36.1365 30.2059 37.0091 30.7768 39.0228 31.6494L40.1974 32.1527C44.1916 33.8646 46.4402 35.6098 46.4402 39.5363C46.4402 43.7656 43.1175 46.0812 38.6537 46.0812C34.2906 46.0812 31.4712 44.0004 30.0953 41.2816"
                                                    fill="black"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_798_25873">
                                                    <rect
                                                        width="50"
                                                        height="50"
                                                        fill="white"
                                                        transform="translate(0.333252)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className={styles.text}>
                                            <Text type="h4">Javascript</Text>
                                            <Text type="p" fz="14px">
                                                6 лет
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className={styles.colsX2}
                            style={{ gridGap: 16, height: "100%" }}
                        >
                            <div
                                className={styles.text}
                                style={{ gridGap: 10 }}
                            >
                                <Text type="h2" fz="18px">
                                    Собеседование
                                </Text>
                                <div
                                    className={`${styles.box} ${styles.boxFlex}`}
                                >
                                    <Text type="p">
                                        С задачами справился на
                                    </Text>
                                    <div className={styles.pie}>
                                        <Circle
                                            percent={50}
                                            circleColor="white"
                                            strokeWidth={20}
                                            size={175}
                                            textColor="#000"
                                            percentColor="rgba(0, 204, 94, 0.70)"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={styles.text}
                                style={{ gridGap: 10 }}
                            >
                                <Text type="h2" fz="18px">
                                    Последние штрафы
                                </Text>
                                <div
                                    className={`${styles.box} ${styles.boxFlex}`}
                                >
                                    <div className={styles.wrapper}>
                                        <div className={styles.fines}>
                                            <Fine />
                                            <Fine />
                                        </div>
                                        <Btn color="#0064FA">Все штрафы</Btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.colsX2}
                    style={{ gridTemplateColumns: "342px 1fr" }}
                >
                    <div className={styles.box}>
                        <Text type="h2" fz="18px">
                            Паспортные данные
                        </Text>
                        <img src="" alt="pasport" className={styles.pasport} />
                        <div
                            className={styles.text}
                            style={{ marginBottom: 16 }}
                        >
                            <Text type="h4">Серия паспорта</Text>
                            <Text type="p">60 19 767612</Text>
                        </div>
                        <Btn color="#0064FA">Запросить новое фото</Btn>
                    </div>
                    <div className={styles.box}>
                        <Text type="h2" fz="18px">
                            Показатели выполнения работы
                        </Text>
                        <div className={styles.chart}>
                            <Line
                                options={options}
                                data={data}
                                height="550px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EmployeeProfilePage;
