import { useQuery } from "react-query";

import { useCookie } from "@/shared/lib/hooks/useCookie";
import { getNews } from "@/shared/api";

export const useNewsQuery = () => {
    const { getCookie } = useCookie();

    return useQuery(
        ["news"],
        () => getNews(getCookie("access_token") as string),
        {
            keepPreviousData: true,
            staleTime: 5 * 60 * 1000,
            cacheTime: 30 * 60 * 1000,
        }
    );
};
