import { instance } from "@/shared/config/axiosInstance";
import { INews } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getNews = async (
    token: string | null
): Promise<AxiosResponse<INews[]>> => {
    const res: AxiosResponse<INews[]> = await instance.get(`/news`, {
        headers: token ? {
            Authorization: `Bearer ${token}`,
        } : {},
    });

    return res;
};
