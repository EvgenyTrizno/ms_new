/* eslint-disable no-case-declarations */
import { FC, useState, ChangeEvent } from "react";

import { Input } from "@/shared/ui/Input";
import { Policy } from "../Policy";
import { Rows } from "@/shared/ui/Rows";
import { Btn } from "@/shared/ui/Btn";

export const RegistrationForm: FC = () => {
    const [number, setNumber] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [birthday, setBirthday] = useState("");
    const [inputDateValue, setInputDateValue] = useState<string>("ГГГГ-ММ-ДД");
    const [isShowValue, setIsShowValue] = useState<boolean>(false);

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

    return (
        <form>
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
                <Policy />
                <Btn color="#0064FA">Продолжить</Btn>
            </Rows>
        </form>
    );
};
