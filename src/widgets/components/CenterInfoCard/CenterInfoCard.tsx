import { FC } from "react";
import { ICenterInfoCard } from "./types";

import { Btn, Text } from "../../../shared";

import close from "/assets/close-circle.svg";
import centerIcon from "/assets/center-icon.jpg";
import styles from "./CenterInfoCard.module.scss";

export const CenterInfoCard: FC<ICenterInfoCard> = ({
    setIsOpen,
    top,
    left,
}) => {
    return (
        <div className={styles.card} style={{ top, left }}>
            <img
                src={close}
                alt="close button"
                className={styles.close}
                onClick={() => setIsOpen(false)}
            />
            <div className={styles.data}>
                <div className={styles.box}>
                    <img src={centerIcon} alt="" className={styles.img} />
                    <div className={styles.text}>
                        <Text type="h2" fz="32px">
                            Центр Неврологии
                        </Text>
                        <Text type="p" fz="20px">
                            Изучено заболеваний: <span>50</span>
                        </Text>
                    </div>
                </div>
            </div>
            <ul className={styles.list}>
                <li>
                    <Text type="p" fz="20px">
                        Колл-во специалистов:
                    </Text>
                    <span>7</span>
                </li>
                <li>
                    <Text type="p" fz="20px">
                        Наблюдалось:
                    </Text>
                    <span>300</span>
                </li>
                <li>
                    <Text type="p" fz="20px">
                        Наблюдается:
                    </Text>
                    <span>167</span>
                </li>
                <li>
                    <Text type="p" fz="20px">
                        “Онлайн” лечение:
                    </Text>
                    <span>11</span>
                </li>
                <li>
                    <Text type="p" fz="20px">
                        “Оффлайн” лечение:
                    </Text>
                    <span>5</span>
                </li>
            </ul>
            <Btn color="#0064FA">Продолжить</Btn>
        </div>
    );
};
