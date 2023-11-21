import { FC } from "react";
import { NotificationLayout } from "../NotificationLayout";
import { IReminderNotificationProps } from "./types";

import alarm from "./assets/alarm-clock-blue.svg";
import styles from "./styles.module.scss";

export const ReminderNotification: FC<IReminderNotificationProps> = ({
    text,
    date,
}) => {
    return (
        <NotificationLayout
            img={
                <div className={styles.clock}>
                    <img src={alarm} alt="" />
                </div>
            }
            date={date}
            text={text}
            typeIcon={undefined}
        />
    );
};
