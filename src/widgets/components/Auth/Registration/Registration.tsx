import { FC, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Text, Input, Btn, Checkbox } from "@/shared";
import { Auth } from "@/shared/api/Auth";
import { useLocation } from "@/shared/hooks";

import facebook from "/assets/facebook.svg";
import apple from "/assets/apple.svg";
import google from "/assets/google.svg";
import styles from "./Registration.module.scss";

export const Registration: FC = () => {
    const [tel, setTel] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [confirmPass, setConfirmPass] = useState<string>("");
    const [checked, setChecked] = useState<boolean>(false);

    const navigate = useNavigate();

    const { createUser } = Auth();
    const { getLocation } = useLocation();

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createUser(tel, pass, confirmPass, 1, "Пользователи")
            .then((res) => {
                console.log(res);
                setPass("");
                setTel("");
                setConfirmPass("");
                setChecked(false);
            })
            .then(() => getLocation())
            .then(() => {
                navigate("/auth");
            })
            .catch((e) => console.log(e));
    };

    return (
        <div className={styles.registration}>
            <Text position="center" type="h2" fz="28px" color="#262626">
                Регистрация
            </Text>
            <form action="#" className={styles.form} onSubmit={onSubmitHandler}>
                <Input
                    type="text"
                    placeholder="Введите тел.номер"
                    borderColor="#E9EAEB"
                    onChange={(e) => setTel(e.target.value)}
                    value={tel}
                />
                <Input
                    type="password"
                    placeholder="Введите пароль"
                    borderColor="#E9EAEB"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                />
                <Input
                    type="password"
                    placeholder="Подтвердите пароль"
                    borderColor="#E9EAEB"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    value={confirmPass}
                />
                <div className={styles.policy}>
                    <Checkbox
                        checked={checked}
                        onChange={() => setChecked((prev) => !prev)}
                    />
                    <Text color="#7D7F82" type="p">
                        Я принимаю условия &nbsp;
                        <Link to="/" className={styles.link}>
                            данного соглашения
                        </Link>
                    </Text>
                </div>
                <Btn
                    color="#0064FA"
                    type="submit"
                    disabled={
                        tel !== "" &&
                        pass !== "" &&
                        confirmPass !== "" &&
                        checked !== false
                            ? false
                            : true
                    }
                >
                    Продолжить
                </Btn>
            </form>
            <div className={styles.btns}>
                <img src={google} alt="google" />
                <img src={facebook} alt="facebook" />
                <img src={apple} alt="apple" />
            </div>
        </div>
    );
};
