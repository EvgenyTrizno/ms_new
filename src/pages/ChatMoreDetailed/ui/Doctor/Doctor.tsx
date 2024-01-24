import styles from "./Doctor.module.scss";

export const Doctor = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/assets/avatar.png" alt="avatar" />

      <div className={styles.content}>
        <p>Яковенко А. С.</p>
        <span>Был(а) недавно</span>
      </div>
    </div>
  );
};
