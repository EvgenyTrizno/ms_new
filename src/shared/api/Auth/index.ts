import { useHttp } from "@/shared/hooks";
import { BASE_URL } from "@/shared/config";
import { ICreateUser } from "./types";

export const Auth = () => {
    const { request } = useHttp();

    const createAdmin = async (
        number: string,
        email: string,
        password1: string,
        password2: string,
        first_name: string,
        last_name: string
    ): Promise<ICreateUser> => {
        const data: ICreateUser = await request(
            `${BASE_URL}/api/create/admin`,
            "POST",
            { number, email, password1, password2, first_name, last_name }
        );

        console.log(data);

        return data;
    };

    return { createAdmin };
};
