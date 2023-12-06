import { useQuery } from "react-query";

import { getCenters } from "../../api/centers";

export const useCentersQuery = () => {
    return useQuery({
        queryFn: getCenters,
        queryKey: ["admin", "centers", "all"],
    });
};
