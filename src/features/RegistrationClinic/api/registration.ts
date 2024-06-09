import { AxiosResponse } from "axios";

import { instance } from "@/shared/config/axiosInstance";
import { IClinic } from "@/shared/types";

export async function registration(
    number: string,
    password: string,
    workdays: string,
    worktime: Date
): Promise<AxiosResponse<IClinic>> {
    return instance.post("/clinic/", {
        number,
        password,
        workdays,
        worktime
    });
}
