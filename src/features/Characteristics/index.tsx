import { FC } from "react";
import styles from "./styles.module.scss";

type Characteristic = {
  key: string;
  value: string;
};

type Props = {
  data: Characteristic[];
};

export const Characteristics: FC<Props> = ({ data }) => {
  return (
    <div className={styles.list}>
      {data.map((el, idx) => {
        return (
          <div className={styles.item} key={idx}>
            <p>{el.key} </p>
            <span>{el.value}</span>
          </div>
        );
      })}
    </div>
  );
};
