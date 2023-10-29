import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";

import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Btn } from "@/shared/ui/Btn";

import styles from "./LoginForPersonal.module.scss";
import { PasswordInputField } from "../../PasswordInputField/ui";

type TErrorType = "password" | "account";

export const LoginForPersonal: FC = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [pass, setPass] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [errorType, setErrorType] = useState<TErrorType>();
    const [error, setError] = useState<boolean>(false);

    return (
        <div className={styles.login}>
            <Text position="center" type="h2" fz="28px" color="#262626">
                Вход для персонала
            </Text>
            <form action="#" className={styles.form}>
                <label
                    className={
                        errorType === "account" && error ? styles.validate : ""
                    }
                >
                    {error && errorType === "account" && (
                        <p>Введен неверный номер</p>
                    )}
                    <Input
                        type="text"
                        placeholder="Введите тел.номер или эл. почту"
                        height="60px"
                        value={number}
                        borderColor="#E9EAEB"
                        onBlur={() => setError(false)}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setNumber(e.target.value)
                        }
                    />
                </label>
                <label
                    className={
                        errorType === "password" && error ? styles.validate : ""
                    }
                >
                    {error && errorType === "password" && (
                        <p>Введен неверный пароль</p>
                    )}
                    <PasswordInputField />
                </label>
            </form>
            <Link className={styles.link} to="/">
                Забыли пароль?
            </Link>
            <Btn color="#0064FA" disabled={!pass || !number}>
                Войти
            </Btn>
        </div>
    );
};
