import { AxiosResponse } from "axios";
import { instance } from "../config/axiosInstance";
import { IService } from "../types/services.interface";

export const getServices = async (
    token: string
): Promise<AxiosResponse<IService[]>> => {
    const res: AxiosResponse<IService[]> = await instance.get(
        `/services`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res;
};
