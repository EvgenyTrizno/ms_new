import { FC, useState } from "react";

import { Layout } from "../Layout/Layout";
import { User } from "@/widgets";
import { Input, Text } from "@/shared";

import user from "/assets/user-blue.svg";
import arrowRigth from "/assets/arrow-right.svg";
import shield from "/assets/shield-tick-blue.svg";
import people from "/assets/people-blue.svg";
import buildings from "/assets/buildings-blue.svg";
import heart from "/assets/heart-blue.svg";
import archive from "/assets/archive-tick-blue.svg";
import cart from "/assets/shopping-cart-blue.svg";
import styles from "./ProfilePage.module.scss";

export const ProfilePage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<string>();

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
                            <div className={styles.item}>
                                <div className={styles.nav}>
                                    <div className={styles.params}>
                                        <img src={user} alt="" />
                                        <Text type="p" fz="18px">
                                            Профиль
                                        </Text>
                                    </div>
                                    <img
                                        src={arrowRigth}
                                        alt=""
                                        style={
                                            isOpen && select === "Профиль"
                                                ? { transform: "rotate(90deg)" }
                                                : {}
                                        }
                                        onClick={() => {
                                            setIsOpen((prev) => !prev);
                                            setSelect("Профиль");
                                        }}
                                    />
                                </div>
                                {isOpen && select === "Профиль" && (
                                    <form className={styles.form}>
                                        <Input type="text" placeholder="Имя" />
                                        <Input
                                            type="text"
                                            placeholder="Фамилия"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Дата рождения"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Страна"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Город"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Адрес"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Логин"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Интерес"
                                        />
                                    </form>
                                )}
                            </div>
                            <div className={styles.item}>
                                <div className={styles.nav}>
                                    <div className={styles.params}>
                                        <img src={shield} alt="" />
                                        <Text type="p" fz="18px">
                                            Защита профиля
                                        </Text>
                                    </div>
                                    <img
                                        src={arrowRigth}
                                        alt=""
                                        style={
                                            isOpen &&
                                            select === "Защита профиля"
                                                ? { transform: "rotate(90deg)" }
                                                : {}
                                        }
                                        onClick={() => {
                                            setIsOpen((prev) => !prev);
                                            setSelect("Защита профиля");
                                        }}
                                    />
                                </div>
                                {isOpen && select === "Защита профиля" && (
                                    <form className={styles.form}>
                                        <Input
                                            type="text"
                                            placeholder="Телефон"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Почта"
                                        />
                                    </form>
                                )}
                            </div>
                            <div className={styles.item}>
                                <div className={styles.nav}>
                                    <div className={styles.params}>
                                        <img src={people} alt="" />
                                        <Text type="p" fz="18px">
                                            Доступ
                                        </Text>
                                    </div>
                                    <img src={arrowRigth} alt="" />
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.nav}>
                                    <div className={styles.params}>
                                        <img src={buildings} alt="" />
                                        <Text type="p" fz="18px">
                                            Ведущий центр
                                        </Text>
                                    </div>
                                    <img src={arrowRigth} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82">
                            Другое
                        </Text>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <div className={styles.nav}>
                                    <div className={styles.params}>
                                        <img src={heart} alt="" />
                                        <Text type="p" fz="18px">
                                            Подписки
                                        </Text>
                                    </div>
                                    <img src={arrowRigth} alt="" />
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.nav}>
                                    <div className={styles.params}>
                                        <img src={archive} alt="" />
                                        <Text type="p" fz="18px">
                                            Сохраненное
                                        </Text>
                                    </div>
                                    <img src={arrowRigth} alt="" />
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.nav}>
                                    <div className={styles.params}>
                                        <img src={cart} alt="" />
                                        <Text type="p" fz="18px">
                                            Покупки
                                        </Text>
                                    </div>
                                    <img src={arrowRigth} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
