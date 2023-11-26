import { instance } from "@/shared/config/axiosInstance";
import { IUserData } from "@/shared/types/user.interface";
import { AxiosResponse } from "axios";

interface IChatResponse {
    centers: any[];
    created_at: string;
    doctors: IUserData[];
    id: number;
    users: IUserData[];
    uuid: string;
}

interface IMessageResponse {
    center: null;
    chat: IChatResponse[];
    created_at: string;
    doctor: null;
    id: number;
    news: null;
    note: null;
    text: string;
    updated_at: string;
    user: IUserData;
}

export async function getMessages(
    id: number,
    token: string
): Promise<AxiosResponse<IMessageResponse[]>> {
    return await instance.get(`/messages/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
