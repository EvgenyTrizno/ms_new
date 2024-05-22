import { MobileHeader } from "@/widgets/components/MobileHeader";
import { Layout } from "../Layout";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import styles from "./styles.module.scss";
import {
  ChapterTitle,
  Coverage,
  HelpersStat,
  Indicators,
  Interest,
  PurposeVisit,
  Recognition,
  Showing,
  Survey,
  Views,
  Visits,
} from "@/widgets/components";

const PersonalStatisticsPage = () => {
  return (
    <Layout>
      <MobileHeader />
      <div className={styles.list}>
        <Views className={styles.views} />
        <Coverage />
        <Showing />
        <Recognition />
        <PurposeVisit />
        <Interest className={styles.interest} />
        <Visits />
      </div>

      <div>
        <ChapterTitle title="Показатели" />

        <Indicators />

        <div className={styles.indicatorsGrid}>
          <div className={styles.helpersStat}>
            <HelpersStat />
          </div>

          <Survey />
        </div>
      </div>

      <MobileMenu />
    </Layout>
  );
};

export default PersonalStatisticsPage;
