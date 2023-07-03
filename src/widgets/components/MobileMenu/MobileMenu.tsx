import { FC } from "react";
import { useLocation, useNavigate } from "react-router";

import { Icons } from "@/shared";
import { EActive } from "../Menu/types";
import { TIsSelect } from "@/shared/model/store/types";
import { useMenu } from "@/shared/model/store";

import extra from "/assets/extra-call.svg";
import notification from "/assets/notification.svg";
import styles from "./MobileMenu.module.scss";

export const MobileMenu: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setIsSelect } = useMenu();

    const handleNavigate = (path: EActive, select: TIsSelect) => {
        navigate(path);
        setIsSelect(select);
    };

    return (
        <div className={styles.mobileMenu}>
            <div className={styles.box}>
                <div
                    onClick={() => handleNavigate(EActive.HOME, "Главная")}
                    className={
                        location.pathname === EActive.HOME
                            ? `${styles.active}`
                            : undefined
                    }
                >
                    <Icons icon="home" />
                </div>
                <div
                    className={
                        location.pathname === EActive.SEARCH
                            ? `${styles.active}`
                            : undefined
                    }
                    onClick={() => handleNavigate(EActive.SEARCH, "Поиск")}
                >
                    <Icons icon="search" />
                </div>
            </div>
            <div className={styles.extraBtn}>
                <div className={styles.btn}>
                    <img src={extra} alt="" />
                </div>
            </div>
            <div className={styles.box}>
                <div
                    className={
                        location.pathname === EActive.SMS
                            ? `${styles.active}`
                            : undefined
                    }
                    onClick={() => handleNavigate(EActive.SMS, "Сообщения")}
                >
                    <Icons icon="envelope" />
                </div>
                <img src={notification} alt="" />
            </div>
        </div>
    );
};
