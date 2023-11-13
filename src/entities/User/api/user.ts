import { instance } from "@/shared/config/axiosInstance";
import type { TUserDataForPutRequest } from "../types/userDataForPutRequest.type";

export async function changeUserDetails(
    token: string,
    data: TUserDataForPutRequest
) {
    return await instance.put(
        "/users-detail/",
        { ...data },
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );
}

export async function getUser(token: string) {
    return await instance.get("/users-detail/", {
        headers: { Authorization: `Bearer ${token}` },
    });
}
