import { MainData } from "@/pages/AccountPage/ui/MainData";
import styles from "./AccountMoreDetailed.module.scss";
import { Interest } from "@/pages/AccountPage/ui/Interest";
import { Protection } from "../../Protection";

export const AccountMoreDetailed = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <div>
          <p className={styles.groupTitle}>Основная информация</p>
          <MainData />
        </div>

        <div>
          <p className={styles.groupTitle}>Интерес</p>
          <Interest />
        </div>

        <div>
          <p className={styles.groupTitle}>Защита профиля</p>
          <Protection />
        </div>
      </div>
    </div>
  );
};
