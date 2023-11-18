import { FC, useState, useId, ChangeEvent } from "react";
// import { useNavigate } from "react-router";
import { IProfileParamsItemsData } from "./types";

import { Layout } from "../Layout";
import {
    CustomMobileHeader,
    ReminderBlock,
    // User,
} from "@/widgets";
// import { BackArrow } from "@/shared";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { User } from "./ui/UserInfo";

import styles from "./styles.module.scss";
import { MainData } from "./ui/MainData";

const ProfilePage: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
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

    const sick = "Болен";

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

        // setInputDateValue(formattedDate);
        setBirthday(formattedDate);
        // setDataChanged(true);
    };

    // const onBlurHandlerOnDate = () => {
    //     setIsShowValue(false);
    // };

    // const onFocusHandler = () => {
    //     setIsShowValue(true);
    // };

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
            <Container>
                {(PC || SMALL_LAPTOP || LAPTOP) && (
                    <>
                        {/* <div className={styles.reminder}> */}
                        {/* <ReminderBlock type="timer" width="max-content" /> */}
                        {/* </div> */}
                        <User />
                    </>
                )}
                <div className={styles.settings}>
                    <div className={styles.box}>
                        <Text type="p" color="#7D7F82" fz="14px">
                            Основные
                        </Text>
                        <MainData />
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
            </Container>
        </Layout>
    );
};

export default ProfilePage;
