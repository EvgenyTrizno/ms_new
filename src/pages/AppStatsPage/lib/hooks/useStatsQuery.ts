import { useQuery } from "react-query";
import { getStats } from "../../api/stats";

export const useStatsQuery = () => {
    return useQuery({ queryFn: getStats, queryKey: ["admin", "stats"] });
};
