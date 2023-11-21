import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "@/shared/config";
import { IUserData } from "@/shared/types/user.interface";

interface INotifyResponse {
    id: number;
    text: string;
    add: unknown;
    created_at: string;
    user: IUserData;
}

export async function getNotifications(
    token: string
): Promise<AxiosResponse<INotifyResponse[]>> {
    return await axios.get(`${BASE_URL}/api/notifications/`, {
        headers: { Authorization: `Bearer ${token}` },
    });
}
