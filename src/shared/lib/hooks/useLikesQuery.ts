import { useQuery } from "react-query";

import { useCookie } from "@/shared/lib/hooks/useCookie";
import { getLikes } from "@/shared/api";

export const useLikesQuery = () => {
  const { getCookie } = useCookie();

  return useQuery(
    ["likes"],
    () => getLikes(getCookie("access_token") as string),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );
};
