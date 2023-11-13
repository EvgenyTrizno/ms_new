import { FC, useState } from "react";

import { ConfirmationForm } from "@/entities/Confirmation";
import { Btn } from "@/shared/ui/Btn";
import { useVerifyMutation } from "../../lib/hooks/useVerifyMutation";
import { TextWithNumber } from "../TextWithNumber";
import { useRegistration } from "@/shared/model/store/registration";

export const RegistrationConfirmation: FC = () => {
    const [code, setCode] = useState<string>("");

    const { number } = useRegistration();
    const { mutate } = useVerifyMutation(+code, number);

    return (
        <ConfirmationForm
            setCode={setCode}
            text={<TextWithNumber number={number} />}
            btn={
                <Btn color="#0064FA" onClick={() => mutate()}>
                    Подтвердить
                </Btn>
            }
        />
    );
};
