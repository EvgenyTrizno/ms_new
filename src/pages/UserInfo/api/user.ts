import { AxiosResponse } from "axios";
import { IAccess } from "../types/access.interface";

import { instance } from "@/shared/config/axiosInstance";
import { INote } from "@/shared/types/note.interface";
import { IUserData } from "@/shared/types/user.interface";

interface IUserResponse {
    user: IUserData[];
    miss_notes: INote[];
    curr_notes: INote[];
    process_notes: INote[];
    access: IAccess[];
}

export async function getUserById(
    id: number
): Promise<AxiosResponse<IUserResponse>> {
    return await instance.get(`/admin/user/${id}/`);
}
