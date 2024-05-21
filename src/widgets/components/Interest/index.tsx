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
import styles from "./styles.module.scss";
import { InfoBlock } from "./ui/InfoBlock";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const Interest: FC<PropsWithClassName> = ({ className }) => {
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
        ticks: {
          callback: function (value: any) {
            return value + "%";
          },
          stepSize: 20, // Use stepSize to control the interval between ticks
          max: 100,
          min: 20,
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

  const labels = ["Январь", "Февраль", "Март", "Апрель", "Май"];

  const data = {
    labels,
    datasets: [
      {
        data: [0, 20, 40, 30, 100],
        borderColor: "#0064FA",
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <WidgetWrapper className={cn(className)} title="Заинтересованность">
      <div className={styles.wrapper}>
        <div className={styles.graph}>
          <Line options={options} data={data} />
        </div>

        <div className={styles.info}>
          <div className={styles.list}>
            <InfoBlock />
            <InfoBlock />
            <InfoBlock />
            <InfoBlock />
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
