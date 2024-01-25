import { FC } from "react";
import { IFilter } from "./types";

import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";

export const Filter: FC<IFilter> = ({
  data,
  icons,
  setIsSelect,
  isSelect,
}) => {
  const { user } = useAuth();

  const active = `${styles.item} ${styles.active}`;
  const activeRed = `${styles.item} ${styles.activeRed}`;

  const sick = user && user.disease.length;

  return (
    <div
      className={styles.container}
    >
      {data.map((item, i) => (
        <div
          className={`${
            isSelect === item && sick
              ? activeRed
              : isSelect === item && !sick
              ? active
              : styles.item
          }`}
          key={item}
          onClick={() => {
            setIsSelect(item);
          }}
        >
          <span>{item}</span>
          {item && icons && icons[i]}
        </div>
      ))}
    </div>
  );
};
