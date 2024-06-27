import { Link } from "react-router-dom";
import styles from "./Notification.module.scss";
import { FC } from "react";
import { NotificationType, SystemType, UserType } from "./types";
import { getSystemIcon } from "./utils/getSystemIcon";
import { getUserTypeIcon } from "./utils/getUserTypeIcon";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";

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

export const Notification: FC<PropsWithClassName<Props>> = ({
    className,
    type = "user",
    userSrcAvatar = "/assets/avatar.png",
    title,
    time,
    link,
    userType = "comment",
    systemType,
}) => {
    return (
        <div className={cn(styles.notify, className)}>
            <div className={`${styles.imgWrapper} ${styles[systemType]}`}>
                <img
                    className={styles.icon}
                    src={getSystemIcon(systemType)}
                    alt={systemType}
                />
            </div>
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
        </div >
    );
};
