import { AxiosResponse } from "axios";

import { instance } from "@/shared/config/axiosInstance";
import { IUserData } from "@/shared/types/user.interface";
import { IClinic } from "@/shared/types/clinic.interface";

interface ICentersResponse {
    clinic: IClinic[];
    pacients: IUserData[];
}

export async function getClinics(): Promise<AxiosResponse<ICentersResponse>> {
    return await instance.get("/admin/clinic/");
}
