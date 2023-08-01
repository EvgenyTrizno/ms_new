import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

import { Btn, Input, Text } from "@/shared";
import { useUserData } from "@/shared/model/store";
import { Auth } from "@/shared/api/Auth";
import { MOBILE_SCREEN } from "@/shared/utils";

import styles from "./CreatePass.module.scss";

export const CreatePass: FC = () => {
    const [pass, setPass] = useState<string>("");
    const [newPass, setNewPass] = useState<string>("");
    const [searchParams] = useSearchParams();

    const { number, email } = useUserData();
    const { changePasswordByEmail, changePasswordByNumber } = Auth();

    const navigate = useNavigate();
    const type = searchParams.get("type");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (type === "number") {
            changePasswordByNumber(number, pass, newPass)
                .then((res) => console.log(res))
                .then(() => navigate(MOBILE_SCREEN ? "/m/" : "/"));
        } else {
            changePasswordByEmail(email, pass, newPass)
                .then((res) => console.log(res))
                .then(() => navigate(MOBILE_SCREEN ? "/m/" : "/"));
        }
    };

    return (
        <form className={styles.createPass} onSubmit={handleSubmit}>
            <Text position="center" type="h2" fz="28px" color="#262626">
                Создайте новый пароль
            </Text>
            <div className={styles.box}>
                <Input
                    type="text"
                    placeholder="Введите новый пароль"
                    borderColor="#E9EAEB"
                    onChange={(e) => setPass(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Подтвердите пароль"
                    borderColor="#E9EAEB"
                    onChange={(e) => setNewPass(e.target.value)}
                />
            </div>
            <Btn color="#0064FA" type="submit">
                Изменить пароль
            </Btn>
        </form>
    );
};
