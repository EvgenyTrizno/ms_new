import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { changePasswordByNumber } from "../../api/changePassword";

export const useChangePasswordByNumberMutation = (
    number: string,
    password: string
) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => changePasswordByNumber(number, password),
        mutationKey: ["changePassword", "number"],
        onSuccess: () => navigate("/login"),
    });
};
