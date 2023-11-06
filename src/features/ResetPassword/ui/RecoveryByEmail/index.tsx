import { FC, useState, ChangeEvent } from "react";

import { Rows } from "@/shared/ui/Rows";
import { Input } from "@/shared/ui/Input";
import { Btn } from "@/shared/ui/Btn";
import { useResetPasswordByEmailMutation } from "../../lib/hooks/useResetPasswordByEmailMutation";

export const RecoveryByEmail: FC = () => {
    const [email, setEmail] = useState<string>("");

    const { mutate } = useResetPasswordByEmailMutation(email);

    return (
        <Rows gap={20} rows={["auto"]}>
            <Input
                type="text"
                placeholder="Введите эл.почту"
                padding="12px 16px"
                border="1px solid #EBF3FF"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
            />
            <Btn
                color="#0064FA"
                disabled={email.length ? false : true}
                onClick={() => mutate()}
            >
                Продолжить
            </Btn>
        </Rows>
    );
};
