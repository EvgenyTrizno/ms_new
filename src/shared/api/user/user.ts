import { instance } from "@/shared/config/axiosInstance";
import { IUser } from "@/shared/types";
import { AxiosResponse } from "axios";

export const updateUserData = async (
    token: string,
    data: Partial<IUser>
): Promise<AxiosResponse<IUser>> => {
    const res: AxiosResponse<IUser> = await instance.patch(
        "/users-detail/",
        data,
        {
            headers: {
                "Content-Type": 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res;
};


export const updateUserImg = async (
    token: string,
    formdata: FormData
): Promise<AxiosResponse<IUser>> => {
    const res = await instance.patch(
        "/users-detail/",
        formdata,
        {
            headers: {
                "Content-Type": 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        }
    )
    return res;
}
