import { FC, useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { Checkbox } from "@/shared";
import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Btn } from "@/shared/ui/Btn";
import { useUserData } from "@/shared/model/store";
import { Auth } from "@/shared/api/Auth";

import facebook from "/assets/facebook.svg";
import apple from "/assets/apple.svg";
import google from "/assets/google.svg";
import styles from "./Registration.module.scss";
import { Modal } from "../../../../shared/ui/Modal";

export const Registration: FC = () => {
    const [tel, setTel] = useState<string>("");
    const [birthday, setBirthday] = useState<string>("");
    const [confirmPass, setConfirmPass] = useState<string>("");
    const [checked, setChecked] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

    const navigate = useNavigate();
    const { setNumber, setGroup, setPass1, setPass2, pass1 } = useUserData();

    const { registration } = Auth();

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        registration(tel, pass1, confirmPass, 1, "Пользователи")
            .then((res) => {
                console.log(res);
                setTel("");
                setConfirmPass("");
                setChecked(false);
                setNumber(res.number);
                setGroup(res.group);
                setPass1(pass1);
                setPass2(confirmPass);
            })
            .then(() => {
                navigate("/auth");
            })
            .catch((e) => console.log(e));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "birthday":
                setBirthday(value);
                break;
            case "number":
                setNumber(value);
                break;
            case "password":
                setPass1(value);
                break;
            case "confirmPassword":
                setPass2(value);
                break;
            default:
                return;
        }
    };

    return (
        <>
            <div className={styles.registration}>
                <Text position="center" type="h2" fz="28px" color="#262626">
                    Регистрация
                </Text>
                <form
                    action="#"
                    className={styles.form}
                    onSubmit={onSubmitHandler}
                >
                    <div className={styles.inputs}>
                        <Input
                            type="text"
                            placeholder="Дата рождения"
                            value={birthday}
                            onChange={handleChange}
                            name="birthday"
                        />
                        <Input
                            type="text"
                            placeholder="Введите номер"
                            borderColor="#E9EAEB"
                            onChange={handleChange}
                            value={tel}
                            name="number"
                        />
                        <Input
                            type="password"
                            placeholder="Введите пароль"
                            borderColor="#E9EAEB"
                            onChange={handleChange}
                            value={pass1}
                            name="password"
                        />
                        <Input
                            type="password"
                            placeholder="Подтвердите пароль"
                            borderColor="#E9EAEB"
                            onChange={(e) => setConfirmPass(e.target.value)}
                            value={confirmPass}
                            name="confirmPassword"
                        />
                    </div>
                    <div className={styles.policy}>
                        {/* <Checkbox
                            checked={checked}
                            onChange={() => setChecked((prev) => !prev)}
                        /> */}
                        <Text color="#7D7F82" type="p" fz="14px">
                            Я согласен со&nbsp;
                            <Link to="/" className={styles.link}>
                                всеми условиями сайта
                            </Link>
                        </Text>
                    </div>
                    <Btn
                        color="#0064FA"
                        type="submit"
                        disabled={
                            tel !== "" &&
                            pass1 !== "" &&
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
            {isOpenModal && (
                <Modal setIsOpenModal={setIsOpenModal}>
                    <Text type="h2" position="center" fz="24px">
                        Предупреждение
                    </Text>
                    <div className={styles.warning}>
                        <Text type="p" position="center" fz="14px">
                            Лица не достигшие 18 лет , могут находится на сайте
                            только с позволения родителей
                        </Text>
                    </div>
                    <Btn color="#0064FA">Продолжить</Btn>
                </Modal>
            )}
        </>
    );
};
