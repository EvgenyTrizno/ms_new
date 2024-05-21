import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "clsx";
import { PropsWithClassName } from "@/shared/types";

export const InfoBlock: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <div className={styles.header}>
        <div style={{ width: "50px" }}></div>
        <div className={styles.headerRight}>
          <div className={styles.changeWrapper}>
            <div
              className={cn(styles.change, {
                [styles.up]: true,
                [styles.fall]: false,
              })}
            >
              <p className={styles.changeValue}>+4,5%</p>
              <img
                className={styles.changeArr}
                src="/assets/arrow-top-green.svg"
                alt="top"
              />
            </div>

            <p className={styles.percent}>60%</p>
          </div>
        </div>
        
      </div>

      
      <p className={styles.title}>Заинтересованность</p>
    </div>
  );
};
