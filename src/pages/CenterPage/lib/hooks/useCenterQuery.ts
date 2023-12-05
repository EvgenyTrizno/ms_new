import { useQuery } from "react-query";
import { getCenterById } from "../../api/centers";

export const useCenterQuery = (id: number) => {
    return useQuery({
        queryFn: () => getCenterById(id),
        queryKey: ["admin", "center", "id"],
    });
};
