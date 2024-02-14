import { instance } from "@/shared/config/axiosInstance";
import { IUserData } from "@/shared/types";
import { AxiosResponse } from "axios";

export const updateUserData = async (
  token: string,
  data: Partial<IUserData>
): Promise<AxiosResponse<IUserData>> => {
  const res: AxiosResponse<IUserData> = await instance.patch(
    "/users-detail/",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
};
