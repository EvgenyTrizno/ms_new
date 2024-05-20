import styles from "./styles.module.scss";
import Marquee from "react-fast-marquee";
import { IndicatorItem } from "./ui/IndicatorItem";

export const Indicators = () => {
  return (
    <Marquee className={styles.marquee}>
      <IndicatorItem className={styles.item} />
      <IndicatorItem className={styles.item} />
      <IndicatorItem className={styles.item} />
      <IndicatorItem className={styles.item} />
      <IndicatorItem className={styles.item} />
      <IndicatorItem className={styles.item} />
      <IndicatorItem className={styles.item} />
      <IndicatorItem className={styles.item} />
    </Marquee>
  );
};
