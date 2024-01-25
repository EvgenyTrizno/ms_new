import { Link } from "react-router-dom";
import styles from "./Notification.module.scss";
import { FC } from "react";
import { NotificationType, SystemType, UserType } from "./types";
import { getSystemIcon } from "./utils/getSystemIcon";
import { getUserTypeIcon } from "./utils/getUserTypeIcon";

type Props = {
  type?: NotificationType;
  userSrcAvatar?: string;
  title: string;
  time: string;
  link?: {
    title: string;
    href: string;
  };

  userType?: UserType;
  systemType?: SystemType;
};

export const Notification: FC<Props> = ({
  type = "user",
  userSrcAvatar = "/assets/avatar.png",
  title,
  time,
  link,
  userType = "comment",
  systemType,
}) => {
  return (
    <div className={styles.notify}>
      {type === "user" ? (
        <div className={styles.imgWrapper}>
          {userType && (
            <div className={styles.userTypeIconWrapper}>
              <img src={getUserTypeIcon(userType)} alt={userType} />
            </div>
          )}

          <img className={styles.avatar} src={userSrcAvatar} alt="avatar" />
        </div>
      ) : (
        <>
          {systemType && (
            <div className={`${styles.imgWrapper} ${styles[systemType]}`}>
              <img
                className={styles.icon}
                src={getSystemIcon(systemType)}
                alt={systemType}
              />
            </div>
          )}
        </>
      )}

      <div className={styles.content}>
        <h5 className={styles.title}>
          {title}{" "}
          {type === "system" && link && (
            <Link className={styles.link} to={link.href}>
              {link.title}
            </Link>
          )}
        </h5>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
};
