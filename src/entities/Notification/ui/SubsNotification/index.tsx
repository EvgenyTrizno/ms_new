import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";
import { Circle } from "../Circle";

import user from "./assets/user.svg";

export const SubsNotification: FC = () => {
    return (
        <NotificationLayout
            img={""}
            date={new Date().toISOString()}
            text={"На вас подписался"}
            typeIcon={<Circle icon={user} />}
        />
    );
};
