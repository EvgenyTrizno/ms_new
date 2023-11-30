import { useQuery } from "react-query";

import { getMessages } from "../../api/messages";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const useMessageQuery = (chat_id: number) => {
    const { getCookie } = useCookie();

    return useQuery({
        queryFn: () =>
            getMessages(chat_id, getCookie("access_token") as string),
        queryKey: ["messages"],
        onSuccess: (data) => {
            console.log(data);
        },
    });
};
