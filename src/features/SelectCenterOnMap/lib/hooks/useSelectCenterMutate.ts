import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { selectCenter } from "../../api/selectCenter";

export const useSelectCenterMutate = (
    stage: 2,
    disease_id: number[],
    city: string,
    main_center: number
) => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: () => selectCenter(stage, city, disease_id, main_center),
        mutationKey: ["registration", "select center"],
        onSuccess: () => navigate("/confirmation"),
    });
};
