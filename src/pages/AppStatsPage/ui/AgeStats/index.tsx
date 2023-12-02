import { FC } from "react";
import { ChartOptions, ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { MainText } from "@/widgets";
import { useStatsQuery } from "../../lib/hooks/useStatsQuery";

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

    // const groupedBarChart = (data: AxiosResponse) => {
    //     // Преобразование данных в формат, подходящий для библиотеки Chart.js
    //     const transformedData = Object.keys(data).map((key) => {
    //         const ageRange = key.substring(1).split("_");
    //         const label = `Группа ${ageRange.join("-")}`;
    //         const values = data[key][0];

    //         return {
    //             label,
    //             backgroundColor: "rgba(75,192,192,0.2)",
    //             borderColor: "rgba(75,192,192,1)",
    //             borderWidth: 1,
    //             hoverBackgroundColor: "rgba(75,192,192,0.4)",
    //             hoverBorderColor: "rgba(75,192,192,1)",
    //             data: [values.man, values.woman], // Количество мужчин и женщин для каждой группы
    //         };
    //     });
    // };

    const data: ChartData<"bar"> = {
        labels: ["10-20", "20-30", "30-40", "40-50", "50-60", "60-70"],
        datasets: [
            {
                data: [2, 4, 6],
                backgroundColor: ["#D64657"],
                borderRadius: {
                    bottomLeft: 12,
                    bottomRight: 12,
                },
                barThickness: 44,
                borderSkipped: false,
            },
            {
                data: [1, 3, 5],
                backgroundColor: ["#0064FA"],
                borderRadius: {
                    topLeft: 12,
                    topRight: 12,
                },
                barThickness: 44,
                borderSkipped: false,
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
