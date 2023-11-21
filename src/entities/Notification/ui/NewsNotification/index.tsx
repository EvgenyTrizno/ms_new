import { FC } from "react";
import { INewPostNotificationProps } from "./types";

import { NotificationLayout } from "../NotificationLayout";
import { Circle } from "../Circle";

import plane from "./assets/paper-plane.svg";

export const NewsPostNotification: FC<INewPostNotificationProps> = ({
    date,
    img,
    text,
}) => {
    return (
        <NotificationLayout
            img={img}
            date={date}
            text={text}
            typeIcon={<Circle icon={plane} />}
        />
    );
};
