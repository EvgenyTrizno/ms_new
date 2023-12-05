import { useQuery } from "react-query";
import { getClinics } from "../../api/clinics";

export const useClinicsQuery = () => {
    return useQuery({ queryFn: getClinics, queryKey: ["admin", "clinics"] });
};
