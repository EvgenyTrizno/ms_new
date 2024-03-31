import { FC } from "react";

import { WorldMap } from "./ui/WorldMap";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";

const AdminPanelMapPage: FC = () => {
  return (
    <Layout>
      <CustomMobileHeader back text="Карта" />

      <WorldMap />
    </Layout>
  );
};

export default AdminPanelMapPage;
