import { useMutation } from "react-query";
import { registration } from "../../api";
import { ICreateUser } from "../../types";

export const useRegistrationMutation = (state: ICreateUser) => {
    const { mutate: create } = useMutation({
        mutationFn: () =>
            registration(
                state.birthday,
                state.numberOrEmail,
                state.group,
                state.password1,
                state.password2,
                state.stage,
                state.main_center,
                state.disease
            ),
    });

    return { create };
};
