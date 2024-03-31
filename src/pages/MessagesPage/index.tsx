import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";

import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import styles from "./styles.module.scss";
import { ChatField } from "@/entities/Chat/ui";

const MessagesPage: FC = () => {
  return (
    <Layout className={styles.layout}>
      <MobileHeader className={styles.header} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <ChatSidebar />

          <ChatField />
        </div>
      </div>
    </Layout>
  );
};

export default MessagesPage;
