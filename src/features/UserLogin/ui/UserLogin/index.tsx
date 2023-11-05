import { FC, useState } from "react";

import { LoginForm } from "@/entities/LoginForm";
import { Rows } from "@/shared/ui/Rows";
import { ForgotPassword } from "../ForgotPassword";
import { PasswordInputField } from "../PasswordInputField";
import { Input } from "@/shared/ui/Input";

export const UserLogin: FC = () => {
    const [number, setNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <LoginForm number={number} password={password}>
            <Rows gap={5} rows={["auto"]}>
                <Rows gap={10} rows={["auto"]}>
                    <Input
                        type="text"
                        placeholder="Введите номер или почту"
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <PasswordInputField
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Rows>
                <ForgotPassword />
            </Rows>
        </LoginForm>
    );
};
