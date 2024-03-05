import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/utils/PATHS";

export const NotificationsLink = () => {
  return (
    <Link className={styles.notification} to={ROUTES.notifications.path}>
      <img src="/assets/icons/notification.svg" alt="notifications" />
    </Link>
  );
};
