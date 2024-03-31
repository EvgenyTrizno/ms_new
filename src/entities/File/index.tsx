import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "clsx";

export const File: FC<PropsWithClassName> = ({ className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.header}>
        <img src="/assets/file-1.png" alt="file" />

        <div className={styles.moreBtn}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="2" fill="#B1B2B4" />
            <circle cx="10" cy="3" r="2" fill="#B1B2B4" />
            <circle cx="10" cy="17" r="2" fill="#B1B2B4" />
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.title}>file_001.img</p>
      </div>

      <div className={styles.footer}>
        <p className={styles.size}>124 КБ</p>

        <div className={styles.downloadBtn}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
              stroke="#B1B2B4"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.83203 8.33325L9.9987 12.4999L14.1654 8.33325"
              stroke="#B1B2B4"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 12.5V2.5"
              stroke="#B1B2B4"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
