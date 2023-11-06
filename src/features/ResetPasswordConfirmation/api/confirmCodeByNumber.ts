import axios from "axios";

import { BASE_URL } from "@/shared/config";

export async function verifyCodeByNumber(number: string, reset_code: number) {
    return await axios.post(`${BASE_URL}/api/verify-reset-password/`, {
        number,
        reset_code,
    });
}
