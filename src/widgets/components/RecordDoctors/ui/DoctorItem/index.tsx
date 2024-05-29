import styles from "./styles.module.scss";

export const DoctorItem = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src="/assets/avatar.png" alt="avatar" />
      <div className={styles.content}>
        <h4 className={styles.name}>Михайлова Т. А.</h4>

        <p className={styles.spec}>Хирург</p>
      </div>
    </div>
  );
};
