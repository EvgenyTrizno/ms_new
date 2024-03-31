import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";
import { Like, SendLikeData } from "../types/likes.types";

export const getLikes = async (
  token: string
): Promise<AxiosResponse<Like[]>> => {
  const res: AxiosResponse<Like[]> = await instance.get(`/likes/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const like = async (
  token: string,
  data: SendLikeData
): Promise<AxiosResponse<Like>> => {
  const res: AxiosResponse<Like> = await instance.post(`/likes/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const deleteLike = async (
  token: string,
  id: number
) => {
  const res = await instance.delete(`/likes/${id}/`,  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

