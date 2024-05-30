import { WidgetWrapper } from "../WidgetWrapper";
import styles from "./styles.module.scss";

export const RecordIndicators = () => {
  return (
    <WidgetWrapper title="Показатели">
      <div className={styles.block}>
        <div className={styles.header}>
          <h5 className={styles.headerTitle}>Статистика</h5>
        </div>

        <div className={styles.content}>
          <div className={styles.list}>
            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Расшифровка записи</h6>
              <p className={styles.itemText}>Верная +33%</p>
            </div>
            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Расшифровка записи</h6>
              <p className={styles.itemText}>Верная +33%</p>
            </div>
            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Расшифровка записи</h6>
              <p className={styles.itemText}>Верная +33%</p>
            </div>
            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Расшифровка записи</h6>
              <p className={styles.itemText}>Верная +33%</p>
            </div>
          </div>
          <div className={styles.graph}></div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
