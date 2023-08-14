import { FC, useState, useId, ChangeEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { IProfileParamsItemsData } from "./types";
import { TGroups } from "@/shared/model/store/types";

import { Layout } from "../Layout/Layout";
import { ReminderBlock, User } from "@/widgets";
import { Input, Text } from "@/shared";
import { useUserCondition, useUserData } from "@/shared/model/store";
import { Account } from "@/shared/api/Account";
import { getAccessTokenFromCookies } from "@/features";

import user from "/assets/user-blue.svg";
import userRed from "/assets/user-red.svg";
import arrowRigth from "/assets/arrow-right.svg";
import noteBlue from "/assets/note-blue.svg";
import noteRed from "/assets/note-red.svg";
import homeWithPlus from "/assets/home-with-plus-blue.svg";
import homeWithPlusRed from "/assets/home-with-plus-red.svg";
import clipBoardBlue from "/assets/clipboard-text-blue.svg";
import clipBoardRed from "/assets/clipboard-text-red.svg";
import markerBlue from "/assets/marker-blue.svg";
import markerRed from "/assets/marker-red.svg";
import logouBlue from "/assets/logout-blue.svg";
import logouRed from "/assets/logout-red.svg";
import styles from "./ProfilePage.module.scss";

const ProfilePage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [select, setSelect] = useState<string>("");
    const [first_name, setFirst_Name] = useState<string>("");
    const [last_name, setLast_Name] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [interest, setInterest] = useState<number[]>();
    const [number, setNumber] = useState<string>("");
    const [isEmail, setIsEmail] = useState<string>("");
    const [emailСode, setEmailCode] = useState<string>("");
    const [role, setRole] = useState<TGroups>("Пользователи");
    const [dataChanged, setDataChanged] = useState<boolean>(false);
    const [isShowValue, setIsShowValue] = useState<boolean>(false);
    const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");

    const valueRefs = [
        useRef<string>(""), //first_name
        useRef<string>(""), // last_name
        useRef<string>(""), //birthday
        useRef<string>(""), // country
        useRef<string>(""), // city
        useRef<string>(""), // address
        useRef<string>(""), // login
        useRef<string>(""), // interest
        useRef<string>(""),
        // useRef<string>(),
    ];
    const navigate = useNavigate();

    const { condition } = useUserCondition();
    const { setEmail, img } = useUserData();
    const {
        changeProfileName,
        getUserData,
        changeProfileSurname,
        changeProfileBirthday,
        changeProfileCountry,
        changeProfileAddress,
        changeProfileCity,
        verifyEmail,
    } = Account();

    const sick = condition === "Болен";
    const token = getAccessTokenFromCookies();

    const handleOnBlur = () => {
        if (dataChanged && token) {
            if (valueRefs[0].current !== first_name) {
                changeProfileName(token, first_name).then((res) => {
                    console.log(res);
                    valueRefs[0].current = res.first_name ?? "";
                });
            } else if (valueRefs[1].current !== last_name) {
                changeProfileSurname(token, last_name).then((res) => {
                    console.log(res);
                    valueRefs[1].current = res.last_name ?? "";
                });
            } else if (
                valueRefs[2].current !== birthday &&
                birthday !== "ГГГГ-ММ-ДД"
            ) {
                changeProfileBirthday(token, birthday).then((res) => {
                    console.log(res);
                    valueRefs[2].current = res.birthday ?? "";
                    setInputDateValue("ГГГГ-ММ-ДД");
                });
            } else if (valueRefs[3].current !== country) {
                changeProfileCountry(token, country).then((res) => {
                    console.log(res);
                    valueRefs[3].current = res.country;
                });
            } else if (valueRefs[4].current !== city) {
                changeProfileCity(token, city).then((res) => {
                    console.log(res);
                    valueRefs[4].current = res.city;
                });
            } else if (valueRefs[5].current !== address) {
                changeProfileAddress(token, address).then((res) => {
                    console.log(res);
                    valueRefs[5].current = res.address ?? "";
                });
            } else if (valueRefs[8].current !== isEmail && !isEmail) {
                console.log("1");
                verifyEmail(token, isEmail).then((res) => {
                    console.log(res);
                    setEmail(isEmail);
                    navigate("/auth/confirm?redirect=verify&type=email");
                });
            }
        }

        setDataChanged(false);
    };

    useEffect(() => {
        if (token) {
            getUserData(token).then((res) => {
                setFirst_Name(res.first_name ?? "");
                setLast_Name(res.last_name ?? "");
                setAddress(res.address ?? "");
                setNumber(res.number);
                setRole(res.group);
                setBirthday(res.birthday ?? "");
                setCountry(res.country);
                setCity(res.city);
                setInterest(res.disease);
                setIsEmail(res.email ?? "");
                setEmailCode(res.email_verification_code.toString() ?? "");
                valueRefs[0].current = res.first_name ?? "";
                valueRefs[1].current = res.last_name ?? "";
                valueRefs[2].current = res.birthday;
                valueRefs[3].current = res.country;
                valueRefs[4].current = res.city;
                valueRefs[5].current = res.address ?? "";
                valueRefs[8].current = isEmail ?? "";
            });
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const value = e.target.value;

        setDataChanged(true);

        switch (inputName) {
            case "first_name":
                setFirst_Name(value);
                break;
            case "last_name":
                setLast_Name(value);
                break;
            case "country":
                setCountry(value);
                break;
            case "city":
                setCity(value);
                break;
            case "address":
                setAddress(value);
                break;
            case "number":
                setNumber(value);
                break;
            case "email":
                setIsEmail(value);
        }
    };

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
        setDataChanged(true);
    };

    const onBlurHandlerOnDate = () => {
        setIsShowValue(false);
    };

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
                            value={first_name}
                            name="first_name"
                            onBlur={handleOnBlur}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="Фамилия"
                            value={last_name}
                            name="last_name"
                            onBlur={handleOnBlur}
                            onChange={handleChange}
                        />
                        <Input
                            className={styles.inputDate}
                            type="text"
                            placeholder="Дата рождения"
                            value={isShowValue ? inputDateValue : birthday}
                            name="birthday"
                            onFocus={onFocusHandler}
                            onChange={handleInputChange}
                            onBlur={() => {
                                onBlurHandlerOnDate();
                                handleOnBlur();
                            }}
                        />
                        <Input
                            type="text"
                            placeholder="Страна"
                            value={country}
                            name="country"
                            onBlur={handleOnBlur}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="Город"
                            value={city}
                            name="city"
                            onBlur={handleOnBlur}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="Адрес"
                            value={address}
                            name="address"
                            onBlur={handleOnBlur}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            placeholder="Логин"
                            value={number}
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
                                value={interest?.toString()}
                            />
                        </label>
                    </form>
                    <form className={styles.form}>
                        <label className={styles.label}>
                            <Text type="p" color="#26262680">
                                Номер
                            </Text>
                            {number?.length ? (
                                <label className={styles.verify}>
                                    <Input
                                        type="text"
                                        placeholder="Телефон"
                                        value={number}
                                        name="number"
                                        onBlur={handleOnBlur}
                                        onChange={handleChange}
                                    />
                                    <span>Телефон подтвержден</span>
                                </label>
                            ) : (
                                <Input
                                    type="text"
                                    placeholder="Телефон"
                                    value={number}
                                    name="number"
                                    onBlur={handleOnBlur}
                                    onChange={handleChange}
                                    borderColor="#D64657"
                                />
                            )}
                        </label>
                        <label className={styles.label}>
                            <Text type="p" color="#26262680">
                                Эл. почта
                            </Text>
                            {emailСode?.length ? (
                                <label className={styles.verify}>
                                    <Input
                                        type="text"
                                        placeholder="Почта"
                                        value={isEmail}
                                        name="email"
                                        onBlur={handleOnBlur}
                                        onChange={handleChange}
                                    />
                                    <span>Почта подтверждена</span>
                                </label>
                            ) : (
                                <Input
                                    type="text"
                                    placeholder="Почта"
                                    value={isEmail}
                                    name="email"
                                    onBlur={handleOnBlur}
                                    onChange={handleChange}
                                    borderColor="#D64657"
                                />
                            )}
                        </label>
                    </form>
                </>
            ),
        },
        {
            id: useId(),
            label: "Записи",
            icon: {
                healthy: noteBlue,
                sick: noteRed,
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
            label: "Медицинская карта",
            icon: {
                healthy: clipBoardBlue,
                sick: clipBoardRed,
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
        {
            id: useId(),
            label: "Выход",
            icon: {
                healthy: logouBlue,
                sick: logouRed,
            },
            content: <div>params</div>,
        },
    ];

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.reminder}>
                    <ReminderBlock type="timer" />
                </div>
                <User
                    img={img}
                    last_name={last_name}
                    first_name={first_name}
                    role={role}
                />
                <div className={styles.settings}>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82">
                            Основные
                        </Text>
                        <div className={styles.items}>
                            {data.map((item) => (
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
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;
