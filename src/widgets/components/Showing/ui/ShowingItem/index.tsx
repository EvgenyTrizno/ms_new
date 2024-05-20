import styles from "./styles.module.scss";
import cn from "clsx";

export const ShowingItem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.headerText}>2 марта</p>
      </div>

      <p className={styles.value}>500</p>

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
    </div>
  );
};
