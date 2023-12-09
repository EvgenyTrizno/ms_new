import { useMutation, useQueryClient } from "react-query";
import { cancelAccess } from "../../api/access";
import { TAccess } from "../../types/access.type";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const useAccessMutate = (id: number, access: TAccess) => {
    const { getCookie } = useCookie();

    const token = getCookie("access_token") as string;
    const client = useQueryClient();

    return useMutation({
        mutationFn: () => cancelAccess(id, access, token),
        mutationKey: ["cencel", "access"],
        onSuccess: () => {
            client.invalidateQueries();
        },
    });
};
