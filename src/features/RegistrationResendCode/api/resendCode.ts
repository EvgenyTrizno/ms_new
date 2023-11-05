import { BASE_URL } from "@/shared/config";
import axios from "axios";

export async function resendCode(number: string) {
    return await axios.post(`${BASE_URL}/api/resend-sms/`, { number });
}
