import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { WidgetWrapper } from "../WidgetWrapper";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const Visits: FC<PropsWithClassName> = ({ className }) => {
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.2,
      },
    },

    scales: {
      y: {
        border: {
          display: false,
        },
      },

      x: {
        grid: {
          display: false,
        },

        border: {
          display: false,
        },
      },
    },
  };

  const labels = [1, 2, 3, 4, 5, 6, 7];

  const data = {
    labels,
    datasets: [
      {
        data: [400, 800, 700, 1000, 600, 800, 1000, 500, 300, 500, 700, 300, 500, 300, 400],
        borderColor: "#0064FA",
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <WidgetWrapper className={cn(className)} title="Посещения">
      <Line options={options} data={data} />
    </WidgetWrapper>
  );
};
