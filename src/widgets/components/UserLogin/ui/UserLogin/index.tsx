import { FC } from "react";

import { LoginForm } from "@/entities/LoginForm";
import { Rows } from "@/shared/ui/Rows";
import { ForgotPassword } from "../ForgotPassword";
import { PasswordInputField } from "../PasswordInputField";
import { Input } from "@/shared/ui/Input";

export const UserLogin: FC = () => {
    return (
        <LoginForm>
            <Rows gap={5} rows={["auto"]}>
                <Rows gap={10} rows={["auto"]}>
                    <Input type="text" placeholder="Введите номер или почту" />
                    <PasswordInputField />
                </Rows>
                <ForgotPassword />
            </Rows>
        </LoginForm>
    );
};
