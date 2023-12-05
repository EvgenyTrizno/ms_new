import { useQuery } from "react-query";
import { getClinicById } from "../../api/clinic";

export const useClinicQuery = (id: number) => {
    return useQuery({
        queryFn: () => getClinicById(id),
        queryKey: ["admin", "clinics", "id"],
    });
};
