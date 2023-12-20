import { FC, useState } from "react";
import { useNavigate } from "react-router";

import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Image } from "@/shared/ui/Image";
import { useAuth } from "@/shared/model/store/auth";

import arrowRight from "./assets/arrow-right.svg";
import userSettings from "./assets/user-settings.svg";
import lock from "./assets/lock.svg";
import helpCircle from "./assets/help-circle.svg";
import lng from "./assets/lng.svg";
import calendar from "./assets/calendar.svg";
import envelope from "./assets/icon-mail.svg";
import wal from "./assets/wallpaper.svg";
import styles from "./styles.module.scss";

export const List: FC = () => {
    const [select, setSelect] = useState<string>("");

    console.log(select);

    const navigate = useNavigate();
    const { user } = useAuth();

    const data = [
        {
            label: "Персональные настройки",
            icon: {
                healthy: userSettings,
                sick: "",
            },
        },
        {
            label: "Конфиденциальность",
            icon: { healthy: lock, sick: "" },
        },
        {
            label: "Помощь",
            icon: { healthy: helpCircle, sick: "" },
        },
        {
            label: "Язык",
            icon: {
                healthy: lng,
                sick: "",
            },
        },
        {
            label: "Дата и время ",
            icon: {
                healthy: calendar,
                sick: "",
            },
        },
        {
            label: "Приглашения",
            icon: {
                healthy: envelope,
                sick: "",
            },
        },
        {
            label: "Обои",
            icon: {
                healthy: wal,
                sick: "",
            },
            path: "",
        },
    ];

    return (
        <Rows gap={10} rows={["auto"]}>
            {data.map((item, i) => (
                <div
                    className={styles.item}
                    key={i}
                    onClick={() => {
                        setSelect(item.label);

                        if (item.path) {
                            navigate(item.path);
                        }
                    }}
                >
                    <div className={styles.nav}>
                        <div className={styles.params}>
                            <img
                                className={styles.icon}
                                src={
                                    user && user.disease.length
                                        ? item.icon.sick
                                        : item.icon.healthy
                                }
                                alt=""
                            />
                            <Text type="p">{item.label}</Text>
                        </div>
                        <Image
                            className={styles.arrow}
                            src={arrowRight}
                            alt=""
                        />
                    </div>
                </div>
            ))}
        </Rows>
    );
};
