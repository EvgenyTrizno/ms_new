import { MobileHeader } from "@/widgets/components/MobileHeader";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { GeneralStats } from "./ui/GeneralStats";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { Paul } from "./ui/Paul";
import { Countries } from "./ui/Countries";
import { Diagnosis } from "./ui/Diagnosis";

const ClinicProfileStatsPage = () => {
  return (
    <Layout>
      <MobileHeader />

      <div className={styles.gridList}>
        <GeneralStats />

        <Paul />

        <Countries />

        <Diagnosis />
      </div>

      <MobileMenu />
    </Layout>
  );
};

export default ClinicProfileStatsPage;
