import { instance } from "@/shared/config/axiosInstance";
import { IClinic } from "@/shared/types/clinic.interface";
// import { IUserData } from "@/shared/types/user.interface";
import { AxiosResponse } from "axios";

interface ISearchResults {
    // doctors: IUserData[];
    centers: IClinic[];
    clinics: IClinic[];
}

export async function getSearchResults(
    token: string
): Promise<AxiosResponse<ISearchResults>> {
    return await instance.get("/search/", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
