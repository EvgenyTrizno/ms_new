import { useQuery } from "react-query";

import { getSearchResults } from "../../api/getSearchResults";

export const useResultsQuery = () => {

    return useQuery({
        queryFn: () => getSearchResults(),
        queryKey: ["search"],
        staleTime: 5 * 60 * 1000,
        cacheTime: 30 * 60 * 1000,
    });
};
