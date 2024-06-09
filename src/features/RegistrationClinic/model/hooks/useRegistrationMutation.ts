/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { registration } from "../../api/registration";

export const useRegistrationMutation = (
    number: string,
    password: string,
    worktime: Date,
    workdays: string

) => {
    return useMutation({
        mutationFn: () =>
            registration(number, password, workdays, worktime),
        mutationKey: ["clinicRegistration"],
    });
};
