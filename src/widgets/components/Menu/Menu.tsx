import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { EActive } from "./types";

import { Text } from "../../../shared/ui/Text/Text";
import { Switcher } from "../../../shared";
import { Icons } from "../../../shared/ui/Icons/Icons";

import styles from "./Menu.module.scss";

export const Menu: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
                    }}
                    className={
                        location.pathname === EActive.HOME
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
                    }}
                    className={
                        location.pathname === EActive.NOTE ||
                        location.pathname === "notes/:name"
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
