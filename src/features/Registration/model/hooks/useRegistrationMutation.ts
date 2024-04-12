/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { registration } from "../../api/registration";

export const useRegistrationMutation = (
    email: string,
    password: string
) => {
    return useMutation({
        mutationFn: () =>
            registration(email, password),
        mutationKey: ["registration"],
    });
};
