import { ChangeEvent, FC, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import { Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Btn } from "@/shared/ui/Btn/Btn";
import { Auth } from "@/shared/api/Auth";
import { setCookie } from "@/features";

import facebook from "/assets/facebook.svg";
import apple from "/assets/apple.svg";
import google from "/assets/google.svg";
import styles from "./Login.module.scss";

export const Login: FC = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [pass, setPass] = useState<string>("");
    const [number, setNumber] = useState<string>("");

    const { getToket } = Auth();

    const handleClick = () => {
        getToket(number, pass).then((res) => {
            setCookie("refresh_token", res.refresh, 1);
            redirect("/");
        });
    };

    return (
        <div className={styles.login}>
            <Text position="center" type="h2" fz="28px" color="#262626">
                Вход
            </Text>
            <form action="#" className={styles.form}>
                <Input
                    type="text"
                    placeholder="Введите тел.номер или эл. почту"
                    borderColor="#E9EAEB"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setNumber(e.target.value)
                    }
                />
                <div className={styles.inner}>
                    <Input
                        type={isShow ? "text" : "password"}
                        placeholder="Введите пароль"
                        borderColor="#E9EAEB"
                        br="none"
                        btr="unset"
                        bbr="unset"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPass(e.target.value)
                        }
                    />
                    <div
                        onClick={() => setIsShow((bool) => !bool)}
                        className={styles.btn}
                    >
                        {!isShow ? (
                            <AiFillEyeInvisible size={25} />
                        ) : (
                            <AiFillEye size={25} />
                        )}
                    </div>
                </div>
            </form>
            <Link className={styles.link} to="/">
                Забыли пароль?
            </Link>
            <Btn color="#0064FA" onClick={handleClick}>
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
