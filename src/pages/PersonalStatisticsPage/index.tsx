import { MobileHeader } from "@/widgets/components/MobileHeader";
import { Layout } from "../Layout";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import styles from "./styles.module.scss";
import { Recognition } from "@/widgets/components";

const PersonalStatisticsPage = () => {
  return (
    <Layout>
      <MobileHeader />
      <div className={styles.list}>
        <Recognition />
      </div>
      <MobileMenu />
    </Layout>
  );
};

export default PersonalStatisticsPage;
