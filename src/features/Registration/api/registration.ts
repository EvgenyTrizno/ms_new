import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "@/shared/config";
import { TGroups } from "@/shared/types/group.type";

export interface ICreateUser {
    birthday: string;
    number: string;
    group: TGroups;
    password1: string;
    password2: string;
    stage: 1;
}

export async function registration(
    birthday: string,
    number: string,
    group: TGroups,
    password1: string,
    password2: string,
    stage: 1
): Promise<AxiosResponse<ICreateUser>> {
    return axios.post(
        `${BASE_URL}/api/users/`,
        {
            birthday,
            number,
            password1,
            password2,
            group,
            stage,
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
