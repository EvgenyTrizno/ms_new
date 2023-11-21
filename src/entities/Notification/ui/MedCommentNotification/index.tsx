import { FC } from "react";
import { INotificationProps } from "../../types/types";

import { NotificationLayout } from "../NotificationLayout";
import { Circle } from "../Circle";

import comment from "./assets/comment.svg";

export const MedCommentNotification: FC<INotificationProps> = ({
    img,
    date,
    text,
}) => {
    return (
        <NotificationLayout
            img={img}
            date={date}
            text={text}
            typeIcon={<Circle icon={comment} />}
        />
    );
};
