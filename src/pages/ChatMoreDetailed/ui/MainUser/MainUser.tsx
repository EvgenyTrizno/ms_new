import styles from "./MainUser.module.scss";

export const MainUser = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/assets/avatar.png" alt="avatar" />
      <div className={styles.content}>
        <p>Яковенко А. С.</p>
        <span>Пользователь</span>
      </div>
    </div>
  );
};
