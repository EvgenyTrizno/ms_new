import { FC } from "react";

import { RegistrationConfirmation } from "@/features/RegistrationConfirmation";
import { ResetPasswordConfirmation } from "@/features/ResetPasswordConfirmation";

export const Confirmation: FC = () => {
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
