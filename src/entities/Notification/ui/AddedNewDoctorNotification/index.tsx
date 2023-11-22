import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";
import { Circle } from "../Circle";

import user from "./assets/user.svg";

export const AdedNewDoctorNotification: FC = () => {
    return (
        <NotificationLayout
            img={""}
            date={new Date().toISOString()}
            text={"К вам в центр был добавлен новый врач"}
            typeIcon={<Circle icon={user} />}
        />
    );
};
