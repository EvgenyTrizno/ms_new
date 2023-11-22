import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";

import comment from "../../assets/feedback.svg";

export const FeedbackNotification: FC = () => {
    return (
        <NotificationLayout
            img={comment}
            date={new Date().toISOString()}
            text={"Был получен новый отзыв"}
            typeIcon={undefined}
        />
    );
};
