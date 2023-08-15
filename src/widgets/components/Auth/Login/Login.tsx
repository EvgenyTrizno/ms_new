import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";
import { ICustomError } from "@/shared/hooks/types";

import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Btn } from "@/shared/ui/Btn/Btn";
import { Auth } from "@/shared/api/Auth";
import { setCookie } from "@/features";
import { MOBILE_SCREEN } from "@/shared/utils";

import facebook from "/assets/facebook.svg";
import apple from "/assets/apple.svg";
import google from "/assets/google.svg";
import eyeClose from "/assets/eye-close.svg";
import eyeOpen from "/assets/eye-open.svg";
import styles from "./Login.module.scss";

type TErrorType = "password" | "account";

export const Login: FC = () => {
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
                location.pathname = MOBILE_SCREEN ? "/m/" : "/";
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
                Вход
            </Text>
            <form action="#" className={styles.form}>
                <label
                    className={
                        errorType === "account" && error ? styles.validate : ""
                    }
                >
                    {error && errorType === "account" && (
                        <p>Введен неверный номер или email</p>
                    )}
                    <Input
                        type="text"
                        placeholder="Введите тел.номер или эл. почту"
                        height="60px"
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
            <div className={styles.redirect}>
                <Text type="p" position="center" color="#7D7F82">
                    Нет учетной записи? &nbsp;
                    <Link to="/auth/registration" className={styles.link}>
                        Зарегистрироваться
                    </Link>
                </Text>
            </div>
            <div className={styles.decor}>
                <div className={styles.line}></div>
                <span>Или</span>
                <div className={styles.line}></div>
            </div>
            <div className={styles.btns}>
                <div className={styles.btn}>
                    <img
                        src={facebook}
                        alt="facebook"
                        className={styles.icon}
                    />
                    <Text type="p">Войти с помощью Facebook</Text>
                </div>
                <div className={styles.btn}>
                    <img src={apple} alt="apple" className={styles.icon} />
                    <Text type="p">Войти с помощью Apple</Text>
                </div>
                <div className={styles.btn}>
                    <img src={google} alt="google" className={styles.icon} />
                    <Text type="p">Войти с помощью Google</Text>
                </div>
            </div>
        </div>
    );
};
