import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Text } from "../../../shared";
import { useMenu } from "../../../shared/model/store";

import logo from "/assets/logo.svg";
import man from "/assets/man.jpg";
import notification from "/assets/notification.svg";
import notificationActive from "/assets/notification-active.svg";
import styles from "./Header.module.scss";

export const Header: FC = () => {
    const navigate = useNavigate();
    const { isSelect, setIsSelect } = useMenu();

    return (
        <header className={styles.header}>
            <div className={styles.box}>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className={styles.nav}>
                <div className={styles.inner}>
                    <Text type="p">Главная</Text>
                    <span>/</span>
                    {isSelect === "Главная" ? (
                        <div
                            className={styles.text}
                            onClick={() => navigate("/create-event")}
                            style={{ cursor: "pointer" }}
                        >
                            <Text color="#0064FA" type="p">
                                Создать событие
                            </Text>
                        </div>
                    ) : (
                        <div className={styles.text}>
                            <Text color="#0064FA" type="p">
                                {isSelect}
                            </Text>
                        </div>
                    )}
                </div>
                <div className={styles.data}>
                    <div className={styles.notification}>
                        {styles ? ( // заглушка
                            <img src={notification} alt="" />
                        ) : (
                            <img src={notificationActive} alt="" />
                        )}
                    </div>
                    <img
                        src={man}
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
