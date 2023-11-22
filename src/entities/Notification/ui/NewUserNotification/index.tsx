import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";
import { Circle } from "../Circle";

import user from "./assets/user.svg";

export const NewUserNotification: FC = () => {
    return (
        <NotificationLayout
            img={""}
            date={new Date().toISOString()}
            text={"Добавился новый пользователь к вам в ведущий центр"}
            typeIcon={<Circle icon={user} />}
        />
    );
};
