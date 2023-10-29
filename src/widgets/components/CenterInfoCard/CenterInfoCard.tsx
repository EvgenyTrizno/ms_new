import { FC } from "react";
import { ICenterInfoCard } from "./types";

import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import { Rating } from "../../../features/Rating/ui";

import centerIcon from "/assets/center-icon.jpg";
import cross from "/assets/cross-close-black.svg";
import styles from "./CenterInfoCard.module.scss";

export const CenterInfoCard: FC<ICenterInfoCard> = ({
    top,
    left,
    onClick,
    setIsCardOpen,
}) => {
    return (
        <div className={styles.card} style={{ top, left }}>
            <div className={styles.top}>
                <div className={styles.rating}>
                    <Rating
                        defaultValue={5}
                        disabled
                        width="20px"
                        height="20px"
                        gap="4px"
                    />
                    <Text type="p" fz="14px">
                        5.0
                    </Text>
                </div>
                <img
                    src={cross}
                    alt=""
                    className={styles.close}
                    onClick={() => setIsCardOpen(false)}
                />
            </div>
            <div className={styles.data}>
                <div className={styles.box}>
                    <img src={centerIcon} alt="" className={styles.img} />
                    <div className={styles.text}>
                        <Text type="h2" fz="18px">
                            Центр Неврологии
                        </Text>
                        <Text type="p" fz="12px" color="#7D7F82">
                            Язык: <span>рус/анг</span>
                        </Text>
                    </div>
                </div>
            </div>
            <ul className={styles.list}>
                <li>
                    <Text type="p" fz="14px">
                        Колл-во специалистов:
                    </Text>
                    <span>7{">"}</span>
                </li>
                <li>
                    <Text type="p" fz="14px">
                        Ответственность:
                    </Text>
                    <span>62%</span>
                </li>
                <li>
                    <Text type="p" fz="14px">
                        Кол-во оборудования:
                    </Text>
                    <span>21</span>
                </li>
                <li>
                    <Text type="p" fz="14px">
                        Онлайн записи:
                    </Text>
                    <span>11</span>
                </li>
                <li>
                    <Text type="p" fz="14px">
                        Офлайн записи:
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
