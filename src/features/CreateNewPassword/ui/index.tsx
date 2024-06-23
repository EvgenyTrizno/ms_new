import { CreatePassForm } from "@/entities/CreatePasswordForm";
import { FC, useState } from "react";
import { useChangePasswordByNumberMutation } from "../lib/hooks/useChangePasswordByNumberMutation";
import { useData } from "@/shared/model/store/resetPassword";
import { Btn } from "@/shared/ui/Btn";
import { useChangePasswordByEmailMutation } from "../lib/hooks/useChangePasswordByEmailMutation";

export const ChangePassword: FC = () => {
    const [password, setPassword] = useState<string>("");

    const { number, email } = useData();
    const { mutate: byNumber } = useChangePasswordByNumberMutation(
        number,
        password,
    );
    const { mutate: byEmail } = useChangePasswordByEmailMutation(
        email,
        password
    );

    return (
        <CreatePassForm
            setPassword={setPassword}
            btn={

                <Btn color="blue" onClick={number ? () => byNumber() : () => byEmail()}>
                    Изменить пароль
                </Btn>

            }
        />
    );
};
