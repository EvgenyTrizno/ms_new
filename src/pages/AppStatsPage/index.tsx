import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ChartOptions,
    ChartData,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Cols } from "@/shared/ui/Cols";
import { BlueBox } from "@/shared/ui/BlueBox";
import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import {
    AdminPanelContainer,
    BlueSliderArrows,
    Inner,
    MainText,
    UserReport,
} from "@/widgets";
import { LAPTOP } from "@/shared/utils";
import { PatientDiseases } from "./ui/PatientDiseases";
import { AgeStats } from "./ui/AgeStats";

import playmarket from "/assets/playmarket.svg";
import appstore from "/assets/appstore.svg";
import styles from "./styles.module.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    PointElement,
    LineElement
);

const AppStatsPage: FC = () => {
    const labelsLine = [0, 15, 30];

    const optionsLine: ChartOptions<"line"> = {
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

    const dataLine: ChartData<"line"> = {
        labels: labelsLine,
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
            <AdminPanelContainer>
                <Cols type="auto" gap={10}>
                    <PatientDiseases />
                    {/* <AgeStats /> */}
                </Cols>
                <Cols type="custom" gap={10} cols={["1fr", "333px"]}>
                    <AgeStats />
                    <div className={styles.stats}>
                        <WhiteContentBlock>
                            <div className={styles.text}>
                                <Text type="h4">Посещений за сутки</Text>
                                <Text type="h2" fz="24px">
                                    13,856
                                </Text>
                            </div>
                        </WhiteContentBlock>
                        <WhiteContentBlock>
                            <div className={styles.text}>
                                <Text type="h4">
                                    Зарегестрированные за сутки
                                </Text>
                                <Text type="h2" fz="24px">
                                    13,856
                                </Text>
                            </div>
                        </WhiteContentBlock>
                        <WhiteContentBlock>
                            <div className={styles.text}>
                                <Text type="h4">
                                    Удаленные аккаунты за сутки
                                </Text>
                                <Text type="h2" fz="24px">
                                    13,856
                                </Text>
                            </div>
                        </WhiteContentBlock>
                    </div>
                </Cols>
                <div
                    className={styles.cols}
                    style={{
                        gridTemplateColumns: LAPTOP
                            ? "450px 1fr 270px"
                            : "604px 1fr 270px",
                    }}
                >
                    <WhiteContentBlock>
                        <div className={styles.block}>
                            <MainText text="Экстренные вызовы за сутки" />
                            <div className={styles.extra}>
                                <Cols type="auto" gap={10}>
                                    <BlueBox>
                                        <div className={styles.stats}>
                                            <Text type="h4">
                                                Медианное значение
                                            </Text>
                                            <Text type="h2" fz="24px">
                                                16
                                            </Text>
                                        </div>
                                    </BlueBox>
                                    <BlueBox>
                                        <div className={styles.stats}>
                                            <Text type="h4">
                                                За последние сутки
                                            </Text>
                                            <Text
                                                type="h2"
                                                fz="24px"
                                                color="#D64657"
                                            >
                                                32
                                            </Text>
                                        </div>
                                    </BlueBox>
                                </Cols>
                            </div>
                            <Text type="h2" fz="18px">
                                Обращение в тех.поддержку
                            </Text>
                            <div className={styles.extra}>
                                <Cols type="auto" gap={10}>
                                    <BlueBox>
                                        <div className={styles.stats}>
                                            <Text type="h4">
                                                Медианное значение
                                            </Text>
                                            <Text type="h2" fz="24px">
                                                16
                                            </Text>
                                        </div>
                                    </BlueBox>
                                    <BlueBox>
                                        <div className={styles.stats}>
                                            <Text type="h4">
                                                За последние сутки
                                            </Text>
                                            <Text
                                                type="h2"
                                                fz="24px"
                                                color="#D64657"
                                            >
                                                32
                                            </Text>
                                        </div>
                                    </BlueBox>
                                </Cols>
                            </div>
                            <BlueSliderArrows />
                        </div>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <Line
                            width="100%"
                            height="160px"
                            data={dataLine}
                            options={optionsLine}
                        />
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <div className={styles.downloads}>
                            <MainText text="За последние сутки" />
                            <BlueBox>
                                <div className={styles.rowText}>
                                    <img src={appstore} alt="" />
                                    <Text type="h2" fz="20px">
                                        App Store
                                    </Text>
                                </div>
                                <div className={styles.count}>
                                    <Text type="h2" fz="36px" position="center">
                                        2163
                                    </Text>
                                </div>
                            </BlueBox>
                            <BlueBox>
                                <div className={styles.rowText}>
                                    <img src={playmarket} alt="" />
                                    <Text type="h2" fz="20px">
                                        Google Play
                                    </Text>
                                </div>
                                <div className={styles.count}>
                                    <Text type="h2" fz="36px" position="center">
                                        2163
                                    </Text>
                                </div>
                            </BlueBox>
                        </div>
                    </WhiteContentBlock>
                </div>
                <div className={styles.cols}>
                    <WhiteContentBlock>
                        <div className={styles.text}>
                            <MainText
                                text="Часто задаваемые вопросы тех.поддержке у
                                пользователей"
                            />
                            <div className={styles.questions}>
                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        className={styles.blueBlock}
                                        key={item}
                                    >
                                        <div className={styles.question}>
                                            <Text type="h4">
                                                Какие принимаются методы оплаты?
                                            </Text>
                                            <Text type="h2" fz="24px">
                                                217
                                            </Text>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <div className={styles.text}>
                            <MainText
                                text="Часто задаваемые вопросы в тех.поддержке у
                                сотрудников"
                            />
                            <div className={styles.questions}>
                                {[1, 2, 3, 4].map((item) => (
                                    <div
                                        className={styles.blueBlock}
                                        key={item}
                                    >
                                        <div className={styles.question}>
                                            <Text type="h4">
                                                Какие принимаются методы оплаты?
                                            </Text>
                                            <Text type="h2" fz="24px">
                                                217
                                            </Text>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </WhiteContentBlock>
                </div>
                <WhiteContentBlock>
                    <Inner>
                        <MainText text="Жалобы пользователей" />
                        <Cols type="auto" gap={40} count={4}>
                            {[1, 2, 3, 4].map((item) => (
                                <UserReport key={item} />
                            ))}
                        </Cols>
                        <BlueSliderArrows />
                    </Inner>
                </WhiteContentBlock>
                <WhiteContentBlock>
                    <div className={styles.nav}>
                        <MainText text="Отправка SMS" />
                    </div>
                    <Cols type="auto" gap={12} count={2}>
                        <BlueBox>
                            <Text type="h4">Потрачено за регистрации</Text>
                            <div className={styles.count}>
                                <Text type="h2" fz="36px" position="center">
                                    94 SMS
                                </Text>
                                <Text
                                    type="h4"
                                    fz="20px"
                                    color="#7D7F82"
                                    position="center"
                                >
                                    9.4$
                                </Text>
                            </div>
                        </BlueBox>
                        <BlueBox>
                            <Text type="h4">Потрачено за восстановления</Text>
                            <div className={styles.count}>
                                <Text type="h2" fz="36px" position="center">
                                    94 SMS
                                </Text>
                                <Text
                                    type="h4"
                                    fz="20px"
                                    color="#7D7F82"
                                    position="center"
                                >
                                    9.4$
                                </Text>
                            </div>
                        </BlueBox>
                    </Cols>
                </WhiteContentBlock>
            </AdminPanelContainer>
        </Layout>
    );
};

export default AppStatsPage;
