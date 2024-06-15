import { AxiosResponse } from "axios";

import { instance } from "../config/axiosInstance";

interface ILoginResponce {
    access_token: string;
}

export async function clinicLogin(
    numberOrEmail: string,
    password: string
): Promise<AxiosResponse<ILoginResponce>> {
    return await instance.post("/clinic_token/", {
        number: !numberOrEmail.includes("@") ? numberOrEmail : undefined,
        email: numberOrEmail.includes("@") ? numberOrEmail : undefined,
        password,
    });
}
