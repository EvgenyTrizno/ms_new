import { useQuery } from "react-query";
import { getAllDiseases } from "../../api/disease";

export const useDiseasesQuery = () => {
    return useQuery({
        queryFn: getAllDiseases,
        queryKey: ["diseases"],
    });
};
