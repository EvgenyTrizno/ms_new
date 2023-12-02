import { instance } from "@/shared/config/axiosInstance";
import { AxiosResponse } from "axios";

interface IDisease {
    id: number;
    count: number;
    name: string;
}

interface ISexCount {
    man: number;
    woman: number;
}

export interface IStatsResponse {
    diseases: IDisease[];
    created_today: number;
    _10_20: ISexCount[];
    _20_30: ISexCount[];
    _30_40: ISexCount[];
    _40_50: ISexCount[];
    _50_60: ISexCount[];
    _60_70: ISexCount[];
}

export const getStats = async (): Promise<AxiosResponse<IStatsResponse>> => {
    return await instance.get("/admin/mainpage");
};
