import { instance } from "@/shared/config/axiosInstance";

export async function getMessages(id: number, token: string) {
    return await instance.get(`/messages/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
