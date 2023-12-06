import { AxiosResponse } from "axios";

import { instance } from "@/shared/config/axiosInstance";
import { IClinic } from "@/shared/types/clinic.interface";
import { IUserData } from "@/shared/types/user.interface";

interface IClinicsResponse {
    clinic: IClinic[];
    pacients: IUserData[];
}

export async function getClinics(): Promise<AxiosResponse<IClinicsResponse>> {
    return await instance("/admin/clinic/");
}
