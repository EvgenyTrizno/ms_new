import { useQuery } from "react-query";

import { useCookie } from "@/shared/lib/hooks/useCookie";
import { useAuth } from "@/shared/model/store/auth";
import { getNotifications } from "../../api/getNotifications";

export const useNotificationsQuery = () => {
    const { getCookie } = useCookie();
    const { isAuth } = useAuth();

    return useQuery({
        queryFn: () => getNotifications(getCookie("access_token") as string),
        queryKey: ["notifications"],
        enabled: isAuth,
        retry: 1,
    });
};
