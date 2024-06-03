import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";
import { ICenter } from "../types/centers.interface";
import { IUserData } from "../types";

type GetCentersRes = {
    center: ICenter[];
    pacients: IUserData[];
};

export const getCenters = async (
    token: string
): Promise<AxiosResponse<GetCentersRes>> => {
    const res = await instance.get(
        `/admin/center`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res;
};
