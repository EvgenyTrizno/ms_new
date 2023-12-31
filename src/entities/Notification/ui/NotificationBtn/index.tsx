import { FC } from "react";
import { INotificationBtnProps } from "./types";

import { Image } from "@/shared/ui/Image";

import notifyIcon from "../../assets/notification.svg";

import styles from "./styles.module.scss";

export const NotificationBtn: FC<INotificationBtnProps> = ({ onClick }) => {
    return (
        <Image
            className={styles.notify}
            src={notifyIcon}
            alt="notification btn"
            onClick={onClick}
        />
    );
};
