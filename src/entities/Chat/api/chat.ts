import { instance } from "@/shared/config/axiosInstance";
import { IUserData } from "@/shared/types/user.interface";
import { AxiosResponse } from "axios";

interface IChatResponse {
    centers: any[];
    created_at: Date;
    doctors: IUserData[];
    id: number;
    users: IUserData[];
    uuid: string;
}

export async function getChats(
    token: string
): Promise<AxiosResponse<IChatResponse[]>> {
    return await instance.get("/chat/", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export async function createChat(
    user_ids: number[],
    center_ids: number[],
    token: string
) {
    return await instance.post(
        "/chat/create",
        { user_ids, center_ids },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
}
