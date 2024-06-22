import { instance } from "@/shared/config/axiosInstance";
import { Save, SendSaveData } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getSaved = async (
  token: string
): Promise<AxiosResponse<Save[]>> => {
  const res: AxiosResponse<Save[]> = await instance.get(`/saved/`, {
    headers: token ? {
      Authorization: `Bearer ${token}`,
    } : {},
  });

  return res;
};

export const save = async (
  token: string,
  data: SendSaveData
): Promise<AxiosResponse<Save>> => {
  const res: AxiosResponse<Save> = await instance.post(`/saved/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const deleteSave = async (
  token: string,
  id: number
) => {
  const res = await instance.delete(`/saved/${id}/`,  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
