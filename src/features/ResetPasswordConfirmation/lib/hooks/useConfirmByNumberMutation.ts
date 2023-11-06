import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { verifyCodeByNumber } from "../../api/confirmCodeByNumber";

export const useConfirmByNumberMutation = (
    number: string,
    reset_code: string
) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => verifyCodeByNumber(number, +reset_code),
        mutationKey: ["confirmation", "recovery", "number"],
        onSuccess: () => navigate("/create-new-password"),
    });
};
