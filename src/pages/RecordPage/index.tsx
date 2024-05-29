import { MobileHeader } from "@/widgets/components/MobileHeader";
import { Layout } from "../Layout";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import styles from "./styles.module.scss";
import {
  AllRecordInfo,
  EvaluationOfDoctors,
  RecordComments,
  RecordDoctors,
  RecordFiles,
  RecordIndicators,
  RecordNotifications,
  RecordStats,
} from "@/widgets/components";

const RecordPage = () => {
  return (
    <Layout>
      <MobileHeader />

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.mainContentLeft}>
            <AllRecordInfo />
            <EvaluationOfDoctors />
          </div>

          <div className={styles.mainContentRight}>
            <div className={styles.mainContentRightCol}>
              <RecordIndicators />
              <RecordFiles />
              <RecordNotifications />
            </div>

            <RecordComments />
          </div>
        </div>

        <div className={styles.secondaryContent}>
          <RecordStats />
          <RecordDoctors />
        </div>
      </div>

      <MobileMenu />
    </Layout>
  );
};

export default RecordPage;
