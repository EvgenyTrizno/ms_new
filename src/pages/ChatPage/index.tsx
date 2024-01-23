import { FC } from "react";
import { Layout } from "../Layout";
import { MOBILE } from "@/shared/utils";
import { Header } from "./ui/Header/Header";
import styles from "./index.module.scss";

const ChatPage: FC = () => {
  return (
    <>
      {MOBILE && <Header />}

      <Layout>
        <div className={styles.chatWrapper}>
          
        </div>
      </Layout>
    </>
  );
};

export default ChatPage;
