import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "@/shared/config";
import { ICenterResponse } from "../types/centersResponse.interface";

export async function getCentersByCity(
    city: string
): Promise<AxiosResponse<ICenterResponse[]>> {
    return await axios.get(`${BASE_URL}/api/users/centers/${city}`);
}
