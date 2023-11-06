import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { verifyCodeByEmail } from "../../api/confirmCodeByEmail";

export const useConfirmByEmailMutation = (
    email: string,
    reset_code: string
) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => verifyCodeByEmail(email, +reset_code),
        mutationKey: ["confirmation", "recovery", "number"],
        onSuccess: () => navigate("/create-new-password"),
    });
};
