import { FC } from "react";
import { ILoginFormProps } from "./types";

import { Btn } from "@/shared/ui/Btn";
import { Rows } from "@/shared/ui/Rows";
import { useLoginMutation } from "@/shared/lib/hooks/useLoginMutation";

export const LoginForm: FC<ILoginFormProps> = ({
    children,
    password,
    number,
}) => {
    const { mutate } = useLoginMutation(number, password);

    return (
        <Rows gap={20} rows={["auto"]}>
            {children}
            <Btn color="#0064FA" onClick={() => mutate()}>
                Войти
            </Btn>
        </Rows>
    );
};
