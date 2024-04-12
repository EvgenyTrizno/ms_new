import { AxiosResponse } from "axios";

import { instance } from "../config/axiosInstance";

interface IAuthResponse {
  access: string;
  refresh: string;
}

export async function auth(
  refresh: string
): Promise<AxiosResponse<IAuthResponse>> {
  return await instance.post("/token/refresh/", { refresh });
}

export async function verifyCode(
  email: string,
  verification_code: number
): Promise<AxiosResponse<{ email: string; verification_code: number }>> {
  return await instance.post("/verify-code/", { email, verification_code });
}

export async function resendSms(
  email: string
): Promise<AxiosResponse<{ email: string }>> {
  return await instance.post("/resend-sms/", { email });
}
