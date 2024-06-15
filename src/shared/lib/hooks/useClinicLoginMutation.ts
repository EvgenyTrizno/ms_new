import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { useCookie } from "./useCookie";
import { clinicLogin } from "@/shared/api/clinicLogin";

export const useClinicLoginMutation = (numberOrEmail: string, password: string) => {
    const { setCookie } = useCookie();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => clinicLogin(numberOrEmail, password),
        mutationKey: ["login"],
        onSuccess: (data) => {
            console.log(data);
            setCookie("access_token", data.data.access_token, 1);
            navigate("/");
        },
    });
};
