import { FC } from "react";

import { Text } from "@/shared/ui/Text";

import woman from "/assets/woman.jpg";
import styles from "./PersonalCard.module.scss";

export const PersonalCard: FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.name}>
                <img src={woman} alt="" />
                <Text type="h2" fz="24px">
                    Иванов Дмитрий Васильевич
                </Text>
            </div>
            <div className={styles.data}>
                <div className={styles.text}>
                    <Text type="h4" fz="18px">
                        Должность
                    </Text>
                    <Text type="p" color="#3C3D3E">
                        Врач-хирург
                    </Text>
                </div>
                <div className={styles.text}>
                    <Text type="h4" fz="18px">
                        Дата рождения
                    </Text>
                    <Text type="p" color="#3C3D3E">
                        23.07.1987
                    </Text>
                </div>
                <div className={styles.text}>
                    <Text type="h4" fz="18px">
                        Местоположение
                    </Text>
                    <Text type="p" color="#3C3D3E">
                        Самара, Российская Федерация
                    </Text>
                </div>
                <div className={styles.text}>
                    <Text type="h4" fz="18px">
                        Номер телефона
                    </Text>
                    <Text type="p" color="#3C3D3E">
                        +7-(900)-000-00-00
                    </Text>
                </div>
                <div className={styles.text}>
                    <Text type="h4" fz="18px">
                        Опыт работы
                    </Text>
                    <Text type="p" color="#3C3D3E">
                        23 года
                    </Text>
                </div>
            </div>
            <Text type="p" color="#B1B2B4" fz="14px" position="end">
                Зарегистрирован(-а) с 23 мая 2017
            </Text>
        </div>
    );
};
