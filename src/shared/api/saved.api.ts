import { instance } from "@/shared/config/axiosInstance";
import { Save } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getSaved = async (
  token: string
): Promise<AxiosResponse<Save[]>> => {
  const res: AxiosResponse<Save[]> = await instance.get(`/saved/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
