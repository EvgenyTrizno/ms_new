import { AxiosResponse } from "axios";

import { instance } from "../config/axiosInstance";

interface ILoginResponce {
    refresh_token: string;
    access_token: string;
}

export async function login(
    number: string,
    password: string
): Promise<AxiosResponse<ILoginResponce>> {
    return await instance.post("/token/", { number, password });
}
