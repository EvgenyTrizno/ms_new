import styles from "./styles.module.scss";
import { NotificationsModal } from "../NotificationsModal";
import { useState } from "react";

export const NotificationsLink = () => {
  const [isOpenNotifications, setOpenNotifications] = useState(false);

  return (
    <div className={styles.notification}>
      <img
        src="/assets/icons/notification.svg"
        alt="notifications"
        style={{cursor: "pointer"}}
        onClick={() => setOpenNotifications((prev) => !prev)}
      />

      {/* <div className={styles.circle}></div> */}

      {isOpenNotifications && (
        <NotificationsModal setOpen={setOpenNotifications} />
      )}
    </div>
  );
};
