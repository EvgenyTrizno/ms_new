import styles from "./styles.module.scss";

export const ProgressBar = () => {
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
