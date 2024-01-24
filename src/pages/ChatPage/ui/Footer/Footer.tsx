import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src="/assets/icons/attach.svg" alt="attach" />

      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Введите сообщение..." />

        <img src="/assets/icons/smile.svg" alt="smile" />
      </div>

      <img src="/assets/icons/micro.svg" alt="micro" />
    </div>
  );
};
