import { WidgetWrapper } from "@/widgets/components";
import styles from "./styles.module.scss";
import { Stats } from "./ui/Stats";

export const StartWork = () => {
  return (
    <WidgetWrapper>
      <div className={styles.inner}>
        <div className={styles.info}>
          <h4 className={styles.title}>Начал работу с 23 июня 2022</h4>

          <div className={styles.list}>
            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Контракт подписан на 2 года</h6>
              <p className={styles.itemText}>Срок истекает 12.12.2024</p>
            </div>

            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Количество персонала</h6>
              <p className={styles.itemText}>128 человек</p>
            </div>

            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Как оказался у нас на сайте?</h6>
              <p className={styles.itemText}>
                Через обзвон / Сама клиника с нами связалась
              </p>
            </div>
          </div>
        </div>

        <Stats />
      </div>
    </WidgetWrapper>
  );
};
