import { useMutation } from "react-query";

import { verifyCode } from "../../api/verifyCode";
import { useLoginMutation } from "@/shared/lib/hooks/useLoginMutation";
import { useRegistration } from "@/shared/model/store/registration";

export const useVerifyMutation = (
    verification_code: number,
    number: string
) => {
    const { password1 } = useRegistration();
    const { mutate } = useLoginMutation(number, password1);

    return useMutation({
        mutationFn: () => verifyCode(verification_code, number),
        mutationKey: ["registration", "verify"],
        onSuccess: () => mutate(),
    });
};
