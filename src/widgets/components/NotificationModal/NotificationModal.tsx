import { FC } from "react";

import styles from "./NotificationModal.module.scss";
import { Text } from "@/shared";

export const NotificationModal: FC = () => {
    return (
        <div className={styles.notification}>
            <Text type="h2" fz="25px">
                Уведомления
            </Text>
            <div className={styles.list}>
                <div className={styles.box}>
                    <Text type="p" fz="16px" color="#7D7F82">
                        Сегодня
                    </Text>
                    <div className={styles.items}>
                        <div className={styles.item}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
