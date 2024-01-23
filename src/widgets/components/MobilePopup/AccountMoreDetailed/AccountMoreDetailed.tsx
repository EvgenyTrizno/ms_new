import { MainData } from "@/pages/AccountPage/ui/MainData";
import styles from "./AccountMoreDetailed.module.scss";

export const AccountMoreDetailed = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.groupTitle}>Основная информация</p>
      <MainData />
    </div>
  );
};
