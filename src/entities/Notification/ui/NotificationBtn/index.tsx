import { FC } from "react";

import { Image } from "@/shared/ui/Image";

import notifyIcon from "../../assets/notification.svg";

export const NotificationBtn: FC = () => {
    return <Image src={notifyIcon} alt="notification btn" />;
};
