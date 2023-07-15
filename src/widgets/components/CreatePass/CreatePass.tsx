import { FC } from "react";

import { Btn, Input, Text } from "@/shared";

import styles from "./CreatePass.module.scss";

export const CreatePass: FC = () => {
    return (
        <div className={styles.createPass}>
            <Text position="center" type="h2" fz="28px" color="#262626">
                Создайте новый пароль
            </Text>
            <div className={styles.box}>
                <Input
                    type="text"
                    placeholder="Введите новый пароль"
                    borderColor="#E9EAEB"
                />
                <Input
                    type="text"
                    placeholder="Подтвердите пароль"
                    borderColor="#E9EAEB"
                />
            </div>
            <Btn color="#0064FA">Изменить пароль</Btn>
        </div>
    );
};
