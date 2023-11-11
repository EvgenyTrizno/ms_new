/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { registration } from "../../api/registration";
import { TGroups } from "@/shared/types/group.type";

export const useRegistrationMutation = (
    number: string,
    birthday: string,
    group: TGroups,
    password1: string,
    password2: string,
    stage: 1
) => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () =>
            registration(birthday, number, group, password1, password2, stage),
        mutationKey: ["registration"],
        onSuccess: () => navigate("/select-center"),
    });
};
