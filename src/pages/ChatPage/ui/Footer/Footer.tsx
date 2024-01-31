import { ChangeEvent, useState } from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const [message, setMessage] = useState("");

  const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className={styles.footer}>
      <img src="/assets/icons/attach.svg" alt="attach" />

      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Введите сообщение..."
          onChange={onChangeMessage}
          value={message}
        />

        <img src="/assets/icons/smile.svg" alt="smile" />
      </div>

      {message.length > 0 ? (
        <img className={styles.sendIcon} src="/assets/icons/send-message.svg" alt="send" />
      ) : (
        <img className={styles.sendIcon} src="/assets/icons/micro.svg" alt="micro" />
      )}
    </div>
  );
};
