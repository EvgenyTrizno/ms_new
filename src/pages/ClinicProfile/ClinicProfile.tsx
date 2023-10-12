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
    AdminPanelContainer,
    BlueSliderArrows,
    Cols,
    CustomMobileHeader,
    EmployeeData,
    EmployeeInfoCard,
    MobileContainer,
    Rating,
    Search,
    WhiteContentBlock,
} from "@/widgets";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP } from "@/shared/utils";
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
            {MOBILE && (
                <CustomMobileHeader
                    back
                    text="Профиль клиники"
                ></CustomMobileHeader>
            )}
            <MobileContainer>
                <AdminPanelContainer>
                    <Cols
                        gap={LAPTOP ? 8 : 10}
                        type="custom"
                        cols={
                            PC
                                ? ["360px", "400px", "1fr"]
                                : LAPTOP
                                ? ["288px", "330px", "1fr"]
                                : MOBILE
                                ? ["auto"]
                                : ["256px", "269px", "1fr"]
                        }
                    >
                        <EmployeeInfoCard type="clinic" />
                        <EmployeeData type="clinic" />
                        <div className={styles.clinic}>
                            <WhiteContentBlock>
                                <div className={styles.admin}>
                                    <div className={styles.nav}>
                                        <Text
                                            type="h2"
                                            fz={
                                                MOBILE || LAPTOP
                                                    ? "17px"
                                                    : "20px"
                                            }
                                        >
                                            Администратор
                                        </Text>
                                        <img src={arrow} alt="" />
                                    </div>
                                    <div className={styles.data}>
                                        <img src={man} alt="" />
                                        <div
                                            className={styles.text}
                                            style={{
                                                gridGap:
                                                    LAPTOP || SMALL_LAPTOP
                                                        ? 6
                                                        : 10,
                                            }}
                                        >
                                            <Text
                                                type="h2"
                                                fz={
                                                    MOBILE || LAPTOP
                                                        ? "15px"
                                                        : "18px"
                                                }
                                            >
                                                Алексеев Эрнест Владимирович
                                            </Text>
                                            <div
                                                className={styles.text}
                                                style={{ gridGap: 3 }}
                                            >
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        MOBILE
                                                            ? "13px"
                                                            : LAPTOP
                                                            ? "15px"
                                                            : "16px"
                                                    }
                                                >
                                                    Номер телефона
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz={
                                                        MOBILE || LAPTOP
                                                            ? "14px"
                                                            : "14px"
                                                    }
                                                >
                                                    +7(923)-123-45-67
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </WhiteContentBlock>
                            <WhiteContentBlock>
                                <div className={styles.stats}>
                                    <div className={styles.text}>
                                        <Text
                                            type="h2"
                                            fz={LAPTOP ? "17px" : "18px"}
                                        >
                                            Количество посещений за день
                                        </Text>
                                        <div className={styles.row}>
                                            <div className={styles.sumBlock}>
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        LAPTOP ? "26px" : "28px"
                                                    }
                                                >
                                                    86
                                                </Text>
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        LAPTOP ? "15px" : "16px"
                                                    }
                                                >
                                                    Онлайн
                                                </Text>
                                            </div>
                                            <div className={styles.sumBlock}>
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        LAPTOP ? "26px" : "28px"
                                                    }
                                                >
                                                    86
                                                </Text>
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        LAPTOP ? "15px" : "16px"
                                                    }
                                                >
                                                    Оффлайн
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </WhiteContentBlock>
                            <WhiteContentBlock>
                                <div className={styles.text}>
                                    <Text
                                        type="h2"
                                        fz={LAPTOP ? "17px" : "18px"}
                                    >
                                        Записи
                                    </Text>
                                    <Cols
                                        type="auto"
                                        gap={LAPTOP ? 8 : 10}
                                        count={2}
                                    >
                                        <div className={styles.sumBlock}>
                                            <Text
                                                type="h2"
                                                fz={MOBILE ? "24px" : "28px"}
                                            >
                                                86
                                            </Text>
                                            <div
                                                className={styles.text}
                                                style={{ gridGap: 0 }}
                                            >
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        MOBILE ? "14px" : "16px"
                                                    }
                                                >
                                                    Отменено
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz={
                                                        MOBILE ? "12px" : "14px"
                                                    }
                                                >
                                                    Записей
                                                </Text>
                                            </div>
                                        </div>
                                        <div className={styles.sumBlock}>
                                            <Text
                                                type="h2"
                                                fz={MOBILE ? "24px" : "28px"}
                                            >
                                                86
                                            </Text>
                                            <div
                                                className={styles.text}
                                                style={{ gridGap: 0 }}
                                            >
                                                <Text
                                                    type="h2"
                                                    fz={
                                                        MOBILE ? "14px" : "16px"
                                                    }
                                                >
                                                    Перенесено
                                                </Text>
                                                <Text
                                                    type="p"
                                                    fz={
                                                        MOBILE ? "12px" : "14px"
                                                    }
                                                >
                                                    Записей
                                                </Text>
                                            </div>
                                        </div>
                                    </Cols>
                                </div>
                            </WhiteContentBlock>
                        </div>
                    </Cols>
                    <Cols
                        type="custom"
                        gap={LAPTOP ? 8 : 10}
                        cols={MOBILE ? [] : ["360px", "1fr"]}
                    >
                        <WhiteContentBlock>
                            <Text type="h2" fz={LAPTOP ? "17px" : "18px"}>
                                Баланс на счету
                            </Text>
                            <div className={styles.bal}>
                                <div className={styles.sum}>
                                    <Text type="p" fz={LAPTOP ? "14px" : ""}>
                                        За день
                                    </Text>
                                    <div
                                        className={`${styles.sumBlock} ${styles.mt5}`}
                                    >
                                        <Text
                                            type="h2"
                                            fz={LAPTOP ? "26px" : "28px"}
                                        >
                                            $
                                        </Text>
                                        <Text type="p" fz="20px">
                                            1,567
                                        </Text>
                                    </div>
                                </div>
                                <div className={styles.sum}>
                                    <Text type="p" fz={LAPTOP ? "14px" : ""}>
                                        Вся сумма
                                    </Text>
                                    <div
                                        className={`${styles.sumBlock} ${styles.mt5}`}
                                    >
                                        <Text
                                            type="h2"
                                            fz={LAPTOP ? "26px" : "28px"}
                                        >
                                            $
                                        </Text>
                                        <Text type="h2" fz="20px">
                                            42,567
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </WhiteContentBlock>
                        <WhiteContentBlock>
                            <div className={styles.text}>
                                <div className={styles.nav}>
                                    <Text
                                        type="h2"
                                        fz={LAPTOP ? "17px" : "18px"}
                                    >
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
                        </WhiteContentBlock>
                    </Cols>
                    <div className={styles.searchContainer}>
                        <Search
                            placeholder="Поиск специалиста или пациента"
                            height={LAPTOP ? "37px" : ""}
                        />
                        {PC || LAPTOP || SMALL_LAPTOP ? (
                            <Btn
                                color="#0064FA"
                                fz="14px"
                                width="133px"
                                br={LAPTOP ? "9px" : ""}
                                height={LAPTOP ? "37px" : "48px"}
                                padding={LAPTOP ? "10px 18px" : "14px 18px"}
                            >
                                <div className={styles.filter}>
                                    <img src={controller} alt="" />
                                    <Text
                                        type="p"
                                        fz={LAPTOP ? "15px" : "14px"}
                                    >
                                        Фильтры
                                    </Text>
                                </div>
                            </Btn>
                        ) : (
                            <Btn
                                width="48px"
                                height="48px"
                                color="#0064FA"
                                padding="14px"
                            >
                                <img src={controller} alt="" />
                            </Btn>
                        )}
                    </div>
                    <WhiteContentBlock>
                        <div style={{ marginBottom: 12 }}>
                            <Text type="h4">Специалисты (127)</Text>
                        </div>
                        <Cols
                            type="custom"
                            gap={LAPTOP ? 8 : 10}
                            cols={
                                PC || LAPTOP
                                    ? ["332px", "332px", "332px", "332px"]
                                    : MOBILE
                                    ? []
                                    : ["252px", "252px", "252px", "252px"]
                            }
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                (item) => (
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
                                                        gap={
                                                            LAPTOP
                                                                ? "4px"
                                                                : "5px"
                                                        }
                                                        width="20px"
                                                        height="20px"
                                                    />
                                                    <div
                                                        className={styles.more}
                                                    >
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
                                )
                            )}
                        </Cols>
                        <BlueSliderArrows />
                    </WhiteContentBlock>
                </AdminPanelContainer>
            </MobileContainer>
        </Layout>
    );
};

export default ClinicProfile;
