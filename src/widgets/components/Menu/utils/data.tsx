import { ROUTES } from "@/shared/utils/PATHS";
import { ReactElement } from "react";

export interface IData {
    label: string;
    path: string;
    icon: ReactElement;
    disabled?: boolean;
}
export interface IMenuData {
    default: IData[];
    personal: IData[];
    admin: IData[];
}

export const menuData: IMenuData = {
    default: [
        {
            label: "Главная",
            path: ROUTES.main.path,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36L2 17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 17.99V14.99"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Поиск",
            path: ROUTES.search.path,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                    <path 
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" 
                        stroke="#B1B2B4" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                    />
                    <path 
                        d="M20.9984 21.0004L16.6484 16.6504" 
                        stroke="#B1B2B4"
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Сообщения",
            path: ROUTES.messages.path,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M17 20.5H7C4 20.5 2 19 2 15.5L2 8.5C2 5 4 3.5 7 3.5L17 3.5C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Записи",
            path: ROUTES.notes.path,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M16 2L8 2C4 2 2 4 2 8L2 21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.9098 7.84015L7.71979 13.0302C7.51979 13.2302 7.3298 13.6202 7.2898 13.9002L7.0098 15.8802C6.9098 16.6002 7.40979 17.1002 8.12979 17.0002L10.1098 16.7202C10.3898 16.6802 10.7798 16.4902 10.9798 16.2902L16.1698 11.1002C17.0598 10.2102 17.4898 9.17015 16.1698 7.85015C14.8498 6.52015 13.8098 6.94015 12.9098 7.84015Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.1699 8.58008C12.6099 10.1501 13.8399 11.3901 15.4199 11.8301"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Мед.карта",
            path: ROUTES.medicalCard.path,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M8 12.2002H15"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 16.2002H12.38"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16 4.01953C19.33 4.19953 21 5.42953 21 9.99953V15.9995C21 19.9995 20 21.9995 15 21.9995H9C4 21.9995 3 19.9995 3 15.9995L3 9.99953C3 5.43953 4.67 4.19953 8 4.01953"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Местоположение",
            path: ROUTES.geolocation.path,
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M9.99844 11.1922C11.4344 11.1922 12.5984 10.0281 12.5984 8.59219C12.5984 7.15625 11.4344 5.99219 9.99844 5.99219C8.5625 5.99219 7.39844 7.15625 7.39844 8.59219C7.39844 10.0281 8.5625 11.1922 9.99844 11.1922Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                    />
                    <path
                        d="M3.0148 7.0763C4.65646 -0.140363 15.3481 -0.132029 16.9815 7.08464C17.9398 11.318 15.3065 14.9013 12.9981 17.118C11.3231 18.7346 8.67313 18.7346 6.9898 17.118C4.6898 14.9013 2.05646 11.3096 3.0148 7.0763Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                    />
                </svg>
            ),
        },
        {
            label: "Настройки",
            path: ROUTES.settings.path,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.33 19.7004 5.02 18.5304 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
    ],
    personal: [
        {
            label: "Главная",
            path: ROUTES.main.path,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36L2 17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 17.99V14.99"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Пользователи",
            path: ROUTES.users.path,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Статистика",
            path: "",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_4576_91576)">
                        <path
                            d="M4.91719 14.168H15.0755C16.6589 14.168 17.4922 13.3346 17.4922 11.7513V1.66797H2.49219V11.7513C2.50052 13.3346 3.33386 14.168 4.91719 14.168Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1.66797 1.66797H18.3346"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.66797 18.3346L10.0013 16.668V14.168"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.3333 18.3346L10 16.668"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.25 9.16797L8.87499 6.9763C9.08333 6.8013 9.35833 6.8513 9.49999 7.08464L10.5 8.7513C10.6417 8.98464 10.9167 9.02631 11.125 8.85964L13.75 6.66797"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_4576_91576">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            label: "Сообщения",
            path: ROUTES.messages.path,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M17 20.5H7C4 20.5 2 19 2 15.5L2 8.5C2 5 4 3.5 7 3.5L17 3.5C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
        {
            label: "Настройки",
            path: "",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
        },
    ],
    admin: [
        {
            label: "Сайт и приложение",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M14.1666 8.33268H15.8333C17.5 8.33268 18.3333 7.49935 18.3333 5.83268V4.16602C18.3333 2.49935 17.5 1.66602 15.8333 1.66602H14.1666C12.5 1.66602 11.6666 2.49935 11.6666 4.16602V5.83268C11.6666 7.49935 12.5 8.33268 14.1666 8.33268Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.16663 18.3327H5.83329C7.49996 18.3327 8.33329 17.4993 8.33329 15.8327V14.166C8.33329 12.4993 7.49996 11.666 5.83329 11.666H4.16663C2.49996 11.666 1.66663 12.4993 1.66663 14.166V15.8327C1.66663 17.4993 2.49996 18.3327 4.16663 18.3327Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4.99996 8.33268C6.84091 8.33268 8.33329 6.8403 8.33329 4.99935C8.33329 3.1584 6.84091 1.66602 4.99996 1.66602C3.15901 1.66602 1.66663 3.1584 1.66663 4.99935C1.66663 6.8403 3.15901 8.33268 4.99996 8.33268Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15 18.3327C16.8409 18.3327 18.3333 16.8403 18.3333 14.9993C18.3333 13.1584 16.8409 11.666 15 11.666C13.159 11.666 11.6666 13.1584 11.6666 14.9993C11.6666 16.8403 13.159 18.3327 15 18.3327Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            path: ROUTES.app.path,
            disabled: false,
        },
        {
            label: "Персонал",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M9.99988 9.99805C12.0709 9.99805 13.7499 8.31911 13.7499 6.24805C13.7499 4.17698 12.0709 2.49805 9.99988 2.49805C7.92881 2.49805 6.24988 4.17698 6.24988 6.24805C6.24988 8.31911 7.92881 9.99805 9.99988 9.99805Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M16.4426 17.5C16.4426 14.5975 13.5551 12.25 10.0001 12.25C6.44511 12.25 3.55762 14.5975 3.55762 17.5"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            path: "/personal",
            disabled: false,
        },
        {
            label: "Карта",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M1.90833 6.48103V14.5894C1.90833 16.1727 3.03333 16.8227 4.39999 16.0394L6.35833 14.9227C6.78333 14.681 7.49166 14.656 7.93333 14.881L12.3083 17.0727C12.75 17.2894 13.4583 17.2727 13.8833 17.031L17.4917 14.9644C17.95 14.6977 18.3333 14.0477 18.3333 13.5144V5.40603C18.3333 3.8227 17.2083 3.1727 15.8417 3.95603L13.8833 5.0727C13.4583 5.31437 12.75 5.33937 12.3083 5.11437L7.93333 2.93103C7.49166 2.71437 6.78333 2.73103 6.35833 2.9727L2.74999 5.03937C2.28333 5.30603 1.90833 5.95603 1.90833 6.48103Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.1333 3.33398V14.1673"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.1083 5.51367V16.6637"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            path: ROUTES.map.path,
            disabled: false,
        },
        {
            label: "Соц.сети и почта",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_827_13535)">
                        <path
                            d="M5.05246 5.85214C5.02096 5.84764 4.98046 5.84764 4.94446 5.85214C4.15246 5.82514 3.52246 5.17706 3.52246 4.38047C3.52246 3.56587 4.17946 2.9043 4.99846 2.9043C5.81296 2.9043 6.47446 3.56587 6.47446 4.38047C6.46996 5.17706 5.84446 5.82514 5.05246 5.85214Z"
                            stroke="#B1B2B4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.03206 8.82233C7.23106 9.55592 6.16906 10.0015 4.99906 10.0015C3.82906 10.0015 2.76706 9.55592 1.96606 8.82233C2.01106 8.39928 2.28106 7.98524 2.76256 7.6612C3.99556 6.8421 6.01156 6.8421 7.23556 7.6612C7.71706 7.98524 7.98706 8.39928 8.03206 8.82233Z"
                            stroke="#B1B2B4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5 10.0011C7.48528 10.0011 9.5 7.9861 9.5 5.50053C9.5 3.01495 7.48528 1 5 1C2.51472 1 0.5 3.01495 0.5 5.50053C0.5 7.9861 2.51472 10.0011 5 10.0011Z"
                            stroke="#B1B2B4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.4625 10.3931C15.4345 10.3891 15.3985 10.3891 15.3665 10.3931C14.6625 10.3691 14.1025 9.79315 14.1025 9.08525C14.1025 8.36135 14.6865 7.77344 15.4145 7.77344C16.1385 7.77344 16.7265 8.36135 16.7265 9.08525C16.7225 9.79315 16.1665 10.3691 15.4625 10.3931Z"
                            stroke="#B1B2B4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18.1107 13.0348C17.3987 13.6867 16.4547 14.0827 15.4147 14.0827C14.3747 14.0827 13.4307 13.6867 12.7188 13.0348C12.7588 12.6589 12.9987 12.2909 13.4268 12.003C14.5228 11.2751 16.3147 11.2751 17.4027 12.003C17.8307 12.2909 18.0707 12.6589 18.1107 13.0348Z"
                            stroke="#B1B2B4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.415 14.0809C17.6242 14.0809 19.415 12.2903 19.415 10.0815C19.415 7.87264 17.6242 6.08203 15.415 6.08203C13.2059 6.08203 11.415 7.87264 11.415 10.0815C11.415 12.2903 13.2059 14.0809 15.415 14.0809Z"
                            stroke="#B1B2B4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.70855 15.7702C6.68405 15.7667 6.65255 15.7667 6.62455 15.7702C6.00855 15.7492 5.51855 15.2454 5.51855 14.6261C5.51855 13.9928 6.02955 13.4785 6.66655 13.4785C7.30005 13.4785 7.81455 13.9928 7.81455 14.6261C7.81105 15.2454 7.32455 15.7492 6.70855 15.7702Z"
                            stroke="#B1B2B4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.02464 18.0834C8.40164 18.6537 7.57564 19.0001 6.66564 19.0001C5.75564 19.0001 4.92964 18.6537 4.30664 18.0834C4.34164 17.7545 4.55164 17.4326 4.92614 17.1807C5.88514 16.5439 7.45314 16.5439 8.40514 17.1807C8.77964 17.4326 8.98964 17.7545 9.02464 18.0834Z"
                            stroke="#B1B2B4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.66602 18.9976C8.59901 18.9976 10.166 17.4311 10.166 15.4988C10.166 13.5665 8.59901 12 6.66602 12C4.73302 12 3.16602 13.5665 3.16602 15.4988C3.16602 17.4311 4.73302 18.9976 6.66602 18.9976Z"
                            stroke="#B1B2B4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <rect
                            x="9.37402"
                            y="6.66797"
                            width="3.30018"
                            height="0.9"
                            transform="rotate(30 9.37402 6.66797)"
                            fill="#B1B2B4"
                        />
                        <rect
                            x="9.48926"
                            y="13.8418"
                            width="3.34926"
                            height="0.9"
                            transform="rotate(-30 9.48926 13.8418)"
                            fill="#B1B2B4"
                        />
                        <rect
                            x="5.75293"
                            y="12.3711"
                            width="2.63618"
                            height="0.9"
                            transform="rotate(-106.604 5.75293 12.3711)"
                            fill="#B1B2B4"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_827_13535">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            path: ROUTES.social.path,
            disabled: false,
        },
        {
            label: "Запросы",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_827_13554)">
                        <path
                            d="M14.1666 15.3588H10.8333L7.12495 17.8254C6.57495 18.1921 5.83329 17.8004 5.83329 17.1338V15.3588C3.33329 15.3588 1.66663 13.6921 1.66663 11.1921V6.19206C1.66663 3.69206 3.33329 2.02539 5.83329 2.02539H14.1666C16.6666 2.02539 18.3333 3.69206 18.3333 6.19206V11.1921C18.3333 13.6921 16.6666 15.3588 14.1666 15.3588Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 9.4668V9.29183C10 8.72516 10.35 8.42515 10.7 8.18348C11.0417 7.95015 11.3833 7.65016 11.3833 7.10016C11.3833 6.33349 10.7667 5.7168 10 5.7168C9.23334 5.7168 8.6167 6.33349 8.6167 7.10016"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.99629 11.4577H10.0038"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_827_13554">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            path: ROUTES.requests.path,
            disabled: false,
        },
        {
            label: "Лиды",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_827_13562)">
                        <path
                            d="M18.3083 15.2783C18.3083 15.5783 18.2416 15.8866 18.1 16.1866C17.9583 16.4866 17.775 16.7699 17.5333 17.0366C17.125 17.4866 16.675 17.8116 16.1666 18.0199C15.6666 18.2283 15.125 18.3366 14.5416 18.3366C13.6916 18.3366 12.7833 18.1366 11.825 17.7283C10.8666 17.3199 9.90829 16.7699 8.95829 16.0783C7.99996 15.3783 7.09163 14.6033 6.22496 13.7449C5.36663 12.8783 4.59163 11.9699 3.89996 11.0199C3.21663 10.0699 2.66663 9.11992 2.26663 8.17826C1.86663 7.22826 1.66663 6.31992 1.66663 5.45326C1.66663 4.88659 1.76663 4.34492 1.96663 3.84492C2.16663 3.33659 2.48329 2.86992 2.92496 2.45326C3.45829 1.92826 4.04163 1.66992 4.65829 1.66992C4.89163 1.66992 5.12496 1.71992 5.33329 1.81992C5.54996 1.91992 5.74163 2.06992 5.89163 2.28659L7.82496 5.01159C7.97496 5.21992 8.08329 5.41159 8.15829 5.59492C8.23329 5.76992 8.27496 5.94492 8.27496 6.10326C8.27496 6.30326 8.21663 6.50325 8.09996 6.69492C7.99163 6.88659 7.83329 7.08659 7.63329 7.28659L6.99996 7.94492C6.90829 8.03659 6.86663 8.14492 6.86663 8.27826C6.86663 8.34492 6.87496 8.40325 6.89163 8.46992C6.91663 8.53659 6.94163 8.58659 6.95829 8.63659C7.10829 8.91159 7.36663 9.26992 7.73329 9.70326C8.10829 10.1366 8.50829 10.5783 8.94163 11.0199C9.39163 11.4616 9.82496 11.8699 10.2666 12.2449C10.7 12.6116 11.0583 12.8616 11.3416 13.0116C11.3833 13.0283 11.4333 13.0533 11.4916 13.0783C11.5583 13.1033 11.625 13.1116 11.7 13.1116C11.8416 13.1116 11.95 13.0616 12.0416 12.9699L12.675 12.3449C12.8833 12.1366 13.0833 11.9783 13.275 11.8783C13.4666 11.7616 13.6583 11.7033 13.8666 11.7033C14.025 11.7033 14.1916 11.7366 14.375 11.8116C14.5583 11.8866 14.75 11.9949 14.9583 12.1366L17.7166 14.0949C17.9333 14.2449 18.0833 14.4199 18.175 14.6283C18.2583 14.8366 18.3083 15.0449 18.3083 15.2783Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M13.5 6.50391H17.5M13.5 6.50391V2.50391V6.50391Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_827_13562">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            path: "/leads",
            disabled: false,
        },
        {
            label: "Продажи",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_828_13705)">
                        <path
                            d="M8.42504 9.29297H6.21671C5.69171 9.29297 5.26672 9.71793 5.26672 10.2429V14.5096H8.42504V9.29297V9.29297Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.6344 5.5H9.36771C8.84271 5.5 8.41772 5.92501 8.41772 6.45001V14.5H11.5761V6.45001C11.5761 5.92501 11.1594 5.5 10.6344 5.5Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13.7901 10.709H11.5818V14.5007H14.7401V11.659C14.7318 11.134 14.3068 10.709 13.7901 10.709Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.49996 18.3327H12.5C16.6666 18.3327 18.3333 16.666 18.3333 12.4993V7.49935C18.3333 3.33268 16.6666 1.66602 12.5 1.66602H7.49996C3.33329 1.66602 1.66663 3.33268 1.66663 7.49935V12.4993C1.66663 16.666 3.33329 18.3327 7.49996 18.3327Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_828_13705">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            path: "/sales",
            disabled: false,
        },
        {
            label: "Реклама",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_828_13715)">
                        <path
                            d="M5.73328 15.1254V13.4004"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                        />
                        <path
                            d="M10 15.1258V11.6758"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                        />
                        <path
                            d="M14.2666 15.1247V9.94141"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                        />
                        <path
                            d="M14.2667 4.875L13.8834 5.325C11.7584 7.80833 8.9084 9.56667 5.7334 10.3583"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                        />
                        <path
                            d="M11.825 4.875H14.2666V7.30833"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.49996 18.3327H12.5C16.6666 18.3327 18.3333 16.666 18.3333 12.4993V7.49935C18.3333 3.33268 16.6666 1.66602 12.5 1.66602H7.49996C3.33329 1.66602 1.66663 3.33268 1.66663 7.49935V12.4993C1.66663 16.666 3.33329 18.3327 7.49996 18.3327Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_828_13715">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            path: "/advertisement",
            disabled: false,
        },
        {
            label: "Бот",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect
                        x="1.625"
                        y="5.05273"
                        width="16.75"
                        height="12.4643"
                        rx="2.80357"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                    />
                    <path
                        d="M9.35718 1.625C9.35718 1.27982 9.637 1 9.98218 1C10.3274 1 10.6072 1.27982 10.6072 1.625V4.42857H9.35718V1.625Z"
                        fill="#B1B2B4"
                    />
                    <rect
                        x="4.21436"
                        y="13.8574"
                        width="3"
                        height="1.25"
                        rx="0.625"
                        fill="#B1B2B4"
                    />
                    <rect
                        x="8.50012"
                        y="13.8574"
                        width="3"
                        height="1.25"
                        rx="0.625"
                        fill="#B1B2B4"
                    />
                    <rect
                        x="12.7858"
                        y="13.8574"
                        width="3"
                        height="1.25"
                        rx="0.625"
                        fill="#B1B2B4"
                    />
                    <circle
                        cx="6.57145"
                        cy="10.0003"
                        r="1.51786"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                    />
                    <circle
                        cx="13.4286"
                        cy="10.0003"
                        r="1.51786"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                    />
                </svg>
            ),
            path: "/bot",
            disabled: false,
        },
    ],
};
