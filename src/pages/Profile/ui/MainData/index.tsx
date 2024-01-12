import { FC, useState } from "react";
import { useNavigate } from "react-router";

import { Text } from "@/shared/ui/Text";
import { useAuth } from "@/shared/model/store/auth";
import { Image } from "@/shared/ui/Image";
import { Account } from "../Account";
import { Rows } from "@/shared/ui/Rows";
import { MOBILE, TABLET } from "@/shared/utils";

import keyBlue from "/assets/key-big-blue.svg";
import keyRed from "/assets/key-big-red.svg";
// import homeWithPlus from "/assets/home-with-plus-blue.svg";
// import homeWithPlusRed from "/assets/home-with-plus-red.svg";
import nursesBlue from '../../assets/nursesBlue.svg';
import nursesRed from '../../assets/nursesRed.svg';
import markBlue from "/assets/mark-blue.svg";
import markRed from "../../assets/access-red.svg";
import heartBlue from "/assets/heart-blue.svg";
import heartRed from "/assets/heart-red.svg";
import userBlue from "/assets/user-blue.svg";
import userRed from "/assets/user-red.svg";
import arrowRigth from "/assets/arrow-right.svg";
import assigmentBlue from "../../assets/assigmentBlue.svg";
import assigmentRed from "../../assets/assigmentRed.svg";
import statsBlue from "../../assets/statsBlue.svg";
import statsRed from "../../assets/statsRed.svg";
import access from "../../assets/access.svg";
import accessRed from "../../assets/access-red.svg";

import styles from "./styles.module.scss";

export const MainData: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<string>("");

    const { user } = useAuth();
    const navigate = useNavigate();

    const sick = user && user.disease.length;

    const data = [
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
            path: "/appointments",
        },
        {
            label: "Статистика",
            icon: { healthy: statsBlue, sick: statsRed },
            path: "/statistics",
        },
        {
            label: "Все врачи",
            icon: {
                healthy: nursesBlue,
                sick: nursesRed,
            },
            path: "/medical-center",
        },
        {
            label: "Доступ",
            icon: {
                healthy: access,
                sick: accessRed,
            },
            path: "/access",
        },
        {
            label: "Подписки",
            icon: {
                healthy: heartBlue,
                sick: heartRed,
            },
            path: "/subscriptions",
        },
        {
            label: "Сохраненное",
            icon: {
                healthy: markBlue,
                sick: markRed,
            },
            path: "/saved",
        },
    ];

    const mobileData = [
        {
            label: "Аккаунт",
            icon: {
                healthy: userBlue,
                sick: userRed,
            },
            path: "/account",
        },
        {
            label: "Записи",
            icon: {
                healthy: userBlue,
                sick: userRed,
            },
            path: "/notes",
        },
        {
            label: "Назначения",
            icon: { healthy: assigmentBlue, sick: assigmentRed },
            path: "/appointments",
        },
        {
            label: "Статистика",
            icon: { healthy: statsBlue, sick: statsRed },
            path: "/statistics",
        },
        {
            label: "Все врачи",
            icon: {
                healthy: nursesBlue,
                sick: nursesRed,
            },
            path: "/medical-center",
        },
        {
            label: "Доступ",
            icon: {
                healthy: keyBlue,
                sick: keyRed,
            },
            path: "/access",
        },
        {
            label: "Подписки",
            icon: {
                healthy: heartBlue,
                sick: heartRed,
            },
            path: "/subscriptions",
        },
        {
            label: "Сохраненное",
            icon: {
                healthy: markBlue,
                sick: markBlue,
            },
            path: "/saved",
        },
        {
            label: "Медицинская карта",
            icon: {
                healthy: markBlue,
                sick: markBlue,
            },
            path: "/medical-card",
        },
        {
            label: "Местоположение",
            icon: {
                healthy: markBlue,
                sick: markBlue,
            },
            path: "/geolocation",
        },
    ];

    return (
        <Rows gap={10} rows={["auto"]}>
            {!MOBILE && !TABLET ? (
                <>
                    {data.map((item, i) => (
                        <div
                            className={`${styles.item} ${styles.sick}`}
                            style={{borderColor: sick ? "#F7E6E8" : "#EBF3FF"}}
                            key={i}
                            onClick={() => {
                                setIsOpen((prev) => !prev);
                                setSelect(item.label);

                                if (item.path) {
                                    navigate(item.path);
                                }
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
                                        item.label === "Аккаунт"
                                            ? styles.arrow
                                            : ""
                                    }
                                    style={
                                        isOpen &&
                                        item.content &&
                                        select === item.label
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
                                <div style={{ minHeight: 0 }}>
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    {mobileData.map((item, i) => (
                        <div
                            className={styles.item}
                            key={i}
                            onClick={() => {
                                setIsOpen((prev) => !prev);
                                setSelect(item.label);

                                if (item.path) {
                                    navigate(item.path);
                                }
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
                                        item.label === "Аккаунт"
                                            ? styles.arrow
                                            : ""
                                    }
                                    src={arrowRigth}
                                    alt=""
                                />
                            </div>
                        </div>
                    ))}
                </>
            )}
        </Rows>
    );
};
