import { useQuery } from "react-query";

import { getDoctors } from "../../api/getDoctors";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const useDoctorsQuery = () => {
    const { getCookie } = useCookie();

    return useQuery(
        ["doctors"],
        () => getDoctors(getCookie("access_token") as string),
        {
            // keepPreviousData: true,
            // staleTime: 5 * 60 * 1000,
            // cacheTime: 30 * 60 * 1000,
        }
    );
};
