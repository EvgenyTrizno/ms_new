import { instance } from "@/shared/config/axiosInstance";
import { TAccess } from "../types/access.type";

export async function cancelAccess(id: number, access: TAccess, token: string) {
    return await instance.delete("/access/", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            id,
            access,
        },
    });
}
