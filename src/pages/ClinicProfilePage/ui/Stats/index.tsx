import { WidgetWrapper } from "@/widgets/components";
import styles from "./styles.module.scss";

export const Stats = () => {
  return (
    <WidgetWrapper>
      <div className={styles.inner}>
        <div className={styles.item}>
          <h5 className={styles.itemTitle}>
            Количество посещений клиники за 1 день
          </h5>

          <div className={styles.itemList}>
            <div className={styles.badge}>
              <p className={styles.badgeCount}>86</p>
              <p className={styles.badgeText}>Онлайн посещений</p>
            </div>
            <div className={styles.badge}>
              <p className={styles.badgeCount}>126</p>
              <p className={styles.badgeText}>Офлайн посещений</p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <h5 className={styles.itemTitle}>
            Количество проведенных записей за 1 день
          </h5>

          <div className={styles.itemList}>
            <div className={styles.badge}>
              <p className={styles.badgeCount}>99</p>
              <p className={styles.badgeText}>Онлайн</p>
            </div>
            <div className={styles.badge}>
              <p className={styles.badgeCount}>50</p>
              <p className={styles.badgeText}>Офлайн</p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <h5 className={styles.itemTitle}>
            Количество посещений клиники за 1 день
          </h5>

          <div className={styles.itemList}>
            <div className={styles.badge}>
              <p className={styles.badgeCount}>86</p>
              <p className={styles.badgeText}>Онлайн посещений</p>
            </div>
            <div className={styles.badge}>
              <p className={styles.badgeCount}>126</p>
              <p className={styles.badgeText}>Офлайн посещений</p>
            </div>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
