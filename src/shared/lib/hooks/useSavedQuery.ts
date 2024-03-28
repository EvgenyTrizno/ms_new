import { useQuery } from "react-query";

import { useCookie } from "@/shared/lib/hooks/useCookie";
import { getSaved } from "@/shared/api/saved.api";

export const useSavedQuery = () => {
  const { getCookie } = useCookie();

  return useQuery(
    ["doctors"],
    () => getSaved(getCookie("access_token") as string),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );
};
