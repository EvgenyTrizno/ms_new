import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { registration } from "../../api";
import { ICreateUser } from "../../types";

export const useRegistrationMutation = (state: ICreateUser) => {
    const navigate = useNavigate();

    return useMutation({
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
        mutationKey: ["registration"],
        onSuccess: () => navigate("/select-center"),
    });
};
