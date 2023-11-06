import { FC } from "react";

import { RegistrationConfirmation } from "@/features/RegistrationConfirmation";
import { ResetPasswordConfirmation } from "@/features/ResetPasswordConfirmation";
import { useRegistration } from "@/shared/model/store/registration";

export const Confirmation: FC = () => {
    const { password1, password2 } = useRegistration();

    return (
        <>
            {password1 && password2 ? (
                <RegistrationConfirmation />
            ) : (
                <ResetPasswordConfirmation />
            )}
        </>
    );
};
