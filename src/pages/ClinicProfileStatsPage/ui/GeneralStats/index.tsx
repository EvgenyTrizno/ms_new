import { WidgetWrapper } from "@/widgets/components";
import styles from "./styles.module.scss";

export const GeneralStats = () => {
  return (
    <WidgetWrapper
      headerRight={
        <select className={styles.select}>
          <option value="1">За 1 день</option>
          <option value="1">1</option>
          <option value="1">1</option>
        </select>
      }
    >
      <div className={styles.list}>
        <div className={styles.item}>
          <p className={styles.itemTitle}>Посещений сайта </p>
          <p className={styles.itemValue}>13 856</p>
        </div>

        <div className={styles.item}>
          <p className={styles.itemTitle}>Посещений сайта </p>
          <p className={styles.itemValue}>13 856</p>
        </div>

        <div className={styles.item}>
          <p className={styles.itemTitle}>Посещений сайта </p>
          <p className={styles.itemValue}>13 856</p>
        </div>

        <div className={styles.item}>
          <p className={styles.itemTitle}>Посещений сайта </p>
          <p className={styles.itemValue}>13 856</p>
        </div>

        <div className={styles.item}>
          <p className={styles.itemTitle}>Посещений сайта </p>
          <p className={styles.itemValue}>13 856</p>
        </div>
      </div>
    </WidgetWrapper>
  );
};
