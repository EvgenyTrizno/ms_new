import { FC } from "react";

import { Text } from "@/shared";

import calendar from "/assets/calendar.svg";
import alarm from "/assets/alarm-clock.svg";
import clock from "/assets/clock-fast-forward.svg";
import styles from "./NoteBlock.module.scss";
import { useUserCondition } from "@/shared/model/store";

export const NoteBlock: FC = () => {
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <div
            className={sick ? `${styles.item} ${styles.itemRed}` : styles.item}
        >
            <div className={styles.box}>
                <div className={styles.text}>
                    <Text type="p" color="#9B9B9B" fz="12px">
                        Название записи
                    </Text>
                    <Text type="h2" color="#000" fz="17px">
                        Восстановление
                    </Text>
                </div>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <Text type="p" color="#B1B2B4">
                            Формат:
                        </Text>
                        <Text type="p" color="#00CC5E" fz="13px">
                            Online
                        </Text>
                    </li>
                    <li className={styles.li}>
                        <Text type="p" color="#B1B2B4">
                            Предназначена:
                        </Text>
                        <Text type="p">Работа мышц спины</Text>
                    </li>
                    <li className={styles.li}>
                        <Text type="p" color="#B1B2B4">
                            Создана:
                        </Text>
                        <Text type="p">Неврологом И.И. (Московский центр)</Text>
                    </li>
                    <li className={styles.li}>
                        <Text type="p" color="#B1B2B4">
                            Версия:
                        </Text>
                        <Text type="p">USA</Text>
                    </li>
                </ul>
                <div className={styles.line}></div>
                <div className={styles.date}>
                    <div className={styles.block}>
                        <img src={calendar} alt="" />
                        <Text type="p" fz="12px">
                            21 Декабря
                        </Text>
                    </div>
                    <div className={styles.block}>
                        <img src={alarm} alt="" />
                        <Text type="p" fz="12px">
                            14:45
                        </Text>
                    </div>
                    <div className={styles.block}>
                        <img src={clock} alt="" />
                        <Text type="p" fz="12px">
                            40 минут
                        </Text>
                    </div>
                </div>
                <div className={styles.text}>
                    <Text type="p" fz="12px" position="center">
                        Доступно в групповом чате
                    </Text>
                </div>
            </div>
        </div>
    );
};
