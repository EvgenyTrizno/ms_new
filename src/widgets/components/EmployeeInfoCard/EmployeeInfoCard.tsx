import { FC } from "react";

import { Btn, Text } from "@/shared";

import center from "/assets/center-avatar.jpg";
import styles from "./EmployeeInfoCard.module.scss";
import { IEmployeeCardType } from "./types";
import { WhiteContentBlock } from "../WhiteContentBlock/WhiteContentBlock";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP } from "@/shared/utils";

export const EmployeeInfoCard: FC<IEmployeeCardType> = ({ type }) => {
    return (
        <>
            <WhiteContentBlock>
                {PC || SMALL_LAPTOP || LAPTOP ? (
                    <div className={styles.data}>
                        <img
                            src={center}
                            alt=""
                            className={styles.centerAvatar}
                        />
                        <div className={styles.inner}>
                            <Text type="h2" fz={PC ? "20px" : "14px"}>
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
                                    <Btn
                                        color="#0064FA"
                                        height={
                                            MOBILE
                                                ? "42px"
                                                : LAPTOP
                                                ? "37px"
                                                : ""
                                        }
                                        fz={
                                            MOBILE
                                                ? "15px"
                                                : LAPTOP
                                                ? "14px"
                                                : ""
                                        }
                                        padding={
                                            MOBILE
                                                ? "0px"
                                                : LAPTOP
                                                ? "10px 12px"
                                                : ""
                                        }
                                        br={MOBILE || LAPTOP ? "9px" : ""}
                                    >
                                        Связаться
                                    </Btn>
                                    <Btn
                                        color="#D64657"
                                        height={
                                            MOBILE
                                                ? "42px"
                                                : LAPTOP
                                                ? "37px"
                                                : ""
                                        }
                                        padding={
                                            MOBILE
                                                ? "0px"
                                                : LAPTOP
                                                ? "10px 12px"
                                                : ""
                                        }
                                        fz={
                                            MOBILE
                                                ? "15px"
                                                : LAPTOP
                                                ? "14px"
                                                : ""
                                        }
                                        br={MOBILE || LAPTOP ? "9px" : ""}
                                    >
                                        Пожаловаться
                                    </Btn>
                                </div>
                            ) : (
                                <Text type="p" color="#7D7F82" fz="12px">
                                    Истекает через 3 месяца 23 дня
                                </Text>
                            )}
                        </div>
                    </div>
                ) : (
                    MOBILE && (
                        <div className={styles.data}>
                            <div className={styles.top}>
                                <img
                                    src={center}
                                    alt=""
                                    className={styles.centerAvatar}
                                />
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
                            </div>
                            <Text type="h2" fz={PC ? "20px" : "14px"}>
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
                        </div>
                    )
                )}
            </WhiteContentBlock>
            {PC && (
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
                </WhiteContentBlock>
            )}
        </>
    );
};
