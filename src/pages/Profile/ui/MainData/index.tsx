import { FC, useState } from "react";
import { IProfileParamsItemsData } from "../../types";

import { Text } from "@/shared/ui/Text";
import { useAuth } from "@/shared/model/store/auth";
import { Image } from "@/shared/ui/Image";
import { Account } from "../Account";
import { Rows } from "@/shared/ui/Rows";

import keyBlue from "/assets/key-big-blue.svg";
import keyRed from "/assets/key-big-red.svg";
import homeWithPlus from "/assets/home-with-plus-blue.svg";
import homeWithPlusRed from "/assets/home-with-plus-red.svg";
import markBlue from "/assets/mark-blue.svg";
import heartBlue from "/assets/heart-blue.svg";
import heartRed from "/assets/heart-red.svg";
import userBlue from "/assets/user-blue.svg";
import userRed from "/assets/user-red.svg";
import arrowRigth from "/assets/arrow-right.svg";
import assigmentBlue from "../../assets/assigmentBlue.svg";
import assigmentRed from "../../assets/assigmentRed.svg";
import statsBlue from "../../assets/statsBlue.svg";
import statsRed from "../../assets/statsRed.svg";

import styles from "./styles.module.scss";
import { MOBILE } from "@/shared/utils";

export const MainData: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<string>("");

    const { user } = useAuth();

    const data: IProfileParamsItemsData[] = [
        {
            label: "Аккаунт",
            icon: {
                healthy: userBlue,
                sick: userRed,
            },
            content: !MOBILE ? <Account /> : null,
        },
        {
            label: "Назначения",
            icon: { healthy: assigmentBlue, sick: assigmentRed },
        },
        {
            label: "Статистика лечения",
            icon: { healthy: statsBlue, sick: statsRed },
        },
        {
            label: "Медицинский центр",
            icon: {
                healthy: homeWithPlus,
                sick: homeWithPlusRed,
            },
        },
        {
            label: "Доступ",
            icon: {
                healthy: keyBlue,
                sick: keyRed,
            },
        },
        {
            label: "Подписки",
            icon: {
                healthy: heartBlue,
                sick: heartRed,
            },
        },
        {
            label: "Сохраненное",
            icon: {
                healthy: markBlue,
                sick: markBlue,
            },
        },
    ];

    return (
        <Rows gap={10} rows={["auto"]}>
            {data.map((item, i) => (
                <div
                    className={styles.item}
                    key={i}
                    onClick={() => {
                        setIsOpen((prev) => !prev);
                        setSelect(item.label);
                    }}
                >
                    <div className={styles.nav}>
                        <div className={styles.params}>
                            <img
                                className={styles.icon}
                                src={
                                    user && user.disease.length
                                        ? item.icon.sick
                                        : item.icon.healthy
                                }
                                alt=""
                            />
                            <Text type="p">{item.label}</Text>
                        </div>
                        <Image
                            className={
                                item.label === "Аккаунт" ? styles.arrow : ""
                            }
                            style={
                                isOpen && item.content && select === item.label
                                    ? {
                                          transform:
                                              item.label === "Аккаунт"
                                                  ? `rotate(90deg)`
                                                  : `rotate(0deg)`,
                                      }
                                    : {}
                            }
                            src={arrowRigth}
                            alt=""
                        />
                    </div>
                    <div
                        className={
                            isOpen &&
                            select === item.label &&
                            "content" in data[i] &&
                            item.content
                                ? `${styles.content} ${styles.open}`
                                : styles.content
                        }
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ minHeight: 0 }}>{item.content}</div>
                    </div>
                </div>
            ))}
        </Rows>
    );
};
