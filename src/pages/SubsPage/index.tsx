import { FC } from "react";

import { Layout } from "../Layout";
import { ClinicsList } from "./ui/ClinicsList";
import { DoctorsList } from "./ui/DoctorsList";
import { CustomMobileHeader } from "@/widgets";
import BoxWrapper from "@/entities/BoxWrapper";
import styles from "./styles.module.scss";

const SubsPage: FC = () => {
  return (
    <Layout>
      <CustomMobileHeader back text="Подписки" />

      <div className={styles.inner}>
        <BoxWrapper className={styles.boxWrapper} color="white">
          <DoctorsList />
        </BoxWrapper>
        <BoxWrapper className={styles.boxWrapper} color="white">
          <ClinicsList />
        </BoxWrapper>
      </div>
    </Layout>
  );
};

export default SubsPage;
