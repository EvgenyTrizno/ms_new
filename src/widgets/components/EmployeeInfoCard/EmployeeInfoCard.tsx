import { FC } from "react";

import { Btn, Text } from "@/shared";

import center from "/assets/center-avatar.jpg";
import styles from "./EmployeeInfoCard.module.scss";
import { IEmployeeCardType } from "./types";
import { WhiteContentBlock } from "../WhiteContentBlock/WhiteContentBlock";
import { LAPTOP, PC, SMALL_LAPTOP } from "@/shared/utils";

export const EmployeeInfoCard: FC<IEmployeeCardType> = ({ type }) => {
    console.log(window.innerWidth);
    return (
        <div className={styles.data}>
            <WhiteContentBlock>
                <img src={center} alt="" className={styles.centerAvatar} />
                {(SMALL_LAPTOP || LAPTOP) && (
                    <>
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
                                        SMALL_LAPTOP || LAPTOP ? "35px" : ""
                                    }
                                    fz={SMALL_LAPTOP || LAPTOP ? "12px" : ""}
                                    padding={
                                        SMALL_LAPTOP || LAPTOP ? "0px" : ""
                                    }
                                    br={SMALL_LAPTOP || LAPTOP ? "9px" : ""}
                                >
                                    Связаться
                                </Btn>
                                <Btn
                                    color="#D64657"
                                    height={
                                        SMALL_LAPTOP || LAPTOP ? "35px" : ""
                                    }
                                    padding={
                                        SMALL_LAPTOP || LAPTOP ? "0px" : ""
                                    }
                                    fz={SMALL_LAPTOP || LAPTOP ? "12px" : ""}
                                    br={SMALL_LAPTOP || LAPTOP ? "9px" : ""}
                                >
                                    Пожаловаться
                                </Btn>
                            </div>
                        ) : (
                            <Text type="p" color="#7D7F82" fz="12px">
                                Истекает через 3 месяца 23 дня
                            </Text>
                        )}
                    </>
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
            )}
        </div>
    );
};
