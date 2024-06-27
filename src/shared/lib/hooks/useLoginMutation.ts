import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { login } from "../../api/login";
import { useCookie } from "./useCookie";

export const useLoginMutation = (numberOrEmail: string, password: string) => {
    const { setCookie } = useCookie();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => login(numberOrEmail, password),
        mutationKey: ["login"],
        onSuccess: (data) => {
            setCookie("refresh_token", data.data.refresh_token, 90);
            setCookie("access_token", data.data.access_token, 30);
            navigate("/");
        },
    });
};
