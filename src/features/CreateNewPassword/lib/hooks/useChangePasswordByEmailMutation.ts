import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { changePasswordByEmail } from "../../api/changePassword";

export const useChangePasswordByEmailMutation = (
    email: string,
    password1: string,
    password2: string
) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => changePasswordByEmail(email, password1, password2),
        mutationKey: ["changePassword", "email"],
        onSuccess: () => navigate("/login"),
    });
};
