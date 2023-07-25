import { FC, useState, useId } from "react";
import { IProfileParamsData } from "./types";

import { Layout } from "../Layout/Layout";
import { User } from "@/widgets";
import { Input, Text } from "@/shared";
import { useUserCondition } from "@/shared/model/store";

import user from "/assets/user-blue.svg";
import userRed from "/assets/user-red.svg";
import arrowRigth from "/assets/arrow-right.svg";
import shield from "/assets/shield-tick-blue.svg";
import shieldRed from "/assets/shield-tick-red.svg";
import homeWithPlus from "/assets/home-with-plus-blue.svg";
import homeWithPlusRed from "/assets/home-with-plus-red.svg";
import heart from "/assets/heart-blue.svg";
import heartRed from "/assets/heart-red.svg";
import archive from "/assets/archive-tick-blue.svg";
import archiveRed from "/assets/archive-tick-red.svg";
import cart from "/assets/shopping-cart-blue.svg";
import cartRed from "/assets/shopping-cart-red.svg";
import styles from "./ProfilePage.module.scss";

const ProfilePage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<string>();
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    const data: IProfileParamsData = {
        main: [
            {
                id: useId(),
                label: "Профиль",
                icon: {
                    healthy: user,
                    sick: userRed,
                },
                content: (
                    <form className={styles.form}>
                        <Input type="text" placeholder="Имя" />
                        <Input type="text" placeholder="Фамилия" />
                        <Input type="text" placeholder="Дата рождения" />
                        <Input type="text" placeholder="Страна" />
                        <Input type="text" placeholder="Город" />
                        <Input type="text" placeholder="Адрес" />
                        <Input type="text" placeholder="Логин" />
                        <Input type="text" placeholder="Интерес" />
                    </form>
                ),
            },
            {
                id: useId(),
                label: "Защита профиля",
                icon: {
                    healthy: shield,
                    sick: shieldRed,
                },
                content: (
                    <form className={styles.form}>
                        <Input type="text" placeholder="Телефон" />
                        <Input type="text" placeholder="Почта" />
                    </form>
                ),
            },
            {
                id: useId(),
                label: "Медицинский центр",
                icon: {
                    healthy: homeWithPlus,
                    sick: homeWithPlusRed,
                },
                content: <div>params</div>,
            },
        ],
        other: [
            {
                id: useId(),
                label: "Подписки",
                icon: {
                    healthy: heart,
                    sick: heartRed,
                },
                content: <div>params</div>,
            },
            {
                id: useId(),
                label: "Сохраненное",
                icon: {
                    healthy: archive,
                    sick: archiveRed,
                },
                content: <div>params</div>,
            },
            {
                id: useId(),
                label: "Покупки",
                icon: {
                    healthy: cart,
                    sick: cartRed,
                },
                content: <div>params</div>,
            },
        ],
    };

    return (
        <Layout>
            <div className={styles.container}>
                <User />
                <div className={styles.settings}>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82">
                            Основные
                        </Text>
                        <div className={styles.items}>
                            {data.main.map((item) => (
                                <div className={styles.item} key={item.id}>
                                    <div className={styles.nav}>
                                        <div className={styles.params}>
                                            <img
                                                className={styles.icon}
                                                src={
                                                    sick
                                                        ? item.icon.sick
                                                        : item.icon.healthy
                                                }
                                                alt=""
                                            />
                                            <Text type="p" fz="18px">
                                                {item.label}
                                            </Text>
                                        </div>
                                        <img
                                            style={
                                                isOpen && select === item.label
                                                    ? {
                                                          transform: `rotate(90deg)`,
                                                      }
                                                    : {}
                                            }
                                            src={arrowRigth}
                                            alt=""
                                            onClick={() => {
                                                setIsOpen((prev) => !prev);
                                                setSelect(item.label);
                                            }}
                                        />
                                    </div>
                                    {isOpen &&
                                        select === item.label &&
                                        item.content}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82">
                            Другое
                        </Text>
                        <div className={styles.items}>
                            {data.other.map((item) => (
                                <div className={styles.item} key={item.id}>
                                    <div className={styles.nav}>
                                        <div className={styles.params}>
                                            <img
                                                className={styles.icon}
                                                src={
                                                    sick
                                                        ? item.icon.sick
                                                        : item.icon.healthy
                                                }
                                                alt=""
                                            />
                                            <Text type="p" fz="18px">
                                                {item.label}
                                            </Text>
                                        </div>
                                        <img
                                            src={arrowRigth}
                                            style={
                                                isOpen && select === item.label
                                                    ? {
                                                          transform: `rotate(90deg)`,
                                                      }
                                                    : {}
                                            }
                                            alt=""
                                            onClick={() => {
                                                setIsOpen((prev) => !prev);
                                                setSelect(item.label);
                                            }}
                                        />
                                    </div>
                                    {isOpen &&
                                        select === item.label &&
                                        item.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;
