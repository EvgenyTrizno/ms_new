import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";
import { ICustomError } from "@/shared/hooks/types";

import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Btn } from "@/shared/ui/Btn/Btn";
import { Auth } from "@/shared/api/Auth";
import { setCookie } from "@/features";

import eyeClose from "/assets/eye-close.svg";
import eyeOpen from "/assets/eye-open.svg";
import styles from "./LoginForPersonal.module.scss";

type TErrorType = "password" | "account";

export const LoginForPersonal: FC = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [pass, setPass] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [errorType, setErrorType] = useState<TErrorType>();
    const [error, setError] = useState<boolean>(false);

    const { getToket } = Auth();

    const handleClick = () => {
        getToket(number, pass)
            .then((res) => {
                setCookie("refresh_token", res.refresh, 1);
                location.pathname = "/";
            })
            .catch((e: ICustomError) => {
                e.data?.detail === "Incorrect password"
                    ? setErrorType("password")
                    : setErrorType("account");
                setError(true);
            });
    };

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
                    <div className={styles.inner}>
                        <Input
                            type={isShow ? "text" : "password"}
                            height="60px"
                            placeholder="Введите пароль"
                            borderColor="#E9EAEB"
                            br="none"
                            btr="unset"
                            bbr="unset"
                            value={pass}
                            borderRadius="8px 0px 0px 8px"
                            onBlur={() => setError(false)}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setPass(e.target.value)
                            }
                        />
                        <div
                            onClick={() => setIsShow((bool) => !bool)}
                            style={{
                                borderColor:
                                    errorType === "password" && error
                                        ? "#D64657"
                                        : "",
                            }}
                            className={styles.btn}
                        >
                            {!isShow ? (
                                <img src={eyeClose} alt="" />
                            ) : (
                                <img src={eyeOpen} alt="" />
                            )}
                        </div>
                    </div>
                </label>
            </form>
            <Link className={styles.link} to="/">
                Забыли пароль?
            </Link>
            <Btn
                color="#0064FA"
                onClick={handleClick}
                disabled={!pass || !number}
            >
                Войти
            </Btn>
        </div>
    );
};
