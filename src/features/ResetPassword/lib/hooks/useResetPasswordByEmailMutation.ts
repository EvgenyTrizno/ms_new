import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { resetPasswordByEmail } from "../../api/resetPassword";

export const useResetPasswordByEmailMutation = (email: string) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => resetPasswordByEmail(email),
        mutationKey: ["resetPassword", "email"],
        onSuccess: () => navigate("/confirmation"),
    });
};
