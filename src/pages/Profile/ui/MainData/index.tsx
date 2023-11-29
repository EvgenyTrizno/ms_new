import { FC, useId, useState } from "react";
import { IProfileParamsItemsData } from "../../types";

import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { useAuth } from "@/shared/model/store/auth";
import { Account } from "../Account";

import keyBlue from "/assets/key-big-blue.svg";
import keyRed from "/assets/key-big-red.svg";
import homeWithPlus from "/assets/home-with-plus-blue.svg";
import homeWithPlusRed from "/assets/home-with-plus-red.svg";
import markerBlue from "/assets/marker-blue.svg";
import markerRed from "/assets/marker-red.svg";
import markBlue from "/assets/mark-blue.svg";
import cartBlue from "/assets/shopping-cart-blue.svg";
import cartRed from "/assets/shopping-cart-red.svg";
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
            content: <Account />,
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
        <div className={styles.items}>
            {data.map((item, i) => (
                <div
                    className={styles.item}
                    key={i}
                    // style={{
                    //     borderColor: sick ? "#F7E6E8" : "",
                    // }}
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
                        <img
                            style={
                                isOpen && select === item.label
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
                            "content" in data[i]
                                ? `${styles.content} ${styles.open}`
                                : styles.content
                        }
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ minHeight: 0 }}>{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
