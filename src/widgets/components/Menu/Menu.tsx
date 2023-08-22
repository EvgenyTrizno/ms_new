import { FC, useId, MouseEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { EActive, IMenuData } from "./types";
import { TIsSelect } from "@/shared/model/store/types";

import { Text, Switcher } from "@/shared";
import { useUserCondition, useMenu, useUserData } from "@/shared/model/store";
import { PC, SMALL_LAPTOP } from "@/shared/utils";

import logo from "/assets/logo.svg";
import styles from "./Menu.module.scss";

export const Menu: FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { setIsSelect } = useMenu();
    const { condition } = useUserCondition();
    const { group } = useUserData();

    const handleNavigate = (path: EActive | string, select: TIsSelect) => {
        navigate(path);
        setIsSelect(select);
    };

    const sick = condition === "Болен";
    const active = `${styles.item} ${styles.active}`;
    const activeRed = `${styles.item} ${styles.activeRed}`;

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        const classList = e.currentTarget.classList;

        if (
            classList.contains(styles.active) ||
            classList.contains(styles.activeRed)
        ) {
            return;
        } else {
            classList.add(styles.itemHover);
        }
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        const classList = e.currentTarget.classList;

        if (classList.contains(styles.itemHover)) {
            classList.remove(styles.itemHover);
        }
    };

    const menuData: IMenuData = {
        default: [
            {
                id: useId(),
                label: "Главная",
                path: EActive.HOME,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36L2 17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12 17.99V14.99"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Поиск",
                path: EActive.SEARCH,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Сообщения",
                path: EActive.SMS,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17 20.5H7C4 20.5 2 19 2 15.5L2 8.5C2 5 4 3.5 7 3.5L17 3.5C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Записи",
                path: EActive.NOTE,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 2L8 2C4 2 2 4 2 8L2 21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12.9098 7.84015L7.71979 13.0302C7.51979 13.2302 7.3298 13.6202 7.2898 13.9002L7.0098 15.8802C6.9098 16.6002 7.40979 17.1002 8.12979 17.0002L10.1098 16.7202C10.3898 16.6802 10.7798 16.4902 10.9798 16.2902L16.1698 11.1002C17.0598 10.2102 17.4898 9.17015 16.1698 7.85015C14.8498 6.52015 13.8098 6.94015 12.9098 7.84015Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12.1699 8.58008C12.6099 10.1501 13.8399 11.3901 15.4199 11.8301"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Медицинская карта",
                path: EActive.MEDICALCARD,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 12.2002H15"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M8 16.2002H12.38"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M16 4.01953C19.33 4.19953 21 5.42953 21 9.99953V15.9995C21 19.9995 20 21.9995 15 21.9995H9C4 21.9995 3 19.9995 3 15.9995L3 9.99953C3 5.43953 4.67 4.19953 8 4.01953"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Местоположение",
                path: EActive.LOCATION,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.9999 13.4304C13.723 13.4304 15.1199 12.0336 15.1199 10.3104C15.1199 8.5873 13.723 7.19043 11.9999 7.19043C10.2768 7.19043 8.87988 8.5873 8.87988 10.3104C8.87988 12.0336 10.2768 13.4304 11.9999 13.4304Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                        />
                        <path
                            d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Настройки",
                path: EActive.SETTINGS,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.33 19.7004 5.02 18.5304 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Выход",
                path: "",
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.2395 22.2705H15.1095C10.6695 22.2705 8.52953 20.5205 8.15953 16.6005C8.11953 16.1905 8.41953 15.8205 8.83953 15.7805C9.23953 15.7405 9.61953 16.0505 9.65953 16.4605C9.94953 19.6005 11.4295 20.7705 15.1195 20.7705H15.2495C19.3195 20.7705 20.7595 19.3305 20.7595 15.2605V8.74047C20.7595 4.67047 19.3195 3.23047 15.2495 3.23047H15.1195C11.4095 3.23047 9.92953 4.42047 9.65953 7.62047C9.60953 8.03047 9.25953 8.34047 8.83953 8.30047C8.41953 8.27047 8.11953 7.90047 8.14953 7.49047C8.48953 3.51047 10.6395 1.73047 15.1095 1.73047H15.2395C20.1495 1.73047 22.2495 3.83047 22.2495 8.74047V15.2605C22.2495 20.1705 20.1495 22.2705 15.2395 22.2705Z"
                            fill="#B1B2B4"
                        />
                        <path
                            d="M15.0001 12.75H3.62012C3.21012 12.75 2.87012 12.41 2.87012 12C2.87012 11.59 3.21012 11.25 3.62012 11.25H15.0001C15.4101 11.25 15.7501 11.59 15.7501 12C15.7501 12.41 15.4101 12.75 15.0001 12.75Z"
                            fill="#B1B2B4"
                        />
                        <path
                            d="M5.85043 16.0998C5.66043 16.0998 5.47043 16.0298 5.32043 15.8798L1.97043 12.5298C1.68043 12.2398 1.68043 11.7598 1.97043 11.4698L5.32043 8.11984C5.61043 7.82984 6.09043 7.82984 6.38043 8.11984C6.67043 8.40984 6.67043 8.88984 6.38043 9.17984L3.56043 11.9998L6.38043 14.8198C6.67043 15.1098 6.67043 15.5898 6.38043 15.8798C6.24043 16.0298 6.04043 16.0998 5.85043 16.0998Z"
                            fill="#B1B2B4"
                        />
                    </svg>
                ),
            },
        ],
        personal: [
            {
                id: useId(),
                label: "Главная",
                path: EActive.HOME,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36L2 17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M12 17.99V14.99"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Сообщения",
                path: EActive.SMS,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17 20.5H7C4 20.5 2 19 2 15.5L2 8.5C2 5 4 3.5 7 3.5L17 3.5C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Пользователи",
                path: EActive.USERS,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Календарь",
                path: EActive.CALENDAR,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8L3 17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Настройки",
                path: EActive.SETTINGS,
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ),
            },
            {
                id: useId(),
                label: "Выход",
                path: "",
                icon: (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.24 22.27H15.11C10.67 22.27 8.53002 20.52 8.16002 16.6C8.12002 16.19 8.42002 15.82 8.84002 15.78C9.24002 15.74 9.62002 16.05 9.66002 16.46C9.95002 19.6 11.43 20.77 15.12 20.77H15.25C19.32 20.77 20.76 19.33 20.76 15.26V8.73998C20.76 4.66998 19.32 3.22998 15.25 3.22998H15.12C11.41 3.22998 9.93002 4.41998 9.66002 7.61998C9.61002 8.02998 9.26002 8.33998 8.84002 8.29998C8.42002 8.26998 8.12001 7.89998 8.15001 7.48998C8.49001 3.50998 10.64 1.72998 15.11 1.72998H15.24C20.15 1.72998 22.25 3.82998 22.25 8.73998V15.26C22.25 20.17 20.15 22.27 15.24 22.27Z"
                            fill="#B1B2B4"
                        />
                        <path
                            d="M15 12.75H3.62C3.21 12.75 2.87 12.41 2.87 12C2.87 11.59 3.21 11.25 3.62 11.25H15C15.41 11.25 15.75 11.59 15.75 12C15.75 12.41 15.41 12.75 15 12.75Z"
                            fill="#B1B2B4"
                        />
                        <path
                            d="M5.84994 16.0998C5.65994 16.0998 5.46994 16.0298 5.31994 15.8798L1.96994 12.5298C1.67994 12.2398 1.67994 11.7598 1.96994 11.4698L5.31994 8.11984C5.60994 7.82984 6.08994 7.82984 6.37994 8.11984C6.66994 8.40984 6.66994 8.88984 6.37994 9.17984L3.55994 11.9998L6.37994 14.8198C6.66994 15.1098 6.66994 15.5898 6.37994 15.8798C6.23994 16.0298 6.03994 16.0998 5.84994 16.0998Z"
                            fill="#B1B2B4"
                        />
                    </svg>
                ),
            },
        ],
    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={
                PC
                    ? `${styles.menu} ${styles.open}`
                    : SMALL_LAPTOP && isHovered
                    ? `${styles.menu} ${styles.open}`
                    : styles.menu
            }
        >
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.container}>
                {isHovered && SMALL_LAPTOP && (
                    <Text color="#B1B2B4" type="p">
                        Состояние:
                    </Text>
                )}
                <Switcher />
                <div className={styles.list}>
                    {group !== "Врачи" &&
                        menuData.default.map((item) => (
                            <div
                                key={item.id}
                                onClick={() =>
                                    handleNavigate(
                                        item.path,
                                        item.label as TIsSelect
                                    )
                                }
                                onMouseEnter={(e: MouseEvent<HTMLDivElement>) =>
                                    handleMouseEnter(e)
                                }
                                onMouseLeave={(e: MouseEvent<HTMLDivElement>) =>
                                    handleMouseLeave(e)
                                }
                                className={
                                    location.pathname === item.path && sick
                                        ? activeRed
                                        : location.pathname === item.path
                                        ? active
                                        : styles.item
                                }
                            >
                                {item.icon}
                                <Text type="p">{item.label}</Text>
                            </div>
                        ))}
                    {group === "Врачи" &&
                        menuData.personal.map((item) => (
                            <div
                                key={item.id}
                                onClick={() =>
                                    handleNavigate(
                                        item.path,
                                        item.label as TIsSelect
                                    )
                                }
                                onMouseEnter={(e: MouseEvent<HTMLDivElement>) =>
                                    handleMouseEnter(e)
                                }
                                onMouseLeave={(e: MouseEvent<HTMLDivElement>) =>
                                    handleMouseLeave(e)
                                }
                                className={
                                    location.pathname === item.path && sick
                                        ? activeRed
                                        : location.pathname === item.path
                                        ? active
                                        : styles.item
                                }
                            >
                                {item.icon}
                                <Text type="p">{item.label}</Text>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
