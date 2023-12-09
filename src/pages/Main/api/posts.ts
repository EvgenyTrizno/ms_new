import { instance } from "@/shared/config/axiosInstance";
import { IClinic } from "@/shared/types/clinic.interface";
import { IDisease } from "@/shared/types/disease.interface";
import { AxiosResponse } from "axios";

interface IPostsResponse {
    center: IClinic | null;
    clinic: IClinic | null;
    created_at: Date;
    disease: IDisease;
    id: number;
    image: string[];
    text: string;
    title: string;
    update_at: Date;
}

export async function getPost(): Promise<AxiosResponse<IPostsResponse[]>> {
    return await instance("/news/");
}
