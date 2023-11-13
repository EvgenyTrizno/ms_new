import { useQuery } from "react-query";

import { getDoctors } from "../../api/getDoctors";
import { useAuth } from "@/shared/model/store/auth";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const useDoctorsQuery = () => {
    const { getCookie } = useCookie();
    const { isAuth } = useAuth();

    return useQuery({
        queryFn: () => getDoctors(getCookie("access_token") as string),
        queryKey: ["doctors"],
        enabled: isAuth,
    });
};
