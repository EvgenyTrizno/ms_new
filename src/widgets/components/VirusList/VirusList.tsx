import { FC } from "react";
import { useNavigate } from "react-router";

import { Btn, Checkbox, Text } from "@/shared";

import styles from "./VirusList.module.scss";

export const VirusList: FC = () => {
    // const { diseases } = useDiseases();
    const navigate = useNavigate();

    return (
        <div className={styles.virusList}>
            <Text type="h2" color="#262626" position="center" fz="28px">
                Выберите заболевание
            </Text>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Checkbox />
                    <Text type="p">Здоров</Text>
                </li>
                <li className={styles.item}>
                    <Checkbox />
                    <Text type="p">Здоров</Text>
                </li>
                <li className={styles.item}>
                    <Checkbox />
                    <Text type="p">Здоров</Text>
                </li>
                <li className={styles.item}>
                    <Checkbox />
                    <Text type="p">Здоров</Text>
                </li>
            </ul>
            <Btn color="#0064FA" onClick={() => navigate("/auth")}>
                Продолжить
            </Btn>
        </div>
    );
};
