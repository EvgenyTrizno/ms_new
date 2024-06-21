import { useQuery } from "react-query";

import { useCookie } from "@/shared/lib/hooks/useCookie";
import { getNotes } from "@/shared/api";

export const useNotesQuery = () => {
    const { getCookie } = useCookie();

    return useQuery(
        ["notes"],
        () => getNotes(getCookie("access_token") as string),
        {
            keepPreviousData: true,
            staleTime: 5 * 60 * 1000,
            cacheTime: 30 * 60 * 1000,
        }
    );
};
