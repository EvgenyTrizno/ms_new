import styles from "./styles.module.scss";

export const CountProgress = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.active}></div>
      <div className={styles.active}></div>
      <div className={styles.active}></div>
      <div className={styles.active}></div>
      <div className={styles.active}></div>
      <div className={styles.active}></div>
      <div></div>
    </div>
  );
};
