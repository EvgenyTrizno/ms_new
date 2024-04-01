import { AxiosResponse } from "axios";

import { instance } from "@/shared/config/axiosInstance";
import { IClinic } from "@/shared/types/clinic.types";
import { IUserData } from "@/shared/types/user.types";

interface IClinicModify extends IClinic {
    online_notes: number;
    offline_notes: number;
    visit_online: number;
    visit_offline: number;
}

interface IClinicResponse {
    center: IClinicModify[];
    pacients: IUserData[];
}

export async function getCenterById(
    id: number
): Promise<AxiosResponse<IClinicResponse>> {
    return await instance.get(`/admin/center/${id}/`);
}
