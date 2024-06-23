import { BASE_URL } from "@/shared/config";
import axios from "axios";

export async function changePasswordByNumber(
    number: string,
    password: string,
) {
    return await axios.post(`${BASE_URL}/api/change-password/`, {
        number,
        password
    });
}

export async function changePasswordByEmail(
    email: string,
    password: string,
) {
    return await axios.post(`${BASE_URL}/api/change-password/`, {
        email,
        password,
    });
}
