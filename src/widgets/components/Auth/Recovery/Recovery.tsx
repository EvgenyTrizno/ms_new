import { FC, useState, FormEvent, ChangeEvent, useEffect } from "react";
import { TypeOfSelectedMethod } from "./types";

import { Auth } from "@/shared/api/Auth";
import { Btn, Input, Text } from "@/shared";
import { getRefreshTokenFromCookies } from "@/features";

import styles from "./Recovery.module.scss";

export const Recovery: FC = () => {
    const [isSelect, setIsSelect] = useState<TypeOfSelectedMethod>("tel");
    const [number, setNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const {
        recoveryPasswordByEmail,
        recoveryPasswordByNumber,
        sendVerifyCodeRecoveryPassOnPhone,
    } = Auth();

    const disableBtn =
        isSelect === "email" && !email
            ? true
            : isSelect === "tel" && !number
            ? true
            : false;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (number) {
            recoveryPasswordByNumber(number)
                .then((res) => console.log(res))
                .then(() => sendVerifyCodeRecoveryPassOnPhone(number));
        } else if (email) {
            recoveryPasswordByEmail(email).then((res) => console.log(res));
        }
    };

    useEffect(() => {
        if (isSelect === "email" && number.length !== 0) {
            setNumber("");
        }

        if (isSelect === "tel" && email.length !== 0) {
            setEmail("");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSelect]);

    return (
        <div className={styles.recovery}>
            <Text position="center" type="h2" fz="28px" color="#262626">
                Восстановление
            </Text>
            <div className={styles.subtitle}>
                <Text type="h2" color="#262626" position="center" fz="20px">
                    Не удается выполнить вход
                </Text>
            </div>
            <div className={styles.text}>
                <Text type="p" position="center" fz="20px">
                    Введите телефонный номер или электронную почту и мы отправим
                    вам код для восстановления доступа к аккаунту.
                </Text>
            </div>
            <div className={styles.swithcer}>
                <div
                    className={styles.item}
                    onClick={() => setIsSelect("tel")}
                    style={
                        isSelect === "tel"
                            ? { borderBottomColor: "#262626" }
                            : {}
                    }
                >
                    <Text type="p" fz="24px" color="#414141">
                        Тел. Номер
                    </Text>
                </div>
                <div
                    className={styles.item}
                    style={
                        isSelect === "email"
                            ? { borderBottomColor: "#262626" }
                            : {}
                    }
                    onClick={() => setIsSelect("email")}
                >
                    <Text type="p" fz="24px" color="#414141">
                        Эл. Почта
                    </Text>
                </div>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                {isSelect === "tel" ? (
                    <Input
                        type="text"
                        placeholder="Введите тел.номер"
                        value={number}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setNumber(e.target.value)
                        }
                    />
                ) : (
                    <Input
                        type="text"
                        placeholder="Введите эл.почту"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                    />
                )}
                <Btn color="#0064FA" type="submit" disabled={disableBtn}>
                    Продолжить
                </Btn>
            </form>
        </div>
    );
};
