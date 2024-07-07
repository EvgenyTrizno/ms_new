
import { AxiosResponse } from "axios";

import { instance } from "../config/axiosInstance";
import { Doctor } from "../types";

export async function getDoctorById(
    token: string,
    doctorId: number
): Promise<AxiosResponse<Doctor>> {
    const res: AxiosResponse<Doctor> = await instance.get(
        `/doctor/${doctorId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res;
}
