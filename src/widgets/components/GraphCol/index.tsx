import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

export const GraphCol: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <p className={styles.value}>55%</p>

      <div className={styles.column} style={{ height: `calc(${55} * 2px)` }}></div>

      <p className={styles.title}>Помогло на 80%</p>
    </div>
  );
};
