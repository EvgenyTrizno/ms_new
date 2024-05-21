import { MobileHeader } from "@/widgets/components/MobileHeader";
import { Layout } from "../Layout";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import styles from "./styles.module.scss";
import {
  ChapterTitle,
  HelpersStat,
  Indicators,
  Interest,
  Recognition,
  Showing,
} from "@/widgets/components";

const PersonalStatisticsPage = () => {
  return (
    <Layout>
      <MobileHeader />
      <div className={styles.list}>
        <Showing />
        <Recognition />
        <Interest className={styles.interest} />
      </div>

      <div>
        <ChapterTitle title="Показатели" />

        <Indicators />

        <div className={styles.indicatorsGrid}>
          <div className={styles.helpersStat}>
            <HelpersStat />
          </div>
        </div>
      </div>

      <MobileMenu />
    </Layout>
  );
};

export default PersonalStatisticsPage;
