import { FC } from "react";
import { MOBILE } from "@/shared/utils";
import { Header } from "./ui/Header/Header";
import styles from "./styles.module.scss";

const ChatPage: FC = () => {
  return (
    <div>
      {MOBILE && <Header />}

      <div className={styles.chatWrapper}>
        <div className={styles.requirement}>
          Требуется доп. врач для выполнения задания
        </div>

        <div className={styles.messagesList}>
          <p>1</p>

        </div>

        <button className={styles.medHelp}>
          <img src="/assets/icons/med-help.svg" alt="med-help" />
          <span>Мед. помощь</span>
        </button>
      </div>

      <div className={styles.footer}>
        <img src="/assets/icons/attach.svg" alt="attach" />

        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Введите сообщение..." />

          <img src="/assets/icons/smile.svg" alt="smile" />
        </div>

        <img src="/assets/icons/micro.svg" alt="micro" />
      </div>
    </div>
  );
};

export default ChatPage;
