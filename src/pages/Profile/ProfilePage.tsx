import { FC, useState, useId } from "react";
import { IProfileParamsData } from "./types";

import { Layout } from "../Layout/Layout";
import { User } from "@/widgets";
import { Input, Text } from "@/shared";
import { useUserCondition, useUserData } from "@/shared/model/store";
import { Account } from "@/shared/api/Account";
import { getRefreshTokenFromCookies } from "@/features";

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
    const [first_name, setFirst_Name] = useState<string>();
    const [last_name, setLast_Name] = useState<string>();
    const [birthday, setBirthday] = useState<Date>();
    const [country, setCountry] = useState<string>();
    const [address, setAdderess] = useState<string>();
    const [city, setCity] = useState<string>();
    const [interest, setInterest] = useState<string>();
    const [login, setLogin] = useState<string>();

    const { condition } = useUserCondition();
    const { changeProfileData } = Account();
    const { number, setNumber, email, setEmail, position } = useUserData();

    const sick = condition === "Болен";
    const token = getRefreshTokenFromCookies();
    console.log(token);

    const handleOnBlur = () => {
        if (token) {
            changeProfileData(
                token,
                first_name
                // last_name,
                // birthday,
                // country,
                // address,
                // city,
                // number
            ).then((res) => console.log(res));
        }
    };

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
                        <Input
                            type="text"
                            placeholder="Имя"
                            onBlur={handleOnBlur}
                            value={first_name}
                            onChange={(e) => setFirst_Name(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Фамилия"
                            value={last_name}
                            onChange={(e) => setLast_Name(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Дата рождения"
                            // value={birthday?.toString()}
                            // onChange={(e) =>
                            //     setBirthday(Date.parse(e.target.value))
                            // }
                        />
                        <Input
                            type="text"
                            placeholder="Страна"
                            value={position.counrty || country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Город"
                            value={position.city || city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Адрес"
                            value={address}
                            onChange={(e) => setAdderess(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Логин"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Интерес"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                        />
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
                        <Input
                            type="text"
                            placeholder="Телефон"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Почта"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
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
                                <div
                                    className={styles.item}
                                    key={item.id}
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
                                                          transform: `rotate(-90deg)`,
                                                      }
                                                    : {
                                                          transform:
                                                              "rotate(90deg)",
                                                      }
                                            }
                                            src={arrowRigth}
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className={
                                            isOpen && select === item.label
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
                        </div>
                    </div>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82">
                            Другое
                        </Text>
                        <div className={styles.items}>
                            {data.other.map((item) => (
                                <div
                                    className={styles.item}
                                    key={item.id}
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
                                                          transform: `rotate(-90deg)`,
                                                      }
                                                    : {
                                                          transform:
                                                              "rotate(90deg)",
                                                      }
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className={
                                            isOpen && select === item.label
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
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;
