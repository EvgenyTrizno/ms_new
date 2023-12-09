import { FC } from "react";
// import { useNavigate } from "react-router";
// import { IProfileParamsItemsData } from "./types";

import { Layout } from "../Layout";
import {
    CustomMobileHeader,
    ReminderBlock,
    // User,
} from "@/widgets";
// import { BackArrow } from "@/shared";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { User } from "./ui/UserInfo";
import { MainData } from "./ui/MainData";

import styles from "./styles.module.scss";

const ProfilePage: FC = () => {
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    // const [first_name, setFirst_Name] = useState<string>("");
    // const [last_name, setLast_Name] = useState<string>("");
    // const [birthday, setBirthday] = useState<string>("");
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

    // const sick = "Болен";

    // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const currentValue = e.target.value;
    //     const digitsOnly = currentValue.replace(/\D/g, "");

    //     let formattedDate = "ГГГГ-ММ-ДД";

    //     for (let i = 0; i < digitsOnly.length; i++) {
    //         if (i === 0) {
    //             formattedDate = formattedDate.replace("Г", digitsOnly[i]);
    //         } else if (i === 1) {
    //             formattedDate = formattedDate.replace("Г", digitsOnly[i]);
    //         } else if (i === 2) {
    //             formattedDate = formattedDate.replace("Г", digitsOnly[i]);
    //         } else if (i === 3) {
    //             formattedDate = formattedDate.replace("Г", digitsOnly[i]);
    //         } else if (i === 4) {
    //             formattedDate = formattedDate.replace("М", digitsOnly[i]);
    //         } else if (i === 5) {
    //             formattedDate = formattedDate.replace("М", digitsOnly[i]);
    //         } else if (i === 6) {
    //             formattedDate = formattedDate.replace("Д", digitsOnly[i]);
    //         } else if (i === 7) {
    //             formattedDate = formattedDate.replace("Д", digitsOnly[i]);
    //         }
    //     }

    //     // setInputDateValue(formattedDate);
    //     // setBirthday(formattedDate);
    //     // setDataChanged(true);
    // };

    // const onBlurHandlerOnDate = () => {
    //     setIsShowValue(false);
    // };

    // const onFocusHandler = () => {
    //     setIsShowValue(true);
    // };

    // const mobileData = {
    //     main: [
    //         "Имя",
    //         "Фамилия",
    //         "Дата рождения",
    //         "Страна",
    //         "Город",
    //         "Номер телефона",
    //         "Логин",
    //     ],
    //     interest: ["Интерес"],
    //     number: ["Номер телефона"],
    //     mail: ["Эл. Почта"],
    // };

    return (
        <Layout>
            {(MOBILE || TABLET) && <CustomMobileHeader back text="Профиль" />}
            <Container>
                {(PC || SMALL_LAPTOP || LAPTOP) && (
                    <>
                        <ReminderBlock type="timer" width="max-content" />
                        <User />
                    </>
                )}
                <MainData />
            </Container>
        </Layout>
    );
};

export default ProfilePage;
