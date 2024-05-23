import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { WidgetWrapper } from "../WidgetWrapper";
import styles from "./styles.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      data: [4, 5, 6, 6, 6, 6],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
      borderWidth: 6,
      borderRadius: 10,
      cutout: 60,
    },
  ],
};

const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const PurposeVisit = () => {
  return (
    <WidgetWrapper title="Цель посещения">
      <div className={styles.wrapper}>
        <div className={styles.graph}>
          <Doughnut data={data} options={options} />
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.circle}></div>
            <p>Сотрудничество 4%</p>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}></div>
            <p>Сотрудничество 4%</p>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}></div>
            <p>Сотрудничество 4%</p>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}></div>
            <p>Сотрудничество 4%</p>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}></div>
            <p>Сотрудничество 4%</p>
          </div>
          <div className={styles.item}>
            <div className={styles.circle}></div>
            <p>Сотрудничество 4%</p>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
