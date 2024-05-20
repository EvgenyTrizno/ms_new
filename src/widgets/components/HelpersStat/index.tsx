import styles from "./styles.module.scss";
import { WidgetWrapper } from "../WidgetWrapper";
import { GraphCol } from "../GraphCol";

export const HelpersStat = () => {
  return (
    <WidgetWrapper>
      <div className={styles.inner}>
        <div className={styles.columns}>
            <GraphCol />
            <GraphCol />
            <GraphCol />
            <GraphCol />
        </div>
      </div>
    </WidgetWrapper>
  );
};
