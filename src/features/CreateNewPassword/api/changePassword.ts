import { BASE_URL } from "@/shared/config";
import axios from "axios";

export async function changePasswordByNumber(
    number: string,
    password1: string,
    password2: string
) {
    return await axios.post(`${BASE_URL}/api/change-password/`, {
        number,
        password1,
        password2,
    });
}

export async function changePasswordByEmail(
    email: string,
    password1: string,
    password2: string
) {
    return await axios.post(`${BASE_URL}/api/change-password/`, {
        email,
        password1,
        password2,
    });
}
