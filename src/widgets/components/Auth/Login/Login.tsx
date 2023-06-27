import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import { Text } from "../../../../shared/ui/Text/Text";
import { Input } from "../../../../shared/ui/Input/Input";
import { Btn } from "../../../../shared/ui/Btn/Btn";

import facebook from "/assets/facebook.svg";
import apple from "/assets/apple.svg";
import google from "/assets/google.svg";
import styles from "./Login.module.scss";

export const Login: FC = () => {
    const [isShow, setIsShow] = useState<boolean>(false);

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
                />
                <div className={styles.inner}>
                    <Input
                        type={isShow ? "text" : "password"}
                        placeholder="Введите пароль"
                        borderColor="#E9EAEB"
                        br="none"
                        btr="unset"
                        bbr="unset"
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
            <Btn color="#0064FA">Войти</Btn>
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
