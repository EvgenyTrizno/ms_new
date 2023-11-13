import { instance } from "@/shared/config/axiosInstance";

export async function getDoctors(token: string) {
    return await instance.get(`/notes/doctors/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
