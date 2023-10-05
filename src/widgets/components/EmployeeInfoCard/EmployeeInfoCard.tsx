import { FC } from "react";

import { Btn, Text } from "@/shared";

import center from "/assets/center-avatar.jpg";
import styles from "./EmployeeInfoCard.module.scss";
import { IEmployeeCardType } from "./types";
import { WhiteContentBlock } from "../WhiteContentBlock/WhiteContentBlock";

export const EmployeeInfoCard: FC<IEmployeeCardType> = ({ type }) => {
    return (
        <div className={styles.data}>
            <WhiteContentBlock>
                <img src={center} alt="" className={styles.centerAvatar} />
            </WhiteContentBlock>
            <WhiteContentBlock>
                <Text type="h2" fz="20px">
                    Начал работу с 23 июня 2022
                </Text>
                <div className={styles.verify}>
                    {type === "employee" ? (
                        <Text type="p" fz="14px">
                            Контракт подписан на 9 месяцев
                        </Text>
                    ) : (
                        <Text type="p" fz="14px">
                            Контракт подписан
                        </Text>
                    )}
                    <span>
                        <svg
                            width="10"
                            height="9"
                            viewBox="0 0 10 9"
                            fill="none"
                        >
                            <path
                                d="M7.96497 2.27734L3.89091 6.35148L2.03906 4.4996"
                                stroke="#00CC5E"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
                {type === ("clinic" || "center") ? (
                    <div className={styles.btns}>
                        <Btn color="#0064FA">Связаться</Btn>
                        <Btn color="#D64657">Пожаловаться</Btn>
                    </div>
                ) : (
                    <Text type="p" color="#7D7F82" fz="12px">
                        Истекает через 3 месяца 23 дня
                    </Text>
                )}
            </WhiteContentBlock>
        </div>
    );
};
