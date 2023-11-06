import { FC, useState } from "react";

import { ConfirmationForm } from "@/entities/Confirmation";
import { Btn } from "@/shared/ui/Btn";
import { ConfirmText } from "../ConfirmText";
import { useConfirmByNumberMutation } from "../../lib/hooks/useConfirmByNumberMutation";
import { useConfirmByEmailMutation } from "../../lib/hooks/useConfirmByEmailMutation";
import { useData } from "@/shared/model/store/resetPassword";

export const ResetPasswordConfirmation: FC = () => {
    const [code, setCode] = useState<string>("");
    const { email, number } = useData();

    const { mutate: byEmail } = useConfirmByEmailMutation(email, code);
    const { mutate: byNumber } = useConfirmByNumberMutation(number, code);

    return (
        <ConfirmationForm
            setCode={setCode}
            text={<ConfirmText type={email ? "email" : "tel"} />}
            btn={
                email ? (
                    <Btn color="" onClick={() => byEmail()}>
                        Продолжить
                    </Btn>
                ) : (
                    <Btn color="" onClick={() => byNumber()}>
                        Продолжить
                    </Btn>
                )
            }
        />
    );
};
