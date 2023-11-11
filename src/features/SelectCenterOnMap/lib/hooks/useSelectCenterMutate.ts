import { useMutation } from "react-query";
import { useNavigate } from "react-router";

import { selectCenter } from "../../api/selectCenter";
import { useCookie } from "@/shared/lib/hooks/useCookie";

export const useSelectCenterMutate = (
    stage: 2,
    disease_id: number[],
    city: string,
    main_center: number
) => {
    const navigate = useNavigate();
    const { getCookie } = useCookie();

    const sessionid = getCookie("sessionid");

    return useMutation({
        mutationFn: () =>
            selectCenter(
                stage,
                city,
                disease_id,
                main_center,
                sessionid as string
            ),
        mutationKey: ["registration", "select center"],
        onSuccess: () => navigate("/confirmation"),
    });
};
