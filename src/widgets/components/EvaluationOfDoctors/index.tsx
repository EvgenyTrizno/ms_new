import { WidgetWrapper } from "../WidgetWrapper";
import styles from "./styles.module.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const EvaluationOfDoctors = () => {
  const data: any = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "bar",
        label: "Bar Dataset",
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "Line Dataset",
        data: [70, 60, 50, 40, 30, 20, 10],
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  return (
    <WidgetWrapper
      title="Оценка врачей"
      headerRight={
        <div className={styles.headerRight}>
          <div className={styles.headerRightItem}>
            <div className={styles.headerRightItemTitle}>
              <div className={styles.circle}></div>
              <h6>Средняя оценка записи</h6>
            </div>

            <p className={styles.headerRightItemText}>6.5</p>
          </div>

          <div className={styles.headerRightItem}>
            <div className={styles.headerRightItemTitle}>
              <div className={styles.circle}></div>
              <h6>Средняя оценка записи</h6>
            </div>

            <p className={styles.headerRightItemText}>6.5</p>
          </div>
        </div>
      }
    >
      <Bar data={data} options={options} />
    </WidgetWrapper>
  );
};
