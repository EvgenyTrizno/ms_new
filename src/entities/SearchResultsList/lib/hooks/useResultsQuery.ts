import { useQuery } from "react-query";

import { getSearchResults } from "../../api/getSearchResults";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const useResultsQuery = () => {
  const { getCookie } = useCookie();

  return useQuery({
    queryFn: () => getSearchResults(getCookie("access_token") as string),
    queryKey: ["search"],
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });
};
