import { FC, useState } from "react";
import { AxiosError } from "axios";

import { Rows } from "@/shared/ui/Rows";
import { ForgotPassword } from "../ForgotPassword";
import { PasswordInputField } from "../PasswordInputField";
import { Input } from "@/shared/ui/Input";
import { Btn } from "@/shared/ui/Btn";
import { useLoginMutation } from "@/shared/lib/hooks/useLoginMutation";

import styles from "./styles.module.scss";

export const UserLogin: FC = () => {
    const [number, setNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { mutate, isError, error } = useLoginMutation(number, password);

    console.log(error);

    const errors = {
        incorrectPassword: "Incorrect password",
        incorrectEmailOrPhone: "Account does not exist",
    };

    const er = error as AxiosError;

    return (
        <Rows gap={20} rows={["auto"]}>
            <Rows gap={5} rows={["auto"]}>
                <Rows gap={10} rows={["auto"]}>
                    <div className={styles.box}>
                        {isError &&
                            er &&
                            ((er.response?.data as any).detail as unknown) ===
                                errors.incorrectEmailOrPhone && (
                                <span>Неверный введен логин</span>
                            )}
                        <Input
                            border={
                                isError &&
                                er &&
                                ((er.response?.data as any)
                                    .detail as unknown) ===
                                    errors.incorrectEmailOrPhone
                                    ? "1px solid #D64657"
                                    : ""
                            }
                            type="text"
                            placeholder="Введите номер или почту"
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className={styles.box}>
                        {isError &&
                            er &&
                            ((er.response?.data as any).detail as unknown) ===
                                errors.incorrectPassword && (
                                <span>Неверный введен пароль</span>
                            )}
                        <PasswordInputField
                            error={
                                (isError &&
                                    er &&
                                    ((er.response?.data as any)
                                        .detail as unknown) ===
                                        errors.incorrectPassword) ??
                                false
                            }
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </Rows>
                <ForgotPassword />
            </Rows>
            <Btn color="#0064FA" onClick={() => mutate()}>
                Войти
            </Btn>
        </Rows>
    );
};
