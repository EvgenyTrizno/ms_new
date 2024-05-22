import { FC } from "react";
import { WidgetWrapper } from "../WidgetWrapper";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const getGradient = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if(!ctx) return;
    
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 100, 250, 0.15)');
    gradient.addColorStop(1, 'rgba(0, 100, 250, 0)');

    return gradient;
}

export const Views: FC<PropsWithClassName> = ({ className }) => {
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
        grid: {
          display: false,
        },

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

  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const data = {
    labels,
    datasets: [
      {
        data: [0, 400, 800, 1000, 600, 700, 600, 900, 400, 600],
        borderColor: "#0064FA",
        borderWidth: 0.5,
        fill: true, 
        backgroundColor: getGradient()
      },
    ],
  };

  return (
    <WidgetWrapper className={cn(className)} title="Просмотры">
      <Line options={options} data={data} />
    </WidgetWrapper>
  );
};
