import { MobileHeader } from "@/widgets/components/MobileHeader";
import { Layout } from "../Layout";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import styles from "./styles.module.scss";
import { MainInfo } from "./ui/MainInfo";
import { StartWork } from "./ui/StartWork";
import { AdminInfo } from "./ui/AdminInfo";
import { Stats } from "./ui/Stats";

const ClinicProfilePage = () => {
  return (
    <Layout>
      <MobileHeader />
      <div className={styles.mainContent}>
        <div className={styles.subContent}>
          <MainInfo />
          <StartWork />
        </div>

        <div className={styles.subContent}>
          <AdminInfo />
          <Stats />
        </div>
      </div>

      
      <MobileMenu />
    </Layout>
  );
};

export default ClinicProfilePage;
