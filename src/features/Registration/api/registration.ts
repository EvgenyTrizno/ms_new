import { AxiosResponse } from "axios";

import { TGroups } from "@/shared/types/group.type";
import { instance } from "@/shared/config/axiosInstance";

export interface ICreateUser {
  birthday: string;
  number: string;
  group: TGroups;
  password1: string;
  password2: string;
  stage: 1;
}

export async function registration(
  email: string,
  password: string
): Promise<AxiosResponse<ICreateUser>> {
  return instance.post("/users/", {
    email,
    password,
  });
}
