import { useQuery } from "react-query";

import { getUserById } from "../../api/user";

export const useUserQuery = (id: number) => {
    return useQuery({
        queryFn: () => getUserById(id),
        queryKey: ["admin", "user", "id"],
    });
};
