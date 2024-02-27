import { instance } from "@/shared/config/axiosInstance";
import { Doctor } from "@/shared/types";
import { ICenter } from "@/shared/types/centers.interface";
import { IClinic } from "@/shared/types/clinic.types";
// import { IUserData } from "@/shared/types/user.interface";
import { AxiosResponse } from "axios";

interface ISearchResults {
  doctors: Doctor[];
  centers: ICenter[];
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
