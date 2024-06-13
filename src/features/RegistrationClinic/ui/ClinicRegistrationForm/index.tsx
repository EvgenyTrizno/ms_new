/* eslint-disable no-case-declarations */
import { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";

import { Input } from "@/shared/ui/Input";
import { useRegistrationMutation } from "../../model/hooks/useRegistrationMutation";
import { useClinicRegistration } from "@/shared/model/store/clinicRegistration";
import { Rows } from "@/shared/ui/Rows";
import { Btn } from "@/shared/ui/Btn";
import { Text } from "@/shared/ui/Text";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";

type ErrorType = {
    value: boolean;
    message: string | null;
};

export const ClinicRegistrationForm: FC = () => {
    const [error, setError] = useState<ErrorType>({
        value: false,
        message: null,
    });

    const { number, setNumber, password, setPassword, password2, setPassword2, workdays, worktime } =
        useClinicRegistration();

    const {
        mutate,
        error: regError,
        data: regData,
        isLoading,

    } = useRegistrationMutation(number, password, worktime, workdays);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setError({ value: false, message: null });

        switch (name) {
            case "number":
                setNumber(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "confirmPassword":
                setPassword2(value);
        }
    };

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!number || !password || !password2) {
            return setError({
                value: true,
                message: "Заполните все поля",
            });
        }

        if (password !== password2) {
            return setError({
                value: true,
                message: "Пароли не совпадают",
            });
        }

        mutate();
    };

    useEffect(() => {
        if (!regError) return;

        const errorData = (regError as AxiosError).response?.data;

        if (errorData && typeof errorData === "object" && "password" in errorData) {
            return setError({
                value: true,
                message:
                    "Пароль должен состоять из цифр и букв в обоих регистрах и быть длиной не менее 8 символов",
            });
        }

        setError({
            value: true,
            message:
                "Ошибка. Возможно клиника с таким номером уже существует",
        });
    }, [regError]);

    useEffect(() => {
        if (!regData) return;

        navigate(`/confirmation-code?email=${regData.data.email}`);
    }, [regData]);

    return (
        <form onSubmit={formHandler} >
            <Rows gap={20} rows={["auto"]}>
                {error.value && (
                    <Text type="p" color="#d64657" position="center">
                        {error.message || "Ошибка"}
                    </Text>
                )}

                <Rows gap={10} rows={["auto"]}>
                    <Input
                        type="text"
                        placeholder="Номер телефона"
                        borderColor="#E9EAEB"
                        name="number"
                        onChange={handleChange}
                        value={number}
                    />
                    <Input
                        type="password"
                        placeholder="Введите пароль"
                        borderColor="#E9EAEB"
                        name="password"
                        onChange={handleChange}
                        value={password}
                    />
                    <Input
                        type="password"
                        placeholder="Подтвердите пароль"
                        borderColor="#E9EAEB"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={password2}
                    />
                </Rows>
                <Btn
                    color="#0064FA"
                    disabled={
                        isLoading || !number || !password || !password2
                    }
                >

                    {isLoading ? "Загрузка..." : "Продолжить"}
                </Btn>
            </Rows>
        </form >
    );
};
