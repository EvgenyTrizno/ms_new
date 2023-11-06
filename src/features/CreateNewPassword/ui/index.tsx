import { CreatePassForm } from "@/entities/CreatePasswordForm";
import { FC, useState } from "react";
import { useChangePasswordByNumberMutation } from "../lib/hooks/useChangePasswordByNumberMutation";
import { useData } from "@/shared/model/store/resetPassword";
import { Btn } from "@/shared/ui/Btn";
import { useChangePasswordByEmailMutation } from "../lib/hooks/useChangePasswordByEmailMutation";

export const ChangePassword: FC = () => {
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    const { number, email } = useData();
    const { mutate: byNumber } = useChangePasswordByNumberMutation(
        number,
        password1,
        password2
    );
    const { mutate: byEmail } = useChangePasswordByEmailMutation(
        email,
        password1,
        password2
    );

    return (
        <CreatePassForm
            setPassword2={setPassword2}
            setPassword1={setPassword1}
            btn={
                email ? (
                    <Btn color="" onClick={() => byEmail()}>
                        Изменить пароль
                    </Btn>
                ) : (
                    <Btn color="" onClick={() => byNumber()}>
                        Изменить пароль
                    </Btn>
                )
            }
        />
    );
};
