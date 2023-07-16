import { FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { EActive } from "./types";
import { TIsSelect } from "@/shared/model/store/types";

import { Text, Icons, Switcher } from "@/shared";
import { useMenu } from "@/shared/model/store";
import { useUserCondition } from "@/shared/model/store";

import styles from "./Menu.module.scss";

export const Menu: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name } = useParams();
    const { setIsSelect } = useMenu();
    const { condition } = useUserCondition();

    const handleNavigate = (path: EActive, select: TIsSelect) => {
        navigate(path);
        setIsSelect(select);
    };

    const sick = condition === "Болен";

    const menuData = [
        {
            label: "Главная",
            path: EActive.HOME,
            icon: {
                healthy: "",
                sick: "",
            },
        },
    ];

    return (
        <div className={styles.menu}>
            <Text color="#B1B2B4" type="p">
                Состояние:
            </Text>
            <Switcher />
            <div className={styles.list}>
                <div
                    onClick={() => handleNavigate(EActive.HOME, "Главная")}
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
                    onClick={() => handleNavigate(EActive.SEARCH, "Поиск")}
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
                    onClick={() => handleNavigate(EActive.SMS, "Сообщения")}
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
                    onClick={() => handleNavigate(EActive.NOTE, "Записи")}
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
                    onClick={() =>
                        handleNavigate(EActive.MEDICALCARD, "Медицинская карта")
                    }
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
                    onClick={() =>
                        handleNavigate(EActive.LOCATION, "Местоположение")
                    }
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
                    onClick={() =>
                        handleNavigate(EActive.SETTINGS, "Настройки")
                    }
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
