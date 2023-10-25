import { FC, useEffect } from "react";

import { Text } from "@/shared/ui/Text";
import { useNotification, useUserCondition } from "@/shared/model/store";

import cross from "/assets/cross-black-small.svg";
import alarm from "/assets/alarm-clock-blue.svg";
import alarmRed from "/assets/alarm-clock-red.svg";
import close from "/assets/close-circle-red.svg";
import woman from "/assets/woman.jpg";
import key from "/assets/key-white.svg";
import styles from "./NotificationModal.module.scss";

export const NotificationModal: FC = () => {
    const { setIsNotification } = useNotification();
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    useEffect(() => {
        const handleClick = () => {
            setIsNotification(false);
        };

        document.addEventListener("click", handleClick);

        return () => document.removeEventListener("click", handleClick);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={styles.notification}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.nav}>
                <Text type="h2" fz="18px">
                    Уведомления
                </Text>
                <img
                    src={cross}
                    alt=""
                    onClick={() => setIsNotification(false)}
                />
            </div>
            <div className={styles.list}>
                <div className={styles.box}>
                    <Text type="p" fz="12px" color="#7D7F82">
                        Сегодня
                    </Text>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.circle}>
                                <img src={woman} alt="" />
                                <div
                                    className={
                                        sick
                                            ? `${styles.icon} ${styles.icon_red}`
                                            : styles.icon
                                    }
                                >
                                    <img src={key} alt="" />
                                </div>
                            </div>
                            <div className={styles.box}>
                                <Text
                                    type="p"
                                    fz="14px"
                                    color="#7D7F82"
                                    fw={400}
                                >
                                    Запрос на доступ был получен от &nbsp;
                                    <div className={styles.name}>
                                        <Text
                                            type="h2"
                                            fz="14px"
                                            color="#262626"
                                        >
                                            Михайлова Т. А.
                                        </Text>
                                    </div>
                                </Text>
                                <Text type="p" fz="12px" color="#B1B2B4">
                                    1 час назад
                                </Text>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div
                                className={
                                    sick
                                        ? `${styles.circle} ${styles.circle_red}`
                                        : `${styles.circle} ${styles.circle_blue}`
                                }
                            >
                                <img src={sick ? alarmRed : alarm} alt="" />
                            </div>
                            <div className={styles.box}>
                                <Text type="p" fz="14px" color="#7D7F82">
                                    Напоминание о записи завтра в 12:00
                                </Text>
                                <Text type="p" fz="12px" color="#B1B2B4">
                                    1 час назад
                                </Text>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div
                                className={
                                    sick
                                        ? `${styles.circle} ${styles.circle_red}`
                                        : `${styles.circle} ${styles.circle_blue}`
                                }
                            >
                                <img src={sick ? alarmRed : alarm} alt="" />
                            </div>
                            <div className={styles.box}>
                                <Text type="p" fz="14px" color="#7D7F82">
                                    Верификация лица была отклонена.
                                    <div className={styles.link}>
                                        <Text
                                            type="h2"
                                            fz="14px"
                                            color={sick ? "#D64657" : "#0064FA"}
                                        >
                                            Узнать причину
                                        </Text>
                                    </div>
                                </Text>
                                <Text type="p" fz="12px" color="#B1B2B4">
                                    1 час назад
                                </Text>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div
                                className={`${styles.circle} ${styles.circle_red}`}
                            >
                                <img src={close} alt="" />
                            </div>
                            <div className={styles.box}>
                                <Text type="p" fz="14px" color="#7D7F82">
                                    Запись была отклонена вашим центром.
                                    <div className={styles.link}>
                                        <Text
                                            type="h2"
                                            fz="14px"
                                            color={sick ? "#D64657" : "#0064FA"}
                                        >
                                            Узнать причину
                                        </Text>
                                    </div>
                                </Text>
                                <Text type="p" fz="12px" color="#B1B2B4">
                                    1 час назад
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
