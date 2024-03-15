import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MOBILE } from "@/shared/utils";
import { MobileMenu } from "@/widgets/components/MobileMenu";

import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import styles from "./styles.module.scss";
import { ChatField } from "@/entities/Chat/ui";

const MessagesPage: FC = () => {
  return (
    <Layout>
      <div className={styles.inner}>
        <MobileHeader />
        <div className={styles.content}>
          <ChatSidebar />

          <ChatField />
        </div>
      </div>
    </Layout>
  );
};

export default MessagesPage;
