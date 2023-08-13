import { FC } from "react";
import { INoteBlockProps } from "./types";

import { Text } from "@/shared";
import { MOBILE, PC, TABLET } from "@/shared/utils";

import alarm from "/assets/alarm-clock.svg";
import arrowRight from "/assets/arrow-right-black.svg";
import calendar from "/assets/calendar.svg";
import time from "/assets/clock-fast-forward.svg";
import styles from "./NoteBlock.module.scss";

export const NoteBlock: FC<INoteBlockProps> = ({ onClick }) => {
    return (
        <div className={styles.note}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.nav}>
                        <Text
                            type="p"
                            fz={PC ? "16px" : TABLET ? "14px" : "12px"}
                            color="#7D7F82"
                        >
                            Название записи
                        </Text>
                        <img src={arrowRight} alt="" onClick={onClick} />
                    </div>
                    <Text type="h2" fz={PC ? "20px" : TABLET ? "18px" : "16px"}>
                        Проверка мышц
                    </Text>
                </div>
                <ul className={styles.list}>
                    <li>
                        <Text
                            type="p"
                            fz={PC ? "14px" : TABLET ? "14px" : "12px"}
                            color="#B1B2B4"
                        >
                            Доступно:
                        </Text>
                        <Text
                            type="p"
                            fz={PC ? "14px" : TABLET ? "14px" : "12px"}
                            color="#00CC5E"
                        >
                            Онлайн
                        </Text>
                    </li>
                    <li>
                        <Text
                            type="p"
                            fz={PC ? "14px" : TABLET ? "14px" : "12px"}
                            color="#B1B2B4"
                        >
                            Центр:
                        </Text>
                        <Text
                            type="p"
                            fz={PC ? "14px" : TABLET ? "14px" : "12px"}
                        >
                            Московский центр
                        </Text>
                    </li>
                    <li>
                        <Text
                            type="p"
                            fz={PC ? "14px" : TABLET ? "14px" : "12px"}
                            color="#B1B2B4"
                        >
                            Врач:
                        </Text>
                        <Text
                            type="p"
                            fz={PC ? "14px" : TABLET ? "14px" : "12px"}
                        >
                            Невролог И.И
                        </Text>
                    </li>
                </ul>
            </div>
            <div className={styles.line}></div>
            <div className={styles.date}>
                <div className={styles.block}>
                    <img src={calendar} alt="" />
                    <Text type="p" fz={MOBILE ? "12px" : TABLET ? "14px" : ""}>
                        21 Декабря
                    </Text>
                </div>
                <div className={styles.block}>
                    <img src={alarm} alt="" />
                    <Text type="p" fz={MOBILE ? "12px" : TABLET ? "14px" : ""}>
                        21 Декабря
                    </Text>
                </div>
                <div className={styles.block}>
                    <img src={time} alt="" />
                    <Text type="p" fz={MOBILE ? "12px" : TABLET ? "14px" : ""}>
                        21 Декабря
                    </Text>
                </div>
            </div>
        </div>
    );
};
