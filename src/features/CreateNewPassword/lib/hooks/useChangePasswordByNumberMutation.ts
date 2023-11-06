import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { changePasswordByNumber } from "../../api/changePassword";

export const useChangePasswordByNumberMutation = (
    number: string,
    password1: string,
    password2: string
) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => changePasswordByNumber(number, password1, password2),
        mutationKey: ["changePassword", "number"],
        onSuccess: () => navigate("/login"),
    });
};
