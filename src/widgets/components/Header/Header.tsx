import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Text } from "@/shared";
import { useMenu, useUserData } from "@/shared/model/store";
import { useUserCondition, useNotification } from "@/shared/model/store";

import logo from "/assets/logo.svg";
import notification from "/assets/notification.svg";
import notificationActive from "/assets/notification-active.svg";
import styles from "./Header.module.scss";
import { Balance } from "../Balance/Balance";

export const Header: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isSelect, setIsSelect } = useMenu();
    const { condition } = useUserCondition();
    const { img } = useUserData();
    const { setIsNotification, isNotification } = useNotification();

    const sick = condition === "Болен";

    return (
        <header className={styles.header}>
            <div
                className={styles.box}
                style={sick ? { borderColor: "#F7E6E8" } : {}}
            >
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className={styles.nav}>
                <div className={styles.inner}>
                    <Text type="p">Главная</Text>
                    <span>/</span>
                    {isSelect === "Главная" || location.pathname === "/" ? (
                        <div
                            className={styles.text}
                            onClick={() => navigate("/create-event")}
                            style={{ cursor: "pointer" }}
                        >
                            <Text
                                color={`${sick ? "#D64657" : "#0064FA"}`}
                                type="p"
                            >
                                Создать событие
                            </Text>
                        </div>
                    ) : (
                        <div className={styles.text}>
                            <Text
                                color={`${sick ? "#D64657" : "#0064FA"}`}
                                type="p"
                            >
                                {isSelect}
                            </Text>
                        </div>
                    )}
                </div>
                <div className={styles.data}>
                    <Balance />
                    <div className={styles.notification}>
                        {styles ? ( // заглушка
                            <img
                                src={notification}
                                alt=""
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsNotification(!isNotification);
                                }}
                            />
                        ) : (
                            <img src={notificationActive} alt="" />
                        )}
                    </div>
                    <img
                        src={img}
                        alt=""
                        className={styles.avatar}
                        onClick={() => {
                            navigate("/profile");
                            setIsSelect("Аккаунт");
                        }}
                    />
                </div>
            </div>
        </header>
    );
};
