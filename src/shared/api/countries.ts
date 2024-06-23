import { instance } from "@/shared/config/axiosInstance";
import { ICountry } from "@/shared/types";
import { AxiosResponse } from "axios";

export const getCountries = async (): Promise<AxiosResponse<ICountry[]>> => {
    const res: AxiosResponse<ICountry[]> = await instance.get(`/countries`);

    return res;
};
