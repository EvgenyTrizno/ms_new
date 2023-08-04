import { BASE_URL } from "@/shared/config";
import { useHttp } from "@/shared/hooks";
import { IProfileData } from "./types";

import noimage from "/assets/noimage.svg";

export const Account = () => {
    const { request } = useHttp();

    const changeProfileName = async (
        token: string,
        first_name: string
    ): Promise<IProfileData> => {
        const data: IProfileData = await request(
            `${BASE_URL}/api/users-detail/`,
            "PUT",
            {
                first_name,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        );

        return data;
    };

    const changeProfileSurname = async (
        token: string,
        last_name: string
    ): Promise<IProfileData> => {
        const data: IProfileData = await request(
            `${BASE_URL}/api/users-detail/`,
            "PUT",
            {
                last_name,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        );

        return data;
    };

    const changeProfileBirthday = async (
        token: string,
        birthday: string
    ): Promise<IProfileData> => {
        const data: IProfileData = await request(
            `${BASE_URL}/api/users-detail/`,
            "PUT",
            {
                birthday,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        );

        return data;
    };

    const changeProfileCountry = async (
        token: string,
        country: string
    ): Promise<IProfileData> => {
        const data: IProfileData = await request(
            `${BASE_URL}/api/users-detail/`,
            "PUT",
            {
                country,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        );

        return data;
    };

    const changeProfileCity = async (
        token: string,
        city: string
    ): Promise<IProfileData> => {
        const data: IProfileData = await request(
            `${BASE_URL}/api/users-detail/`,
            "PUT",
            {
                city,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        );

        return data;
    };

    const changeProfileAddress = async (
        token: string,
        address: string
    ): Promise<IProfileData> => {
        const data: IProfileData = await request(
            `${BASE_URL}/api/users-detail/`,
            "PUT",
            {
                address,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        );

        return data;
    };

    const getUserData = async (token: string): Promise<IProfileData> => {
        const data: IProfileData = await request(
            `${BASE_URL}/api/users-detail/`,
            "GET",
            null,
            {
                Authorization: `Bearer ${token}`,
            }
        );

        const _transformData = {
            ...data,
            image: data.image ?? noimage,
        };

        return _transformData;
    };

    const verifyEmail = async (token: string, email: string) => {
        const data = await request(
            `${BASE_URL}/api/verify-email/`,
            "POST",
            {
                email,
            },
            { Authorization: `Bearer ${token}` }
        );

        return data;
    };

    const sendVerifyCodeForVerifyEmail = async (
        token: string,
        email_verification_code: string,
        email: string
    ) => {
        const data = await request(
            `${BASE_URL}/api/verify-email-code/`,
            "POST",
            { email_verification_code, email },
            { Authorization: `Bearer ${token}` }
        );

        return data;
    };

    const getUserNotesByToken = async (token: string) => {
        const data = await request(`${BASE_URL}/api/notes/${token}/`);

        return data;
    };

    const createNotesByUserToken = async (
        token: string,
        userId: number,
        title: string,
        online: boolean,
        time_start: string,
        time_end: string,
        notify: string,
        doctor: number,
        problem: string,
        duration_note: number,
        special_check: boolean,
        center: number,
        status: string[]
    ) => {
        const data = await request(
            `${BASE_URL}/api/notes/`,
            "POST",
            {
                user: userId,
                title,
                online,
                time_start, //2023-07-22T15:19:38.601293+03:00 - формат
                time_end, //2023-07-22T15:19:38.601293+03:00
                notify, //2023-07-22T15:19:38.601293+03:00
                doctor, // doctorID
                problem,
                duration_note,
                center, // centerId,
                status,
                special_check,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        );

        return data;
    };

    const getAllDoctors = async (token: string) => {
        const data = await request(`${BASE_URL}/api/notes/doctors/`, "GET", {
            Authorization: token,
        });

        return data;
    };

    const getNoteById = async (noteId: number) => {
        const data = await request(`${BASE_URL}/api/notes/${noteId}/`);

        return data;
    };

    const changeNotesData = async (
        noteId: number,
        userId: number,
        title: string,
        online: boolean,
        time_start: string,
        time_end: string,
        notify: string,
        doctor: number,
        problem: string,
        duration_note: number,
        center: number,
        file: string,
        status: string
    ) => {
        const data = await request(`${BASE_URL}/api/notes/${noteId}/`, "PUT", {
            user: userId,
            title,
            online,
            time_start, //2023-07-22T15:19:38.601293+03:00 - формат
            time_end, //2023-07-22T15:19:38.601293+03:00
            notify, //2023-07-22T15:19:38.601293+03:00
            doctor, // doctorID
            problem,
            duration_note,
            center, // centerId,
            file,
            status,
        });

        return data;
    };

    const deleteNote = async (noteId: number) => {
        const data = await request(
            `${BASE_URL}/api/notes/${noteId}/`,
            "DELETE"
        );

        return data;
    };

    return {
        changeProfileName,
        verifyEmail,
        sendVerifyCodeForVerifyEmail,
        getUserNotesByToken,
        createNotesByUserToken,
        deleteNote,
        changeNotesData,
        getNoteById,
        getAllDoctors,
        getUserData,
        changeProfileSurname,
        changeProfileBirthday,
        changeProfileAddress,
        changeProfileCountry,
        changeProfileCity,
    };
};
