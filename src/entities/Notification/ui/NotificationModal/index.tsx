import { FC, useEffect } from "react";
import { INotificationModalProps } from "./types";

import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";
import { useAuth } from "@/shared/model/store/auth";
import { useCookie } from "@/shared/lib/hooks/useCookie";

import cross from "/assets/cross-black-small.svg";
// import alarm from "/assets/alarm-clock-blue.svg";
// import alarmRed from "/assets/alarm-clock-red.svg";
// import close from "/assets/close-circle-red.svg";
// import woman from "/assets/woman.jpg";
// import key from "/assets/key-white.svg";
import styles from "./styles.module.scss";
import { NotificationList } from "../NotificationList";
import { ABSOLUTE_PATH } from "@/shared/config";
import { Portal } from "@/shared/ui/Portal";

export const NotificationModal: FC<INotificationModalProps> = ({
    setIsOpen,
    isOpen,
}) => {
    const { user } = useAuth();
    const { getCookie } = useCookie();
    // const sick = "Болен";
    const token = getCookie("access_token") as string;

    useEffect(() => {
        const handleClick = () => {
            // setIsOpen(false);
        };

        document.addEventListener("click", handleClick);

        return () => document.removeEventListener("click", handleClick);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (user && token) {
            const ws = new WebSocket(
                `ws://${ABSOLUTE_PATH}/ws/notify/?token=${token}`
            );

            ws.onopen = () => {
                ws.send(
                    JSON.stringify({
                        action: "subscribe_to_notify_activity",
                        request_id: new Date().getTime(),
                    })
                );

                ws.onmessage = (e) => {
                    const data = JSON.parse(e.data);

                    console.log(data);
                };
            };
        }
    }, [getCookie, user, token]);

    return (
        <Portal>
            <WhiteContentBlock
                className={
                    isOpen
                        ? `${styles.notification} ${styles.open}`
                        : styles.notification
                }
                onClick={(e) => e && e.stopPropagation()}
            >
                <Row gap={0} style={{ justifyContent: "space-between" }}>
                    <Text type="h2" fz="18px">
                        Уведомления
                    </Text>
                    <Image
                        src={cross}
                        alt=""
                        width={24}
                        height={24}
                        onClick={() => setIsOpen(false)}
                    />
                </Row>
                <div className={styles.list}>
                    <div className={styles.box}>
                        <Text type="p" fz="12px" color="#7D7F82">
                            Сегодня
                        </Text>
                        <NotificationList />
                        {/* <div className={styles.items}>
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
                    </div> */}
                    </div>
                </div>
            </WhiteContentBlock>
        </Portal>
    );
};
