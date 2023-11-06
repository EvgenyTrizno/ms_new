import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { Input } from "@/shared/ui/Input";
import { ICreatePassFormProps } from "./types";

export const CreatePassForm: FC<ICreatePassFormProps> = ({
    btn,
    setPassword1,
    setPassword2,
}) => {
    return (
        <Rows gap={20} rows={["auto"]}>
            <Input
                type="text"
                placeholder="Введите новый пароль"
                borderColor="#E9EAEB"
                onChange={(e) => setPassword1(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Подтвердите пароль"
                borderColor="#E9EAEB"
                onChange={(e) => setPassword2(e.target.value)}
            />
            {btn}
        </Rows>
    );
};
