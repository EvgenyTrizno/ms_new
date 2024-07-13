import { instance } from "@/shared/config/axiosInstance";
import { Doctor } from "@/shared/types";
import { ICenter } from "@/shared/types/centers.interface";
import { IClinic } from "@/shared/types/clinic.types";
import { IService } from "@/shared/types/services.interface";
// import { IUserData } from "@/shared/types/user.interface";
import { AxiosResponse } from "axios";

interface ISearchResults {
    doctors: Doctor[];
    services: IService[];
    clinics: IClinic[];
}

export async function getSearchResults(): Promise<AxiosResponse<ISearchResults>> {
    return await instance.get("/search/");
}
