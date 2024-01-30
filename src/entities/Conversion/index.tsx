import { ArrTopIcon } from "@/icons";
import styles from "./styles.module.scss";
import { FC } from "react";
import cn from "clsx";

type Props = {
  type: "up" | "down";
};

const Conversion: FC<Props> = ({ type }) => {
  return (
    <div
      className={cn(styles.conversion, {
        [styles[type]]: type,
      })}
    >
      <div className={styles.left}>
        <div className={styles.conversionArrWrapper}>
          <ArrTopIcon />
        </div>

        <p className={styles.title}>Покупка</p>
      </div>

      <div className={styles.right}>
        <p>
          <span>-11</span>,00 ₽
        </p>
        <span>Pre Recover</span>
      </div>
    </div>
  );
};

export default Conversion;
