import { FC } from "react";

import { Text } from "../../../shared";

import avatar from "/assets/man.jpg";
import styles from "./User.module.scss";

export const User: FC = () => {
    return (
        <div className={styles.user}>
            <img src={avatar} alt="" />
            <div className={styles.data}>
                <Text type="h2" color="#262626" fz="24px">
                    Яковенко А. С.
                </Text>
                <Text type="p" color="#B1B2B4">
                    Пользователь
                </Text>
            </div>
        </div>
    );
};
