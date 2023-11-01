import { BASE_URL } from "@/shared/config";
import axios from "axios";

interface ICreateUserResponse {
    password: string;
    number?: string;
    email?: string;
    birthday: Date;
}

export async function createUser(
    password: string,
    birthday: string,
    number?: string,
    email?: string
): Promise<ICreateUserResponse> {
    return axios.post(BASE_URL, { password, birthday, number, email });
}
