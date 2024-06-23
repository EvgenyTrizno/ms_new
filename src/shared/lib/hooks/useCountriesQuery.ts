import { useQuery } from "react-query";

import { getCountries } from "@/shared/api";

export const useCountriesQuery = () => {
    return useQuery(
        ["countries"],
        () => getCountries(),
        {
            keepPreviousData: true,
            staleTime: 5 * 60 * 1000,
            cacheTime: 30 * 60 * 1000,
        }
    );
};
