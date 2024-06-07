import { WidgetWrapper } from "@/widgets/components";
import styles from "./styles.module.scss";
import { CountryItem } from "../CountryItem";

export const Countries = () => {
  return (
    <WidgetWrapper
      title="Какие города включены"
      headerRight={<p className={styles.headerText}>Вашингтон США</p>}
    >
      <div className={styles.list}>
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
      </div>
    </WidgetWrapper>
  );
};
