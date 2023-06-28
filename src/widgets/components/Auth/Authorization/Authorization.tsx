import { FC, useState } from "react";
import { useNavigate } from "react-router";
import { EAuth } from "./types";
import { Link } from "react-router-dom";

import { Btn, Checkbox, Text } from "@/shared";

import centerIcon from "/assets/center-icon.jpg";
import styles from "./Authorization.module.scss";

export const Authorization: FC = () => {
    const [isSelect, setIsSelect] = useState<EAuth>();
    const navigate = useNavigate();

    return (
        <div className={styles.authorization}>
            <Text color="#262626" type="h2" position="center" fz="28px">
                Регистрация
            </Text>
            <div className={styles.center}>
                <img src={centerIcon} alt="" />
                <div className={styles.centerInfo}>
                    <Text type="h3" color="#262626" fz="20px">
                        Центр Неврологии
                    </Text>
                    <Text type="p" position="center">
                        Россия, Москва
                    </Text>
                </div>
            </div>
            <Text type="p" position="center" color="#262626">
                Для того чтобы зарегестрироваться к нам в центр вам необходимо
                указать свое состояние на данный момент
            </Text>
            <div className={styles.status}>
                <label
                    className={styles.item}
                    onClick={() => setIsSelect(EAuth.HEALTHY)}
                >
                    <Checkbox value="Здоров" />
                    <Text type="p">Здоров</Text>
                </label>
                <label
                    className={styles.item}
                    onClick={() => setIsSelect(EAuth.SICK)}
                >
                    <Checkbox value="Болен" />
                    <Text type="p">Болен</Text>
                </label>
            </div>
            <div className={styles.condition}>
                (ОРВИ, Перелом)
                <Link to="/virus-list" className={styles.link}>
                    Изменить
                </Link>
            </div>
            <Btn
                onClick={() =>
                    navigate(
                        `${
                            isSelect === EAuth.SICK
                                ? "/virus-list"
                                : "/auth/confirm"
                        }`
                    )
                }
                color="#0064FA"
            >
                Продолжить
            </Btn>
        </div>
    );
};
