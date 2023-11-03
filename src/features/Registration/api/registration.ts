import axios from "axios";

import { BASE_URL } from "@/shared/config";
import { TGroups } from "@/shared/types/group.type";
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
    return axios.post(
        `${BASE_URL}/api/users/`,
        {
            birthday,
            number: numberOrEmail,
            password1,
            password2,
            group,
            stage,
            main_center,
            disease,
        },
        {
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:8000",
                "Access-Control-Allow-Methods":
                    "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
        }
    );
}
