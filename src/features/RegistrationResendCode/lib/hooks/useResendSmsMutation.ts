import { useMutation } from "react-query";
import { resendCode } from "../../api/resendCode";

export const useResendSmsMutation = (number: string) => {
    return useMutation({
        mutationFn: () => resendCode(number),
        mutationKey: ["resend", "code"],
    });
};
