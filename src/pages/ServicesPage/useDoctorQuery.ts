
import { useQuery } from "react-query";

import { useCookie } from "@/shared/lib/hooks/useCookie";
import { getDoctorById } from "@/shared/api/doctors";

export const useDoctorQuery = (id: number) => {
    const { getCookie } = useCookie();

    return useQuery(
        ["doctor"],
        () => getDoctorById(getCookie("access_token") as string, id),
        // {
        //     keepPreviousData: true,
        //     staleTime: 5 * 60 * 1000,
        //     cacheTime: 30 * 60 * 1000,
        // }
    );
};
