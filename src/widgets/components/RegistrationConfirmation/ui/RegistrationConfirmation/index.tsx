import { FC } from "react";

import { ConfirmationForm } from "@/entities/Confirmation";
import { Btn } from "@/shared/ui/Btn";

export const RegistrationConfirmation: FC = () => {
    return (
        <ConfirmationForm btn={<Btn color="#0064FA">Зарегистрироваться</Btn>} />
    );
};
