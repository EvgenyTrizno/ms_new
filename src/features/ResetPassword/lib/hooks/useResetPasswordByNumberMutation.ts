import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { resetPasswordByNumber } from "../../api/resetPassword";

export const useResetPasswordByNumberMutation = (number: string) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => resetPasswordByNumber(number),
        mutationKey: ["resetPassword", "number"],
        onSuccess: () => navigate("/confirmation"),
    });
};
