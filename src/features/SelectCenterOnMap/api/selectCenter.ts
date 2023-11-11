import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "@/shared/config";

export async function selectCenter(
    stage: 2,
    city: string,
    disease_id: number[],
    main_center: number,
    sessionid: string
): Promise<AxiosResponse> {
    return await axios.post(
        `${BASE_URL}/api/users/`,
        {
            stage,
            city,
            disease_id,
            main_center,
        },
        {
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                Cookie: `sessionid=${sessionid}`,
            },
        }
    );
}
