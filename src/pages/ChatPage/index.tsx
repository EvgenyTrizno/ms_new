import { MOBILE } from "@/shared/utils";
import { Header } from "./ui/Header/Header";
import styles from "./styles.module.scss";
import { Footer } from "./ui/Footer/Footer";
import { Message } from "./ui/Message/Message";

const ChatPage = () => {
  return (
    <>
      {MOBILE ? (
        <div>
          <Header />

          <div className={styles.chatWrapper}>
            <div className={styles.requirement}>
              Требуется доп. врач для выполнения задания
            </div>

            <div className={styles.messagesList}>
              <Message
                type="my"
                text="Первый вариант - перейти на страничку товара, второй вариант - добавить товар в корзину. Вопрос - нужно ли во втором варианте карточку тоже делать оранжевой?"
                time={new Date()}
              />
              <Message type="my" text="lorem 123123" time={new Date()} />
              <Message type="friend" text="lorem 123123" time={new Date()} />
            </div>

            <button className={styles.medHelp}>
              <img src="/assets/icons/med-help.svg" alt="med-help" />
              <span>Мед. помощь</span>
            </button>
          </div>

          <Footer />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ChatPage;
