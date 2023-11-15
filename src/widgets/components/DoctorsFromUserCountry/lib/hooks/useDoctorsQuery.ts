import { useQuery } from "react-query";

import { getDoctors } from "../../api/getDoctors";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const useDoctorsQuery = () => {
    const { getCookie } = useCookie();

    return useQuery({
        queryFn: () => getDoctors(getCookie("access_token") as string),
        queryKey: ["doctors"],
    });
};
