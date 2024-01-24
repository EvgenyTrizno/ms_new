import { FC } from "react";
import styles from "./ShowAllBtn.module.scss";

type Props = {
  title: string;
  count?: number;
};

export const ShowAllBtn: FC<Props> = ({ title, count }) => {
  return (
    <button className={styles.btn}>
      {title}
      {count ? ` (${count})` : null}
    </button>
  );
};
