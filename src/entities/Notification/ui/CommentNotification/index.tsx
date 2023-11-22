import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";

import comment from "../../assets/comment.svg";

export const CommentNotification: FC = () => {
    return (
        <NotificationLayout
            img={comment}
            date={new Date().toISOString()}
            text={"Был получен комментарий от Иванов Иван Иванович"}
            typeIcon={undefined}
        />
    );
};
