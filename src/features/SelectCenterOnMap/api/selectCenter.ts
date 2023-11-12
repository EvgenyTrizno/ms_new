import { AxiosResponse } from "axios";

import { instance } from "@/shared/config/axiosInstance";

export async function selectCenter(
    stage: 2,
    city: string,
    disease_id: number[],
    main_center: number
): Promise<AxiosResponse> {
    return await instance.post(
        "/users/",
        {
            stage,
            city,
            disease_id,
            main_center,
        },
        {
            withCredentials: true,
        }
    );
}
