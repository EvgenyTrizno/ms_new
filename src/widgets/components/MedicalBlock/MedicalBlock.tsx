import { FC } from "react";
import { INoteBlockProps } from "./types";

import { Text } from "@/shared/ui/Text";

// import alarm from "/assets/alarm-clock.svg";
// import calendar from "/assets/calendar.svg";
// import time from "/assets/clock-fast-forward.svg";
import styles from "./MedicalBlock.module.scss";
import { useUserCondition } from "@/shared/model/store";

export const MedicalBlock: FC<INoteBlockProps> = ({ onClick }) => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <div
            className={
                sick ? `${styles.medical} ${styles.medicalRed}` : styles.medical
            }
            onClick={onClick}
        >
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.nav}>
                        <Text type="p" fz="14px" color="#7D7F82">
                            Название записи
                        </Text>
                    </div>
                    <Text type="h2" fz="18px">
                        Проверка мышц
                    </Text>
                </div>
                <ul className={styles.list}>
                    <li>
                        <Text type="p" fz="12px" color="#B1B2B4">
                            Доступно:
                        </Text>
                        <Text type="p" fz="12px" color="#00CC5E">
                            Онлайн
                        </Text>
                    </li>
                    <li>
                        <Text type="p" fz="12px" color="#B1B2B4">
                            Центр:
                        </Text>
                        <Text type="p" fz="12px">
                            Московский центр
                        </Text>
                    </li>
                    <li>
                        <Text type="p" fz="12px" color="#B1B2B4">
                            Врач:
                        </Text>
                        <Text type="p" fz="12px">
                            Невролог И.И
                        </Text>
                    </li>
                </ul>
            </div>
            <div className={styles.line}></div>
            <div className={styles.date}>
                <div className={styles.block}>
                    {/* <img src={calendar} alt="" /> */}
                    <Text type="p" fz="12px">
                        21 Декабря
                    </Text>
                </div>
                <div className={styles.block}>
                    {/* <img src={alarm} alt="" /> */}
                    <Text type="p" fz="12px">
                        21 Декабря
                    </Text>
                </div>
                <div className={styles.block}>
                    {/* <img src={time} alt="" /> */}
                    <Text type="p" fz="12px">
                        21 Декабря
                    </Text>
                </div>
            </div>
        </div>
    );
};
