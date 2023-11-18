import { FC } from "react";
import { INotificationBtnProps } from "./types";

import { Image } from "@/shared/ui/Image";

import notifyIcon from "../../assets/notification.svg";

export const NotificationBtn: FC<INotificationBtnProps> = ({ onClick }) => {
    return <Image src={notifyIcon} alt="notification btn" onClick={onClick} />;
};
