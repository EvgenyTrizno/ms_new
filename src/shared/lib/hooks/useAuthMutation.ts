import { useMutation } from "react-query";

import { auth } from "@/shared/api/auth";
import { getUser } from "@/shared/api/getUser";
import { useAuth } from "@/shared/model/store/auth";

export const useAuthMutation = (refresh: string) => {
    const { setUser, setIsAuth } = useAuth();

    return useMutation({
        mutationFn: () => auth(refresh),
        mutationKey: ["auth"],
        retry: 1,
        onSuccess: (data) => {
            getUser(data.data.access).then((res) => setUser(res.data));
            setIsAuth(true);
        },
    });
};
