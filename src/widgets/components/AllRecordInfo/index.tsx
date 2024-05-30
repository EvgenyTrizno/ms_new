import { WidgetWrapper } from "../WidgetWrapper";
import styles from "./styles.module.scss";

export const AllRecordInfo = () => {
  return (
    <WidgetWrapper title="Вся информация о записи">
      <div className={styles.wrapper}>
        <div className={styles.secondaryInfo}>
          <p className={styles.secondaryInfoText}>
            Участвовало стран: <span>4</span>
          </p>
          <p className={styles.secondaryInfoText}>
            <span className={styles.success}>онлайн</span>/офлайн
          </p>
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
            <p className={styles.itemKey}>Страна:</p>
            <p className={styles.itemValue}>США</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Страна:</p>
            <p className={styles.itemValue}>США</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Страна:</p>
            <p className={styles.itemValue}>США</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Страна:</p>
            <p className={styles.itemValue}>США</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Страна:</p>
            <p className={styles.itemValue}>США</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Страна:</p>
            <p className={styles.itemValue}>США</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Страна:</p>
            <p className={styles.itemValue}>США</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Страна:</p>
            <p className={styles.itemValue}>США</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Страна:</p>
            <p className={styles.itemValue}>США</p>
          </div>
        </div>

        <div className={styles.mapWrapper}>
          <div className={styles.map}>
            <img className={styles.mapImg} src="/assets/map.svg" alt="map" />
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
