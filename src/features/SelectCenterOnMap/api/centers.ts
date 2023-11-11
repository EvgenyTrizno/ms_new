import { AxiosResponse } from "axios";

import { ICenterResponse } from "../types/centersResponse.interface";
import { instance } from "@/shared/config/axiosInstance";

export async function getCentersByCity(
    city: string
): Promise<AxiosResponse<ICenterResponse[]>> {
    return await instance.get(`/users/centers/${city}/`);
}
