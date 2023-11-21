import { FC } from "react";
import { INotificationLayoutProps } from "../../types/types";

import { Row } from "@/shared/ui/Row";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Image } from "@/shared/ui/Image";

import styles from "./styles.module.scss";

export const NotificationLayout: FC<INotificationLayoutProps> = ({
    text,
    img,
    date,
    typeIcon,
}) => {
    function calcHoursWithTimezone(
        startISO: string,
        finishISO: string
    ): number {
        const start = new Date(startISO);
        const finish = new Date(finishISO);

        const timeDifferenceInMilliseconds = finish.getTime() - start.getTime();
        const hoursDifference = timeDifferenceInMilliseconds / (1000 * 60 * 60);

        return hoursDifference;
    }

    return (
        <Row gap={16} className={styles.notify}>
            <div className={styles.img}>
                {typeIcon}
                {typeof img === "string" ? (
                    <Image
                        className={styles.avatar}
                        src={img}
                        alt=""
                        width={56}
                        height={56}
                    />
                ) : (
                    img
                )}
            </div>
            <Rows rows={["auto"]} gap={10}>
                <Text type="p" fz="16px" color="#7D7F82">
                    {text}
                </Text>
                <Text type="p" fz="14px" color="#7D7F82">
                    {Math.floor(
                        calcHoursWithTimezone(date, new Date().toISOString())
                    ) >= 24
                        ? Math.floor(
                              calcHoursWithTimezone(
                                  date,
                                  new Date().toISOString()
                              ) / 24
                          ) + " дней назад"
                        : Math.floor(
                              calcHoursWithTimezone(
                                  date,
                                  new Date().toISOString()
                              )
                          ) + " часов назад"}
                </Text>
            </Rows>
        </Row>
    );
};
