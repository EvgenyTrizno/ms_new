import { FC } from "react";

import { Input } from "@/shared/ui/Input";
import { Policy } from "../Policy";
import { Rows } from "@/shared/ui/Rows";
import { RegistrationForm as RegistrationFormLayout } from "@/entities/RegistrationForm";

export const RegistrationForm: FC = () => {
    return (
        <RegistrationFormLayout>
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
            </Rows>
        </RegistrationFormLayout>
    );
};
