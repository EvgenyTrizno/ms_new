/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useState } from "react";
import { ChartOptions, ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { MOBILE, TABLET } from "@/shared/utils";
import { BlueArrows } from "@/shared/ui/BlueArrows";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { useStatsQuery } from "../../lib/hooks/useStatsQuery";
import { MainText } from "@/shared/ui/MainText";

import styles from "./styles.module.scss";

export const AgeStats: FC = () => {
    const [startIndex, setStartIndex] = useState(0);
    const { data: stats } = useStatsQuery();

    const count = MOBILE || TABLET ? 3 : 6;
    const labels = ["10-20", "20-30", "30-40", "40-50", "50-60", "60-70"];
    const chartData = {
        man: [
            stats?.data._10_20[0].man ?? 0,
            stats?.data._20_30[0].man ?? 0,
            stats?.data._30_40[0].man ?? 0,
            stats?.data._40_50[0].man ?? 0,
            stats?.data._50_60[0].man ?? 0,
            stats?.data._60_70[0].man ?? 0,
        ],
        woman: [
            stats?.data._10_20[0].woman ?? 0,
            stats?.data._20_30[0].woman ?? 0,
            stats?.data._30_40[0].woman ?? 0,
            stats?.data._40_50[0].woman ?? 0,
            stats?.data._50_60[0].woman ?? 0,
            stats?.data._60_70[0].woman ?? 0,
        ],
    };

    const generateData = useCallback(
        (sex: "man" | "woman") => {
            const selectedData =
                stats && chartData[sex].slice(startIndex, startIndex + count);

            return selectedData ? selectedData : [];
        },
        [stats, startIndex]
    );

    const generateLabels = useCallback(() => {
        const selectedData = labels.slice(startIndex, startIndex + count);

        return selectedData;
    }, [stats, startIndex]);

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
        labels: generateLabels(),
        datasets: [
            {
                label: "Женщицы",
                data: generateData("woman"),
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
                data: generateData("man"),
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
            <BlueArrows
                prev={() => setStartIndex((prev) => prev - 1)}
                next={() => setStartIndex((next) => next + 1)}
            />
        </WhiteContentBlock>
    );
};
