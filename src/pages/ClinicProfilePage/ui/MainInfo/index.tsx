import { WidgetWrapper } from "@/widgets/components";
import styles from "./styles.module.scss";
import { FC } from "react";
import { PropsWithClassName } from "@/shared/types";

export const MainInfo: FC<PropsWithClassName> = ({ className }) => {
  return (
    <WidgetWrapper className={className}>
      <div className={styles.inner}>
        <img
          className={styles.img}
          src="https://i.pinimg.com/originals/3a/96/fd/3a96fd2a09d9cbb0566076e759ad419d.jpg"
          alt="Clinic"
        />

        <div className={styles.content}>
          <h4 className={styles.title}>Здоровый горизонт</h4>

          <div className={styles.list}>
            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Клиника</h6>
              <p className={styles.itemText}>Общая медицинская клиника</p>
            </div>

            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Адрес</h6>
              <p className={styles.itemText}>Ташкент, Республика Узбекистан</p>
              <span className={styles.itemSecondaryText}>ул. Донская, д. 5</span>
            </div>

            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Местоположение</h6>
              <a className={styles.itemLink} href="#">Посмотреть на карте</a>
            </div>

            <div className={styles.item}>
              <h6 className={styles.itemTitle}>Номер телефона</h6>
              <a className={styles.itemLink} href="#">+7(923)-123-45-67</a>
            </div>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
