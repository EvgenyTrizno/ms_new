/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { registration } from "../../api/registration";

export const useRegistrationMutation = (
    email: string,
    password: string
) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () =>
            registration(email, password),
        mutationKey: ["registration"],
        onSuccess: () => navigate("/select-center"),
    });
};
