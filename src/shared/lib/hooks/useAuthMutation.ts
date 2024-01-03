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
                location.pathname !== ROUTES.login.path ||
                location.pathname !== (ROUTES.registration.path as any) ||
                location.pathname !== (ROUTES.recovery.path as any) ||
                location.pathname !== (ROUTES.confirmation.path as any) ||
                location.pathname !== (ROUTES.selectCenter.path as any)
            ) {
                navigate(ROUTES.login.path);
            }
        },
    });
};
