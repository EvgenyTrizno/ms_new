import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "@/shared/config";

export async function verifyCode(
    verification_code: number,
    number: string
): Promise<AxiosResponse<string>> {
    return await axios.post(`${BASE_URL}/api/verify-code/`, {
        verification_code,
        number,
    });
}
