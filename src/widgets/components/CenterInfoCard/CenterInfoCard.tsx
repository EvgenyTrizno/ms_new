import { FC } from "react";
import { ICenterInfoCard } from "./types";

import { Btn, Text } from "@/shared";

import centerIcon from "/assets/center-icon.jpg";
import styles from "./CenterInfoCard.module.scss";
import { Rating } from "../Rating/Rating";

export const CenterInfoCard: FC<ICenterInfoCard> = ({ top, left, onClick }) => {
    return (
        <div className={styles.card} style={{ top, left }}>
            <div className={styles.rating}>
                <Rating defaultValue={5} disabled width="35px" height="35px" />
            </div>
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
                    <Text type="p" fz="20px" color="#B1B2B4">
                        Колл-во специалистов:
                    </Text>
                    <span>7</span>
                </li>
                <li>
                    <Text type="p" fz="20px" color="#B1B2B4">
                        Наблюдалось:
                    </Text>
                    <span>300</span>
                </li>
                <li>
                    <Text type="p" fz="20px" color="#B1B2B4">
                        Наблюдается:
                    </Text>
                    <span>167</span>
                </li>
                <li>
                    <Text type="p" fz="20px" color="#B1B2B4">
                        “Онлайн” лечение:
                    </Text>
                    <span>11</span>
                </li>
                <li>
                    <Text type="p" fz="20px" color="#B1B2B4">
                        “Оффлайн” лечение:
                    </Text>
                    <span>5</span>
                </li>
            </ul>
            <Btn color="#0064FA" onClick={onClick}>
                Продолжить
            </Btn>
        </div>
    );
};
