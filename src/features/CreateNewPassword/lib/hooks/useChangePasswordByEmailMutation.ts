import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { changePasswordByEmail } from "../../api/changePassword";

export const useChangePasswordByEmailMutation = (
    email: string,
    password: string,
) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => changePasswordByEmail(email, password),
        mutationKey: ["changePassword", "email"],
        onSuccess: () => navigate("/login"),
    });
};
