import { FC, useId } from "react";
import { useNavigate } from "react-router";
import { IMenuData } from "../Menu/types";

import { TIsSelect } from "@/shared/model/store/types";
import { useMenu } from "@/shared/model/store";
import { useExtraCall } from "@/shared/model/store";

import extra from "/assets/extra-call.svg";
import cross from "/assets/cross.svg";
import styles from "./MobileMenu.module.scss";

export const MobileMenu: FC = () => {
    const navigate = useNavigate();
    const { setIsSelect } = useMenu();
    const { isOpen, setIsOpen } = useExtraCall();

    const handleNavigate = (path: string, select: TIsSelect | string) => {
        navigate(path);
        setIsSelect(select);
    };

    const data: IMenuData = {
        default: [
            {
                id: useId(),
                label: "Главная",
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
                path: "/",
            },
            {
                id: useId(),
                label: "Поиск",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ),
                path: "/search",
            },
            {
                id: useId(),
                label: "Сообщения",
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
                path: "/messages",
            },
            {
                id: useId(),
                label: "Уведомления",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12.0206 2.91016C8.71058 2.91016 6.02058 5.60016 6.02058 8.91016V11.8002C6.02058 12.4102 5.76058 13.3402 5.45058 13.8602L4.30058 15.7702C3.59058 16.9502 4.08058 18.2602 5.38058 18.7002C9.69058 20.1402 14.3406 20.1402 18.6506 18.7002C19.8606 18.3002 20.3906 16.8702 19.7306 15.7702L18.5806 13.8602C18.2806 13.3402 18.0206 12.4102 18.0206 11.8002V8.91016C18.0206 5.61016 15.3206 2.91016 12.0206 2.91016Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                        />
                        <path
                            d="M13.8699 3.19945C13.5599 3.10945 13.2399 3.03945 12.9099 2.99945C11.9499 2.87945 11.0299 2.94945 10.1699 3.19945C10.4599 2.45945 11.1799 1.93945 12.0199 1.93945C12.8599 1.93945 13.5799 2.45945 13.8699 3.19945Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.0195 19.0605C15.0195 20.7105 13.6695 22.0605 12.0195 22.0605C11.1995 22.0605 10.4395 21.7205 9.89953 21.1805C9.35953 20.6405 9.01953 19.8805 9.01953 19.0605"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                        />
                    </svg>
                ),
                path: "/notifications",
            },
        ],
        personal: [],
        admin: [],
    };

    return (
        <div className={styles.mobileMenu}>
            {data.default.map((item) => (
                <div
                    className={
                        location.pathname === item.path
                            ? `${styles.active}`
                            : undefined
                    }
                    onClick={() => handleNavigate(item.path, item.label)}
                >
                    {item.icon}
                </div>
            ))}
            <div className={styles.extraBtn} onClick={() => setIsOpen(!isOpen)}>
                <img src={isOpen ? cross : extra} alt="" />
            </div>
        </div>
    );
};
