import { FC } from "react";

import { NotificationLayout } from "../NotificationLayout";
import { Image } from "@/shared/ui/Image";

import call from "./assets/call.svg";
import styles from "./styles.module.scss";

export const ExtracallNotification: FC = () => {
    return (
        <NotificationLayout
            img={
                <div className={styles.circle}>
                    <Image src={call} alt={"call"} width={20} height={20} />
                </div>
            }
            date={new Date().toISOString()}
            text={"Пользователь Иванов Иван Иванович звонил экстренно в скорую"}
            typeIcon={undefined}
        />
    );
};
