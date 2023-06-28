import { FC } from "react";
import { Link } from "react-router-dom";

import { Text, Input, Btn, Checkbox } from "@/shared";

import facebook from "/assets/facebook.svg";
import apple from "/assets/apple.svg";
import google from "/assets/google.svg";
import styles from "./Registration.module.scss";

export const Registration: FC = () => {
    return (
        <div className={styles.registration}>
            <Text position="center" type="h2" fz="28px" color="#262626">
                Регистрация
            </Text>
            <form action="#" className={styles.form}>
                <Input
                    type="text"
                    placeholder="Введите тел.номер"
                    borderColor="#E9EAEB"
                />
                <Input
                    type="password"
                    placeholder="Введите пароль"
                    borderColor="#E9EAEB"
                />
                <Input
                    type="password"
                    placeholder="Подтвердите пароль"
                    borderColor="#E9EAEB"
                />
            </form>
            <div className={styles.policy}>
                <Checkbox />
                <Text color="#7D7F82" type="p">
                    Я принимаю условия &nbsp;
                    <Link to="/" className={styles.link}>
                        данного соглашения
                    </Link>
                </Text>
            </div>
            <Btn color="#0064FA">Зарегестрироваться</Btn>
            <div className={styles.btns}>
                <img src={google} alt="google" />
                <img src={facebook} alt="facebook" />
                <img src={apple} alt="apple" />
            </div>
        </div>
    );
};
