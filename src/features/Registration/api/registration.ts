import { AxiosResponse } from "axios";

import { instance } from "@/shared/config/axiosInstance";
import { IUserData } from "@/shared/types";

export async function registration(
  email: string,
  password: string
): Promise<AxiosResponse<IUserData>> {
  return instance.post("/users/", {
    email,
    password,
  });
}
