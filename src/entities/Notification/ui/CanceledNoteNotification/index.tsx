import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";
import { IReminderNotificationProps } from "../ReminderNotification/types";

import close from "./assets/cenceled.svg";
import styles from "./styles.module.scss";

export const CanceledNoteNotification: FC<IReminderNotificationProps> = ({
    date,
    text,
}) => {
    return (
        <NotificationLayout
            img={
                <div className={styles.circle}>
                    <img src={close} alt="" />
                </div>
            }
            date={date}
            text={text}
            typeIcon={undefined}
        />
    );
};
