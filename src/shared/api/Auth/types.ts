export type StageType = 1 | 2 | 3;

export interface ICreateUser {
    number: string;
    password1: string;
    password2: string;
    stage: StageType;
    main_center: number | null;
    disease_id: number[];
}

export interface IVerifyCodeProps {
    phone_number: string;
    code: number;
}

export type TResentVerifyCodeProps = Omit<IVerifyCodeProps, "code">;

export interface ITokensResult {
    access: string;
    refresh: string;
}

export type TAccessToken = Omit<ITokensResult, "refresh">;
