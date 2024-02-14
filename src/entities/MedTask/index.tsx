import styles from "./styles.module.scss";

export const MedTask = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>Названия мед. задания</span>
        <p>ОРВИ</p>
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <span>Начало:</span>
          <p className={styles.success}>Online</p>
        </div>
        <div className={styles.item}>
          <span>Длительность:</span>
          <p>11</p>
        </div>
        <div className={styles.item}>
          <span>Все врачи:</span>
          <p>17</p>
        </div>
        <div className={styles.item}>
          <span>Мед.задания:</span>
          <p>7</p>
        </div>
      </div>

      <div className={styles.groupChat}>Доступно в групповом чате</div>
    </div>
  );
};
