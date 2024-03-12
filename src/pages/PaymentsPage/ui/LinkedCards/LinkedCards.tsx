import { FC } from "react";
import styles from "./LinkedCards.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { Link } from "react-router-dom";

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

      <Link className={styles.add} to="/add-card">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 25V13M13 1V13M13 13H1M13 13H25"
            stroke="#0064FA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};
