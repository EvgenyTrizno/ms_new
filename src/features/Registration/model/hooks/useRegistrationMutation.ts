/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";

import { registration } from "../../api/registration";

export const useRegistrationMutation = (
    state: ICreateUser,
    onSuccessFunc?: (data: any) => void
) => {
    return useMutation({
        mutationFn: () =>
            registration(
                state.birthday,
                state.numberOrEmail,
                state.group,
                state.password1,
                state.password2,
                state.stage
            ),
        mutationKey: ["registration"],
        onSuccess: onSuccessFunc,
    });
};
