import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { Input } from "@/shared/ui/Input";

export const CreatePassForm: FC = () => {
    return (
        <Rows gap={20} rows={["auto"]}>
            <Input
                type="text"
                placeholder="Введите новый пароль"
                borderColor="#E9EAEB"
            />
            <Input
                type="text"
                placeholder="Подтвердите пароль"
                borderColor="#E9EAEB"
            />
        </Rows>
    );
};
