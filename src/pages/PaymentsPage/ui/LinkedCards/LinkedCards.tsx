import { FC } from "react";
import styles from "./LinkedCards.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

export const LinkedCards: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <div className={styles.cards}>
        <div className={styles.cardsItem}>
          <span>Сбер **** 2933</span>
          <svg width="34" height="20" viewBox="0 0 34 20" fill="none">
            <circle opacity="0.6" cx="24" cy="10" r="10" fill="#D9D9D9" />
            <circle cx="10" cy="10" r="10" fill="white" />
          </svg>
        </div>
      </div>

      <div className={styles.add}>
        <svg viewBox="0 0 72 73" fill="none">
          <rect
            x="0.75"
            y="0.75"
            width="70.5"
            height="71.5"
            rx="11.25"
            stroke="#D6E7FF"
            strokeWidth="1.5"
            strokeDasharray="8 8"
          />
          <path
            d="M36 45V37M36 29V37M36 37H28M36 37H44"
            stroke="#D6E7FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
