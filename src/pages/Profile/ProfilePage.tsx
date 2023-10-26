import { FC, useState, useId, ChangeEvent } from "react";
// import { useNavigate } from "react-router";
import { IProfileParamsItemsData } from "./types";

import { Layout } from "../Layout";
import {
    CustomMobileHeader,
    MobileContainer,
    ReminderBlock,
    // User,
} from "@/widgets";
// import { BackArrow } from "@/shared";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { useUserCondition } from "@/shared/model/store";

import user from "/assets/user-blue.svg";
import userRed from "/assets/user-red.svg";
import arrowRigth from "/assets/arrow-right.svg";
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
import styles from "./ProfilePage.module.scss";
import { MOBILE, PC } from "@/shared/utils";

const ProfilePage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<string>("");
    // const [first_name, setFirst_Name] = useState<string>("");
    // const [last_name, setLast_Name] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    // const [country, setCountry] = useState<string>("");
    // const [address, setAddress] = useState<string>("");
    // const [city, setCity] = useState<string>("");
    // const [interest, setInterest] = useState<number[]>();
    // const [number, setNumber] = useState<string>("");
    // const [isEmail, setIsEmail] = useState<string>("");
    // const [emailСode, setEmailCode] = useState<string>("");
    // const [role, setRole] = useState<TGroups>("Пользователи");
    // const [dataChanged, setDataChanged] = useState<boolean>(false);
    const [isShowValue, setIsShowValue] = useState<boolean>(false);
    const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");

    // const valueRefs = [
    //     useRef<string>(""), //first_name
    //     useRef<string>(""), // last_name
    //     useRef<string>(""), //birthday
    //     useRef<string>(""), // country
    //     useRef<string>(""), // city
    //     useRef<string>(""), // address
    //     useRef<string>(""), // login
    //     useRef<string>(""), // interest
    //     useRef<string>(""),
    //     // useRef<string>(),
    // ];

    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value;
        const digitsOnly = currentValue.replace(/\D/g, "");

        let formattedDate = "ГГГГ-ММ-ДД";

        for (let i = 0; i < digitsOnly.length; i++) {
            if (i === 0) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 1) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 2) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 3) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 4) {
                formattedDate = formattedDate.replace("М", digitsOnly[i]);
            } else if (i === 5) {
                formattedDate = formattedDate.replace("М", digitsOnly[i]);
            } else if (i === 6) {
                formattedDate = formattedDate.replace("Д", digitsOnly[i]);
            } else if (i === 7) {
                formattedDate = formattedDate.replace("Д", digitsOnly[i]);
            }
        }

        setInputDateValue(formattedDate);
        setBirthday(formattedDate);
        // setDataChanged(true);
    };

    // const onBlurHandlerOnDate = () => {
    //     setIsShowValue(false);
    // };

    const onFocusHandler = () => {
        setIsShowValue(true);
    };

    const data: IProfileParamsItemsData[] = [
        {
            id: useId(),
            label: "Аккаунт",
            icon: {
                healthy: user,
                sick: userRed,
            },
            content: (
                <>
                    <form className={styles.form}>
                        <Input
                            type="text"
                            placeholder="Имя"
                            // value={first_name}
                            name="first_name"
                            // onBlur={handleOnBlur}
                            // onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="Фамилия"
                            // value={last_name}
                            name="last_name"
                            // onBlur={handleOnBlur}
                            // onChange={handleChange}
                        />
                        <Input
                            className={styles.inputDate}
                            type="text"
                            placeholder="Дата рождения"
                            value={isShowValue ? inputDateValue : birthday}
                            name="birthday"
                            onFocus={onFocusHandler}
                            onChange={handleInputChange}
                            // onBlur={() => {
                            //     onBlurHandlerOnDate();
                            //     handleOnBlur();
                            // }}
                        />
                        <Input
                            type="text"
                            placeholder="Страна"
                            // value={country}
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
                            {/* {number?.length ? (
                                <label className={styles.verify}>
                                    <Input
                                        type="text"
                                        placeholder="Телефон"
                                        value={number}
                                        name="number"
                                        // onBlur={handleOnBlur}
                                        // onChange={handleChange}
                                    />
                                    <span>Телефон подтвержден</span>
                                </label>
                            ) : (
                                <Input
                                    type="text"
                                    placeholder="Телефон"
                                    value={number}
                                    name="number"
                                    // onBlur={handleOnBlur}
                                    // onChange={handleChange}
                                    borderColor="#D64657"
                                />
                            )} */}
                        </label>
                        <label className={styles.label}>
                            <Text type="p" color="#26262680">
                                Эл. почта
                            </Text>
                            {/* {emailСode?.length ? (
                                <label className={styles.verify}>
                                    <Input
                                        type="text"
                                        placeholder="Почта"
                                        value={isEmail}
                                        name="email"
                                        // onBlur={handleOnBlur}
                                        // onChange={handleChange}
                                    />
                                    <span>Почта подтверждена</span>
                                </label>
                            ) : (
                                <Input
                                    type="text"
                                    placeholder="Почта"
                                    value={isEmail}
                                    name="email"
                                    // onBlur={handleOnBlur}
                                    // onChange={handleChange}
                                    borderColor="#D64657"
                                />
                            )} */}
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

    const mobileData = {
        main: [
            "Имя",
            "Фамилия",
            "Дата рождения",
            "Страна",
            "Город",
            "Номер телефона",
            "Логин",
        ],
        interest: ["Интерес"],
        number: ["Номер телефона"],
        mail: ["Эл. Почта"],
    };

    return (
        <Layout>
            {MOBILE && (
                <CustomMobileHeader back text="Профиль">
                    {/* <BackArrow /> */}
                </CustomMobileHeader>
            )}
            <MobileContainer>
                {PC && (
                    <>
                        <div className={styles.reminder}>
                            <ReminderBlock type="timer" width="max-content" />
                        </div>
                        {/* <User
                            // img={img}
                            last_name={last_name}
                            first_name={first_name}
                            role={role}
                        /> */}
                    </>
                )}
                <div className={styles.settings}>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82" fz="14px">
                            Основные
                        </Text>
                        <div className={styles.items}>
                            {data.map((item, i) => (
                                <div
                                    className={styles.item}
                                    key={item.id}
                                    style={{
                                        borderColor: sick ? "#F7E6E8" : "",
                                    }}
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
                                        <div style={{ minHeight: 0 }}>
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {MOBILE && (
                        <>
                            <div className={styles.box}>
                                <Text type="p" color="#7D7F82" fz="14px">
                                    Интерес
                                </Text>
                                <div className={styles.items}>
                                    {mobileData.interest.map((item, i) => (
                                        <div
                                            key={i}
                                            className={styles.mobileItem}
                                        >
                                            <Text type="p" fz="15px">
                                                {item}
                                            </Text>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.box}>
                                <Text type="p" color="#7D7F82" fz="14px">
                                    Номер
                                </Text>
                                <div className={styles.items}>
                                    {mobileData.number.map((item, i) => (
                                        <div
                                            key={i}
                                            className={styles.mobileItem}
                                        >
                                            <Text type="p" fz="15px">
                                                {item}
                                            </Text>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.box}>
                                <Text type="p" color="#7D7F82" fz="14px">
                                    Эл. почта
                                </Text>
                                <div className={styles.items}>
                                    {mobileData.mail.map((item, i) => (
                                        <div
                                            key={i}
                                            className={styles.mobileItem}
                                        >
                                            <Text type="p" fz="15px">
                                                {item}
                                            </Text>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </MobileContainer>
        </Layout>
    );
};

export default ProfilePage;
