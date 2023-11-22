import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";
import { Circle } from "../Circle";

import plus from "./assets/plus.svg";

export const CraeteNoteNotification: FC = () => {
    return (
        <NotificationLayout
            img={""}
            date={new Date().toISOString()}
            text={
                "Пользователь Иванов Иван Иванович создал запись в вашу клинику"
            }
            typeIcon={<Circle icon={plus} color="#00CC5E" />}
        />
    );
};
