import { FC } from "react";

import { Layout } from "../Layout";
import { CustomMobileHeader, ReminderBlock } from "@/widgets";
import { Accepted } from "./ui/Accepted";
import { NoAccepted } from "./ui/NoAccepted";
import { AddBtn } from "./ui/AddBtn";
import styles from "./styles.module.scss";

const AccessPage: FC = () => {
  return (
    <Layout>
      <CustomMobileHeader back text="Доступ" btn={<AddBtn />} />

      <div className={styles.inner}>
        <ReminderBlock className={styles.reminderBlock} />
        <Accepted />
        <NoAccepted />
      </div>
    </Layout>
  );
};

export default AccessPage;
