import { FC } from "react";
import { Line } from "react-chartjs-2";

import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { ChartOptions, ChartData } from "chart.js";

export const DownloadsChart: FC = () => {
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
        <WhiteContentBlock>
            <Line
                width="100%"
                height="160px"
                data={dataLine}
                options={optionsLine}
            />
        </WhiteContentBlock>
    );
};
