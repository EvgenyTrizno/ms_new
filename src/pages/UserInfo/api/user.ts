import { instance } from "@/shared/config/axiosInstance";

import { IUserData } from "@/shared/types/user.interface";
import { AxiosResponse } from "axios";

interface IUserResponse {
    user: IUserData[];
}

export async function getUserById(
    id: number
): Promise<AxiosResponse<IUserResponse>> {
    return await instance.get(`/admin/user/${id}/`);
}
