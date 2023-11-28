import { FC, useId, useState } from "react";
import { IProfileParamsItemsData } from "../../types";

import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { useAuth } from "@/shared/model/store/auth";

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

import styles from "./styles.module.scss";

export const Data: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isShowValue, setIsShowValue] = useState<boolean>(false);
    const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");
    const [select, setSelect] = useState<string>("");

    const { user } = useAuth();

    const data: IProfileParamsItemsData[] = [
        {
            id: useId(),
            label: "Аккаунт",
            icon: {
                healthy: userBlue,
                sick: userRed,
            },
            content: (
                <>
                    <form className={styles.form}>
                        <Input
                            type="text"
                            placeholder="Имя"
                            value={(user && user.first_name) ?? ""}
                            name="first_name"
                            // onBlur={handleOnBlur}
                            // onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="Фамилия"
                            value={(user && user.last_name) ?? ""}
                            name="last_name"
                            // onBlur={handleOnBlur}
                            // onChange={handleChange}
                        />
                        <Input
                            className={styles.inputDate}
                            type="text"
                            placeholder="Дата рождения"
                            value={
                                isShowValue
                                    ? inputDateValue
                                    : (user && user.birthday) ?? ""
                            }
                            name="birthday"
                            // onFocus={onFocusHandler}
                            // onChange={handleInputChange}
                            // onBlur={() => {
                            //     onBlurHandlerOnDate();
                            //     handleOnBlur();
                            // }}
                        />
                        <Input
                            type="text"
                            placeholder="Страна"
                            // value={(user && user.country) ?? ""}
                            name="country"
                            // onBlur={handleOnBlur}
                            // onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="Город"
                            // value={city}
                            name="city"
                            // onBlur={handleOnBlur}
                            // onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="Адрес"
                            // value={address}
                            name="address"
                            // onBlur={handleOnBlur}
                            // onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="Логин"
                            // value={number}
                            name="login"
                            disabled
                        />
                    </form>
                    <form className={styles.form}>
                        <label className={styles.label}>
                            <Text type="p" color="#26262680">
                                Интерес
                            </Text>
                            <Input
                                type="text"
                                width=""
                                placeholder="Интерес"
                                // value={interest?.toString()}
                            />
                        </label>
                    </form>
                    <form className={styles.form}>
                        <label className={styles.label}>
                            <Text type="p" color="#26262680">
                                Номер
                            </Text>
                            <Input
                                type="text"
                                placeholder="Телефон"
                                value={(user && user.number) ?? ""}
                                name="number"
                                // onBlur={handleOnBlur}
                                // onChange={handleChange}
                            />
                        </label>
                        <label className={styles.label}>
                            <Text type="p" color="#26262680">
                                Эл. почта
                            </Text>
                            <Input
                                type="text"
                                placeholder="Почта"
                                value={(user && user.email) ?? ""}
                                name="email"
                                // onBlur={handleOnBlur}
                                // onChange={handleChange}
                            />
                        </label>
                    </form>
                </>
            ),
        },
        {
            id: useId(),
            label: "Доступ",
            icon: {
                healthy: keyBlue,
                sick: keyRed,
            },
            content: <div>params</div>,
        },
        {
            id: useId(),
            label: "Подписки",
            icon: {
                healthy: heartBlue,
                sick: heartRed,
            },
            content: <div>params</div>,
        },
        {
            id: useId(),
            label: "Сохраненное",
            icon: {
                healthy: markBlue,
                sick: markBlue,
            },
            content: <div>params</div>,
        },
        {
            id: useId(),
            label: "Покупки",
            icon: {
                healthy: cartBlue,
                sick: cartRed,
            },
            content: <div>params</div>,
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
        {
            id: useId(),
            label: "Местоположение",
            icon: {
                healthy: markerBlue,
                sick: markerRed,
            },
            content: <div>params</div>,
        },
    ];

    return (
        <div className={styles.items}>
            {data.map((item, i) => (
                <div
                    className={styles.item}
                    key={item.id}
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
                                              i > 1
                                                  ? `rotate(-90deg)`
                                                  : `rotate(90deg)`,
                                      }
                                    : {
                                          transform:
                                              i > 1
                                                  ? "rotate(0deg)"
                                                  : "rotate(270deg)",
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
                        <div style={{ minHeight: 0 }}>{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
