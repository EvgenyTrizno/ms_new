import { FC } from "react";
import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";

type Props = {
  value: number; // Значение в процентах
};

export const Progress: FC<PropsWithClassName<Props>> = ({ value }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.valueLine} style={{ width: `${value}%` }}>
        <div
          className={styles.value}
          style={{ width: value === 100 ? "100%" : undefined }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
};
