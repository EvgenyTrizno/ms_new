import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "@/shared/config";
import { IUserData } from "@/shared/types/user.interface";

export async function getUser(
    token: string
): Promise<AxiosResponse<IUserData>> {
    const res = await axios.get(`${BASE_URL}/api/users-detail/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
}
