/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { BlueArrows } from "@/shared/ui/BlueArrows";
import { useStatsQuery } from "@/pages/AppStatsPage/lib/hooks/useStatsQuery";
import { MainText } from "@/shared/ui/MainText";
import { MOBILE, TABLET } from "@/shared/utils";

import styles from "./styles.module.scss";

export const PatientDiseases: FC = () => {
    const [startIndex, setStartIndex] = useState(0);
    const { data: stats } = useStatsQuery();

    const count = MOBILE || TABLET ? 3 : 4;

    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
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
                color: "#3C3D3E",
                anchor: "end",
                font: {
                    size: 16,
                    weight: 600,
                },
                align: "top",
            },
        },
        layout: {
            padding: {
                top: 40,
            },
        },
    };

    const generateLabels = useCallback(() => {
        const labels: string[] = [];

        stats &&
            stats.data.diseases
                .slice(startIndex, startIndex + count)
                .forEach((item) => {
                    labels.push(
                        item.name.length > 15
                            ? `${item.name.slice(0, 15)}...`
                            : item.name
                    );
                });

        return labels;
    }, [stats, startIndex]);

    const generateData = useCallback(() => {
        const selectedData =
            stats && stats.data.diseases.slice(startIndex, startIndex + count);

        console.log(selectedData);

        return selectedData ? selectedData.map((item) => item.count) : [];
    }, [stats, startIndex]);

    const data: ChartData<"bar"> = {
        labels: generateLabels(),
        datasets: [
            {
                data: generateData(),
                backgroundColor: ["#0064FA"],
                borderRadius: 12,
                barThickness: 44,
                borderSkipped: false,
            },
        ],
    };

    return (
        <WhiteContentBlock>
            <MainText text="Болезни пациентов" />
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
