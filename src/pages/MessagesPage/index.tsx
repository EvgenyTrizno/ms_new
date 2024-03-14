import { FC } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MOBILE } from "@/shared/utils";
import { MobileMenu } from "@/widgets/components/MobileMenu";

import { ChatSidebar } from "@/entities/Chat/ui/ChatSidebar";
import styles from "./styles.module.scss";

const MessagesPage: FC = () => {
  return (
    <Layout>
      <div className={styles.inner}>
        <MobileHeader />
        <ChatSidebar />
      </div>
    </Layout>
  );
};

export default MessagesPage;
