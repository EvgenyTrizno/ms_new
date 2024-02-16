import { useQuery } from "react-query";
import { getChats } from "../../api/chat";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const useChatQuery = () => {
  const { getCookie } = useCookie();

  return useQuery({
    queryFn: () => getChats(getCookie("access_token") as string),
    queryKey: ["getChats"],
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
  });
};
