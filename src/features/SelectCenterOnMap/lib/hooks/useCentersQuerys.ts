import { useQuery } from "react-query";
import { getCentersByCity } from "../../api/centers";

export const useCentersQuerys = (city: string, allowed: boolean) => {
    return useQuery({
        queryFn: () => getCentersByCity(city),
        queryKey: ["centers"],
        enabled: allowed,
        retry: 2,
    });
};
