import { FC } from "react";
import { useLocation, useNavigate } from "react-router";
import { EPath } from "./types.";

import { Icons } from "@/shared";
import { TIsSelect } from "@/shared/model/store/types";
import { useMenu } from "@/shared/model/store";

import extra from "/assets/extra-call.svg";
import notification from "/assets/notification.svg";
import styles from "./MobileMenu.module.scss";

export const MobileMenu: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setIsSelect } = useMenu();

    const handleNavigate = (path: EPath, select: TIsSelect) => {
        navigate(path);
        setIsSelect(select);
    };

    return (
        <div className={styles.mobileMenu}>
            <div className={styles.box}>
                <div
                    onClick={() => handleNavigate(EPath.HOME, "Главная")}
                    className={
                        location.pathname === EPath.HOME
                            ? `${styles.active}`
                            : undefined
                    }
                >
                    <Icons icon="home" />
                </div>
                <div
                    className={
                        location.pathname === EPath.SEARCH
                            ? `${styles.active}`
                            : undefined
                    }
                    onClick={() => handleNavigate(EPath.SEARCH, "Поиск")}
                >
                    <Icons icon="search" />
                </div>
            </div>
            <div className={styles.extraBtn}>
                <img src={extra} alt="" />
            </div>
            <div className={styles.box}>
                <div
                    className={
                        location.pathname === EPath.MESSAGES
                            ? `${styles.active}`
                            : undefined
                    }
                    onClick={() => handleNavigate(EPath.MESSAGES, "Сообщения")}
                >
                    <Icons icon="envelope" />
                </div>
                <img src={notification} alt="" />
            </div>
        </div>
    );
};
