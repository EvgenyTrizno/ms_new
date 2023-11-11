/* eslint-disable no-case-declarations */
import { FC, useState, ChangeEvent, FormEvent } from "react";
import { useRegistrationMutation } from "@/features/Registration/model/hooks/useRegistrationMutation";
import { useNavigate } from "react-router";

import { Input } from "@/shared/ui/Input";
import { useRegistration } from "@/shared/model/store/registration";
import { Policy } from "../Policy";
import { Rows } from "@/shared/ui/Rows";
import { Btn } from "@/shared/ui/Btn";

export const RegistrationForm: FC = () => {
    const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");
    const [isShowValue, setIsShowValue] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const navigate = useNavigate();
    const {
        number,
        birthday,
        password1,
        password2,
        setBirthday,
        setNumber,
        setPassword1,
        setPassword2,
    } = useRegistration();
    const { mutate } = useRegistrationMutation(
        {
            birthday,
            numberOrEmail: number,
            group: "Пользователи",
            password1,
            password2,
            stage: 1,
        },
        () => navigate("/select-center")
    );

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.target.value;
        const digitsOnly = currentValue.replace(/\D/g, "");

        let formattedDate = "ГГГГ-ММ-ДД";

        for (let i = 0; i < digitsOnly.length; i++) {
            if (i === 0) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 1) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 2) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 3) {
                formattedDate = formattedDate.replace("Г", digitsOnly[i]);
            } else if (i === 4) {
                formattedDate = formattedDate.replace("М", digitsOnly[i]);
            } else if (i === 5) {
                formattedDate = formattedDate.replace("М", digitsOnly[i]);
            } else if (i === 6) {
                formattedDate = formattedDate.replace("Д", digitsOnly[i]);
            } else if (i === 7) {
                formattedDate = formattedDate.replace("Д", digitsOnly[i]);
            }
        }

        setInputDateValue(formattedDate);
        setBirthday(formattedDate);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case "birthday":
                if (birthday[0] === "Г") {
                    birthday.replace(birthday[0], value[0]);
                }

                break;
            case "number":
                const digitsOnly = value.replace(/\D/g, "");

                let formattedNumber = "+";

                for (let i = 0; i < digitsOnly.length; i++) {
                    formattedNumber += digitsOnly[i];
                }

                setNumber(formattedNumber);
                break;
            case "password":
                setPassword1(value);
                break;
            case "confirmPassword":
                setPassword2(value);
        }
    };

    const onFocusHandler = () => {
        setIsShowValue(true);
    };

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <Rows gap={20} rows={["auto"]}>
                <Rows gap={10} rows={["auto"]}>
                    <Input
                        type="text"
                        placeholder="Дата рождения"
                        name="birthday"
                        onChange={handleInputChange}
                        onFocus={onFocusHandler}
                        value={isShowValue ? inputDateValue : birthday}
                    />
                    <Input
                        type="text"
                        placeholder="Введите номер"
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
                        value={password1}
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
                <Policy isChecked={isChecked} setIsChecked={setIsChecked} />
                <Btn
                    color="#0064FA"
                    onClick={() => mutate()}
                    disabled={
                        !number &&
                        !birthday &&
                        password1.length >= 8 &&
                        password2.length >= 8 &&
                        !isChecked
                    }
                >
                    Продолжить
                </Btn>
            </Rows>
        </form>
    );
};
