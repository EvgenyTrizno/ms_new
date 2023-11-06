import axios from "axios";

import { BASE_URL } from "@/shared/config";

export async function verifyCodeByEmail(email: string, reset_code: number) {
    return await axios.post(`${BASE_URL}/api/verify-reset-password/`, {
        email,
        reset_code,
    });
}
