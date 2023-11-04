import axios, { AxiosResponse } from "axios";
import { IDiseaseData } from "../types/disease.interface";

import { BASE_URL } from "@/shared/config";

export async function getAllDiseases(): Promise<AxiosResponse<IDiseaseData[]>> {
    return await axios.get(`${BASE_URL}/api/users/diseases/`);
}
