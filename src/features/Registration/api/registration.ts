import axios from "axios";

import { BASE_URL } from "@/shared/config";
import { TGroups } from "@/shared/types";
import { TStages, ICreateUser } from "../types";

export async function registration(
    birthday: string,
    numberOrEmail: string,
    group: TGroups,
    password1: string,
    password2: string,
    stage: TStages,
    main_center?: any[],
    disease?: number[]
): Promise<ICreateUser> {
    return axios.post(BASE_URL, {
        birthday,
        numberOrEmail,
        password1,
        password2,
        group,
        stage,
        main_center,
        disease,
    });
}
