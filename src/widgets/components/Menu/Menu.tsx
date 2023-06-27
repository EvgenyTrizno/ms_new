import { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { EActive } from "./types";

import { Text } from "../../../shared/ui/Text/Text";
import { Switcher } from "../../../shared";
import { Icons } from "../../../shared/ui/Icons/Icons";
import { useMenu } from "../../../shared/model/store";

import styles from "./Menu.module.scss";

export const Menu: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name } = useParams();
    const { setIsSelect } = useMenu();

    return (
        <div className={styles.menu}>
            <Text color="#B1B2B4" type="p">
                Состояние:
            </Text>
            <Switcher />
            <div className={styles.list}>
                <div
                    onClick={() => {
                        navigate("/");
                        setIsSelect("Главная");
                    }}
                    className={
                        location.pathname === EActive.HOME ||
                        location.pathname === EActive.PROFILE
                            ? `${styles.item} ${styles.active}`
                            : styles.item
                    }
                >
                    <Icons icon="home" />
                    <Text type="p">Главная</Text>
                </div>
                <div
                    onClick={() => {
                        navigate("/search");
                        setIsSelect("Поиск");
                    }}
                    className={
                        location.pathname === EActive.SEARCH
                            ? `${styles.item} ${styles.active}`
                            : styles.item
                    }
                >
                    <Icons icon="search" />
                    <Text type="p">Поиск</Text>
                </div>
                <div
                    onClick={() => {
                        navigate("/messages");
                        setIsSelect("Сообщения");
                    }}
                    className={
                        location.pathname === EActive.SMS
                            ? `${styles.item} ${styles.active}`
                            : styles.item
                    }
                >
                    <Icons icon="envelope" />
                    <Text type="p">Сообщения</Text>
                </div>
                <div
                    onClick={() => {
                        navigate("/notes");
                        setIsSelect("Записи");
                    }}
                    className={
                        location.pathname === EActive.NOTE ||
                        location.pathname === `${EActive.NOTE}/${name}`
                            ? `${styles.item} ${styles.active}`
                            : styles.item
                    }
                >
                    <Icons icon="note" />
                    <Text type="p">Записи</Text>
                </div>
                <div
                    onClick={() => {
                        navigate("/medical-card");
                        setIsSelect("Медицинская карта");
                    }}
                    className={
                        location.pathname === EActive.MEDICALCARD
                            ? `${styles.item} ${styles.active}`
                            : styles.item
                    }
                >
                    <Icons icon="medical card" />
                    <Text type="p">Медицинская карта</Text>
                </div>
                <div
                    onClick={() => {
                        navigate("/location");
                        setIsSelect("Местоположение");
                    }}
                    className={
                        location.pathname === EActive.LOCATION
                            ? `${styles.item} ${styles.active}`
                            : styles.item
                    }
                >
                    <Icons icon="marker" />
                    <Text type="p">Местоположение</Text>
                </div>
                <div
                    onClick={() => {
                        navigate("/settings");
                        setIsSelect("Настройки");
                    }}
                    className={
                        location.pathname === EActive.SETTINGS
                            ? `${styles.item} ${styles.active}`
                            : styles.item
                    }
                >
                    <Icons icon="settings" />
                    <Text type="p">Настройки</Text>
                </div>
                <div
                    onClick={() => console.log("выход")}
                    className={
                        location.pathname === EActive.LOGOUT
                            ? `${styles.item} ${styles.active}`
                            : styles.item
                    }
                >
                    <Icons icon="logout" />
                    <Text type="p">Выход</Text>
                </div>
            </div>
        </div>
    );
};
