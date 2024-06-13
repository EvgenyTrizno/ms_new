/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import { registration } from "../../api/registration";

export const useRegistrationMutation = (
    number: string,
    password: string,
    worktime: number,
    workdays: string[]

) => {
    return useMutation({
        mutationFn: () =>
            registration(number, password, workdays.join(), worktime),
        mutationKey: ["clinicRegistration"],

    });
};
