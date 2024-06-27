import { AxiosResponse } from "axios";
import { instance } from "../config/axiosInstance";
import { Notification } from "../types";

export const getNotifications = async (
    token: string
): Promise<AxiosResponse<Notification[]>> => {
    const res: AxiosResponse<Notification[]> = await instance.get(
        `/notifications`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res;
};
