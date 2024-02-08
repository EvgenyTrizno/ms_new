import { AxiosResponse } from "axios";
import { instance } from "../config/axiosInstance";

export const getNotifications = async (
    token: string
  ): Promise<AxiosResponse<any>> => {
    const res: AxiosResponse<any> = await instance.get(`/notifications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return res;
  };
  