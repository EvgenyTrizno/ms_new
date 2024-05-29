import { useState } from "react";
import { WidgetWrapper } from "../WidgetWrapper";
import styles from "./styles.module.scss";
import cn from "clsx";

export const RecordNotifications = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <WidgetWrapper title="Важные оповещения записи">
      <div className={styles.tabs}>
        <div
          className={cn(styles.tab, {
            [styles.active]: activeTab === 0,
          })}
          onClick={() => changeActiveTab(0)}
        >
          Выполнено 7
        </div>
          <span>/</span>
        <div
          className={cn(styles.tab, {
            [styles.active]: activeTab === 1,
          })}
          onClick={() => changeActiveTab(1)}
        >
          Пропущ. 2
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.field}></div>
      </div>
    </WidgetWrapper>
  );
};
