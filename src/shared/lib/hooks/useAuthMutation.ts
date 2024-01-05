import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router";

import { auth } from "@/shared/api/auth";
import { getUser } from "@/shared/api/getUser";
import { useAuth } from "@/shared/model/store/auth";
import { ROUTES } from "@/shared/utils/PATHS";

export const useAuthMutation = (refresh: string) => {
    const { setUser, setIsAuth, user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const excludedPaths = [
        ROUTES.login.path,
        ROUTES.registration.path,
        ROUTES.recovery.path,
        ROUTES.confirmation.path,
        ROUTES.selectCenter.path,
    ];

    return useMutation({
        mutationFn: () => auth(refresh),
        mutationKey: ["auth"],
        retry: 1,
        onSuccess: (data) => {
            !user && getUser(data.data.access).then((res) => setUser(res.data));
            setIsAuth(true);
        },
        onError: () => {
            if (
                !excludedPaths.includes(
                    location.pathname as typeof ROUTES.registration.path
                )
            ) {
                navigate(ROUTES.login.path);
            }
        },
    });
};
