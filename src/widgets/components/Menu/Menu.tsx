import { FC, useId, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router";
import { EActive } from "./types";
import { TIsSelect } from "@/shared/model/store/types";

import { Text, Icons, Switcher } from "@/shared";
import { useMenu } from "@/shared/model/store";
import { useUserCondition } from "@/shared/model/store";

import styles from "./Menu.module.scss";

export const Menu: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setIsSelect } = useMenu();
    const { condition } = useUserCondition();

    const handleNavigate = (path: EActive | string, select: TIsSelect) => {
        navigate(path);
        setIsSelect(select);
    };

    const sick = condition === "Болен";
    const active = `${styles.item} ${styles.active}`;
    const activeRed = `${styles.item} ${styles.activeRed}`;

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        if (
            e.currentTarget.classList.contains(styles.active) ||
            e.currentTarget.classList.contains(styles.activeRed)
        ) {
            return;
        } else {
            e.currentTarget.classList.add(styles.itemHover);
        }
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.classList.contains(styles.itemHover)) {
            e.currentTarget.classList.remove(styles.itemHover);
        }
    };

    const menuData = [
        {
            id: useId(),
            label: "Главная",
            path: EActive.HOME,
            icon: "home",
        },
        {
            id: useId(),
            label: "Поиск",
            path: EActive.SEARCH,
            icon: "search",
        },
        {
            id: useId(),
            label: "Сообщения",
            path: EActive.SMS,
            icon: "envelope",
        },
        {
            id: useId(),
            label: "Записи",
            path: EActive.NOTE,
            icon: "note",
        },
        {
            id: useId(),
            label: "Медицинская карта",
            path: EActive.MEDICALCARD,
            icon: "medical card",
        },
        {
            id: useId(),
            label: "Местоположение",
            path: EActive.LOCATION,
            icon: "marker",
        },
        {
            id: useId(),
            label: "Настройки",
            path: EActive.SETTINGS,
            icon: "settings",
        },
        {
            id: useId(),
            label: "Выход",
            path: "",
            icon: "logout",
        },
    ];

    return (
        <div className={styles.menu}>
            <Text color="#B1B2B4" type="p">
                Состояние:
            </Text>
            <Switcher />
            <div className={styles.list}>
                {menuData.map((item) => (
                    <div
                        onClick={() =>
                            handleNavigate(item.path, item.label as TIsSelect)
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
                        <Icons icon={`${item.icon}`} />
                        <Text type="p">{item.label}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
};
