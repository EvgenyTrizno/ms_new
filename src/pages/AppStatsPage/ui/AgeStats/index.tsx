import { FC } from "react";
import { ChartOptions, ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { useStatsQuery } from "../../lib/hooks/useStatsQuery";
import { MainText } from "@/shared/ui/MainText/MainText";

import styles from "./styles.module.scss";

export const AgeStats: FC = () => {
    const { data: stats } = useStatsQuery();

    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                position: "bottom",
                ticks: {
                    minRotation: 0,
                    maxRotation: 0,
                    autoSkip: false,
                    color: "#3C3D3E",
                    font: {
                        size: 16,
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
            y: {
                stacked: true,
                display: false,
                ticks: {
                    display: false,
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
            datalabels: {
                display: true,
                color: "#fff",
                font: {
                    size: 16,
                    weight: 600,
                },
                align: "center",
            },
        },
        layout: {
            padding: {
                top: 40,
            },
        },
    };

    const data: ChartData<"bar"> = {
        labels: ["10-20", "20-30", "30-40", "40-50", "50-60", "60-70"],
        datasets: [
            {
                label: "Женщицы",
                data: [
                    stats?.data._10_20[0].woman ?? 0,
                    stats?.data._20_30[0].woman ?? 0,
                    stats?.data._30_40[0].woman ?? 0,
                    stats?.data._40_50[0].woman ?? 0,
                    stats?.data._50_60[0].woman ?? 0,
                    stats?.data._60_70[0].woman ?? 0,
                ],
                backgroundColor: ["#D64657"],
                borderRadius: {
                    bottomLeft: 12,
                    bottomRight: 12,
                },
                barThickness: 44,
                borderSkipped: false,
                minBarLength: 0,
            },
            {
                label: "Мужчины",
                data: [
                    stats?.data._10_20[0].man ?? 0,
                    stats?.data._20_30[0].man ?? 0,
                    stats?.data._30_40[0].man ?? 0,
                    stats?.data._40_50[0].man ?? 0,
                    stats?.data._50_60[0].man ?? 0,
                    stats?.data._60_70[0].man ?? 0,
                ],
                backgroundColor: ["#0064FA"],
                borderRadius: {
                    topLeft: 12,
                    topRight: 12,
                },
                barThickness: 44,
                borderSkipped: false,
                minBarLength: 0,
            },
        ],
    };
    return (
        <WhiteContentBlock>
            <MainText text="Возрастные группы пользователей" />
            <div className={styles.chart}>
                <Bar
                    options={options}
                    data={data}
                    plugins={[ChartDataLabels]}
                />
            </div>
        </WhiteContentBlock>
    );
};
