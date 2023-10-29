import { FC } from "react";

import { Input } from "@/shared/ui/Input";
import { Btn } from "@/shared/ui/Btn";
import { Policy } from "../Policy";
import { Rows } from "@/shared/ui/Rows";

export const RegistrationForm: FC = () => {
    return (
        <Rows gap={20} rows={["auto"]}>
            <Rows gap={10} rows={["auto"]}>
                <Input
                    type="text"
                    placeholder="Дата рождения"
                    name="birthday"
                />
                <Input
                    type="text"
                    placeholder="Введите номер"
                    borderColor="#E9EAEB"
                    name="number"
                />
                <Input
                    type="password"
                    placeholder="Введите пароль"
                    borderColor="#E9EAEB"
                    name="password"
                />
                <Input
                    type="password"
                    placeholder="Подтвердите пароль"
                    borderColor="#E9EAEB"
                    name="confirmPassword"
                />
            </Rows>
            <Policy />
            <Btn color="#0064FA" type="submit">
                Продолжить
            </Btn>
        </Rows>
    );
};
