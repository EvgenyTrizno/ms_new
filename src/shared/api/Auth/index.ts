import { useHttp } from "@/shared/hooks";
import { BASE_URL } from "@/shared/config";
import {
    ICreateUser,
    ITokensResult,
    IVerifyCodeProps,
    StageType,
    TGroups,
    TResentVerifyCodeProps,
} from "./types";

export const Auth = () => {
    const { request } = useHttp();

    const registration = async (
        number: string,
        password1: string,
        password2: string,
        stage: StageType,
        group: TGroups,
        main_center?: number,
        disease_id?: number[]
    ): Promise<ICreateUser> => {
        const data: ICreateUser = await request(
            `${BASE_URL}/api/users/`,
            "POST",
            {
                number,
                stage,
                password1,
                password2,
                group,
                main_center,
                disease_id,
            }
        );

        return data;
    };

    const getToket = async (
        number: string,
        password: string
    ): Promise<ITokensResult> => {
        const data: ITokensResult = await request(
            `${BASE_URL}/api/token/`,
            "POST",
            {
                number,
                password,
            }
        );

        return data;
    };

    // const tokenСomparison;

    const sendVerifyCode = async (
        number: string,
        verification_code: number
    ): Promise<IVerifyCodeProps> => {
        const res: IVerifyCodeProps = await request(
            `${BASE_URL}/api/verify-code/`,
            "POST",
            {
                number,
                verification_code,
            }
        );

        return res;
    };

    const resendVerifyCode = async (number: string) => {
        const code: TResentVerifyCodeProps = await request(
            `${BASE_URL}/api/resend-sms/`,
            "POST",
            { number }
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

    const recoveryPasswordByNumber = async (number: string) => {
        const data = await request(`${BASE_URL}/api/reset-password/`, "POST", {
            number,
        });

        return data;
    };

    const recoveryPasswordByEmail = async (email: string) => {
        const data = await request(`${BASE_URL}/api/reset-password/`, "POST", {
            email,
        });

        return data;
    };

    const sendVerifyCodeRecoveryPassOnEmail = async (email: string) => {
        const data = await request(
            `${BASE_URL}/api/verify-reset-password/`,
            "POST",
            {
                email,
            }
        );

        return data;
    };

    const sendVerifyCodeRecoveryPassOnPhone = async (phone: string) => {
        const data = await request(
            `${BASE_URL}/api/verify-reset-password/`,
            "POST",
            {
                phone,
            }
        );

        return data;
    };

    const changePassword = async (
        email?: string,
        number?: string,
        password1?: string,
        password2?: string
    ) => {
        const data = await request(`${BASE_URL}/api/change-password/`, "POST", {
            email,
            number,
            password1,
            password2,
        });

        return data;
    };

    return {
        createAdmin,
        registration,
        updateUser,
        updateAdmin,
        sendVerifyCode,
        resendVerifyCode,
        recoveryPasswordByNumber,
        recoveryPasswordByEmail,
        sendVerifyCodeRecoveryPassOnEmail,
        sendVerifyCodeRecoveryPassOnPhone,
        changePassword,
        getToket,
    };
};
