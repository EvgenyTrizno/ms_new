import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "../config";

interface IAuthResponse {
    access: string;
    refresh: string;
}

export async function auth(
    refresh: string
): Promise<AxiosResponse<IAuthResponse>> {
    return await axios.post(`${BASE_URL}/api/token/refresh/`, { refresh });
}
