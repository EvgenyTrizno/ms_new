import { instance } from "@/shared/config/axiosInstance";
import { Note } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getNotes = async (
  token: string
): Promise<AxiosResponse<Note[]>> => {
  const res: AxiosResponse<Note[]> = await instance.get(`/notes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
