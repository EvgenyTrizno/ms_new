import { FC } from "react";

import { Layout } from "../Layout";
import { User } from "../Profile/ui/UserInfo";
import { List } from "./ui/List";

const SettingsPage: FC = () => {
  return (
    <Layout>
      <User />
      <List />
    </Layout>
  );
};

export default SettingsPage;
