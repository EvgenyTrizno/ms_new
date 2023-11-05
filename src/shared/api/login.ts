import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "../config";

interface ILoginResponce {
    refresh: string;
    access: string;
}

export async function login(
    number: string,
    password: string
): Promise<AxiosResponse<ILoginResponce>> {
    return await axios.post(`${BASE_URL}/api/token/`, { number, password });
}
