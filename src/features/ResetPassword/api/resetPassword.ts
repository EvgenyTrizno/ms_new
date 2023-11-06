import { BASE_URL } from "@/shared/config";
import axios from "axios";

export async function resetPasswordByNumber(number: string) {
    return await axios.post(`${BASE_URL}/api/reset-password/`, {
        number,
    });
}

export async function resetPasswordByEmail(email: string) {
    return await axios.post(`${BASE_URL}/api/reset-password/`, {
        email,
    });
}
