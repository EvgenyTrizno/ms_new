import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    ChartOptions,
    ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Layout } from "../Layout/Layout";
import {
    AdminPanelContainer,
    BlueSliderArrows,
    EmployeeData,
    EmployeeInfoCard,
    Rating,
    Search,
    WhiteContentBlock,
    Cols,
    CenterOwner,
} from "@/widgets";
import { Btn, Text } from "@/shared";
import { PC, SMALL_LAPTOP } from "@/shared/utils";

import man from "/assets/man.jpg";
import controller from "/assets/controler.svg";
import money from "/assets/money.svg";
import styles from "./CenterPage.module.scss";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

const CenterPage: FC = () => {
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
            <AdminPanelContainer>
                <Cols
                    type="custom"
                    gap={10}
                    cols={
                        PC
                            ? ["360px", "400px", "1fr"]
                            : ["256px", "269px", "1fr"]
                    }
                >
                    <EmployeeInfoCard type="clinic" />
                    <EmployeeData type="clinic" />
                    <div className={styles.center}>
                        <CenterOwner type="center" />
                        <WhiteContentBlock>
                            <div
                                className={styles.colsX2}
                                style={{ gridGap: 20, height: "100%" }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                    }}
                                >
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
                                            <Text type="p">Вся сумма</Text>
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
                                    <Btn color="#0064FA">Подробнее</Btn>
                                </div>
                                <div className={styles.colsX2}>
                                    <div className={styles.col}>
                                        <Text type="h2" fz="18px">
                                            Последнии премии
                                        </Text>
                                        <div className={styles.list}>
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                <div
                                                    className={styles.item}
                                                    key={item}
                                                >
                                                    <div
                                                        className={styles.icon}
                                                    >
                                                        <img
                                                            src={money}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <Text type="p" fz="14px">
                                                        13 апреля 2023
                                                    </Text>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.col}>
                                        <Text type="h2" fz="18px">
                                            Последнии штрафы
                                        </Text>
                                        <div className={styles.list}>
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                // <Fine key={item} />
                                                <div></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </WhiteContentBlock>
                    </div>
                </Cols>
                <div
                    className={styles.colsX2}
                    style={{ gridTemplateColumns: "770px 1fr" }}
                >
                    <WhiteContentBlock>
                        <div className={styles.text}>
                            <div className={styles.nav}>
                                <Text type="h2" fz="18px">
                                    Премии и штрафы
                                </Text>
                            </div>
                            <div className={styles.chart}>
                                <Line
                                    data={data}
                                    options={options}
                                    height="auto"
                                />
                            </div>
                        </div>
                    </WhiteContentBlock>
                    <div className={styles.block}>
                        <WhiteContentBlock>
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
                        </WhiteContentBlock>
                        <WhiteContentBlock>
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
                        </WhiteContentBlock>
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
                <WhiteContentBlock>
                    <Text type="h4">Специалисты (127)</Text>
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
                    <div className={styles.line}></div>
                    <Text type="h4">Пациенты (1321)</Text>
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
                </WhiteContentBlock>
            </AdminPanelContainer>
        </Layout>
    );
};

export default CenterPage;
