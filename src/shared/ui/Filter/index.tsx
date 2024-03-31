import { FC } from "react";
import { IFilter } from "./types";

import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const Filter: FC<PropsWithClassName<IFilter>> = ({
  className,
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
    <div className={cn(styles.container, className)}>
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
