import { FC } from "react";

import { ConfirmationForm } from "@/entities/Confirmation";
import { Btn } from "@/shared/ui/Btn";
import { useVerifyMutation } from "../../lib/hooks/useVerifyMutation";
import { useCode } from "@/entities/Confirmation/model/store/code";
import { TextWithNumber } from "../TextWithNumber";
import { useRegistration } from "@/shared/model/store/registration";

export const RegistrationConfirmation: FC = () => {
    const { code } = useCode();
    const { number } = useRegistration();
    const { mutate } = useVerifyMutation(+code, number);

    return (
        <ConfirmationForm
            text={<TextWithNumber number={number} />}
            btn={
                <Btn color="#0064FA" onClick={() => mutate()}>
                    Подтвердить
                </Btn>
            }
        />
    );
};
