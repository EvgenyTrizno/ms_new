import { AxiosResponse } from "axios";

import { instance } from "@/shared/config/axiosInstance";
import { IClinic } from "@/shared/types/clinic.interface";
import { IUserData } from "@/shared/types/user.interface";

interface IClinicModify extends IClinic {
    online_notes: string;
    offline_notes: string;
    visit_online: string;
    visit_offline: string;
}

interface IClinicResponse {
    clinic: IClinicModify[];
    pacients: IUserData[];
}

export async function getClinicById(
    id: number
): Promise<AxiosResponse<IClinicResponse>> {
    return await instance.get(`/admin/clinic/${id}/`);
}
