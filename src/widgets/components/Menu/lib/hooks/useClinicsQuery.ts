import { useQuery } from "react-query";

import { getClinics } from "../../api/clinics";

export const useCenicQuery = () => {
    return useQuery({
        queryFn: getClinics,
        queryKey: ["admin", "clinics", "all"],
    });
};
