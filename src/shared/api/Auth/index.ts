import { useHttp } from "@/shared/hooks";
import { BASE_URL } from "@/shared/config";
import {
    ICreateUser,
    IVerifyCodeProps,
    StageType,
    TGroups,
    TResentVerifyCodeProps,
} from "./types";

export const Auth = () => {
    const { request } = useHttp();

    const createUser = async (
        number: string,
        password1: string,
        password2: string,
        stage: StageType,
        group: TGroups,
        center_id?: number,
        disease_id?: number[]
    ): Promise<ICreateUser> => {
        const data: ICreateUser = await request(
            `${BASE_URL}/api/create/user/`,
            "POST",
            {
                number,
                stage,
                password1,
                password2,
                group,
                center_id,
                disease_id,
            }
        );

        return data;
    };

    const sendVerifyCode = async (
        phone_number: string,
        code: number
    ): Promise<IVerifyCodeProps> => {
        const res: IVerifyCodeProps = await request(
            `${BASE_URL}/api/verify-code/`,
            "POST",
            {
                phone_number,
                code,
            }
        );

        return res;
    };

    const resendVerifyCode = async (phone_number: string) => {
        const code: TResentVerifyCodeProps = await request(
            `${BASE_URL}/api/resend-sms/`,
            "POST",
            { phone_number }
        );

        return code;
    };

    const createAdmin = async () => {
        const data = await request(`${BASE_URL}/api/create/admin`, "POST", {});

        return data;
    };

    const updateAdmin = async () => {
        const data = await request(`${BASE_URL}/api/update/admin`, "PUT");

        return data;
    };

    const updateUser = async () => {
        const data = await request(`${BASE_URL}/api/update/user`, "PUT");

        return data;
    };

    return {
        createAdmin,
        createUser,
        updateUser,
        updateAdmin,
        sendVerifyCode,
        resendVerifyCode,
    };
};
