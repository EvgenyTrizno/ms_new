import { BASE_URL } from "@/shared/config";
import { useHttp } from "@/shared/hooks";

export const Account = () => {
    const { request } = useHttp();

    const changeProfileData = async (
        token: string,
        first_name?: string,
        last_name?: string,
        birthday?: Date,
        country?: string,
        address?: string,
        city?: string,
        number?: string
    ) => {
        const data = await request(
            `${BASE_URL}/api/users/`,
            "PUT",
            {
                first_name,
                last_name,
                birthday,
                country,
                address,
                city,
                number,
            },
            {
                Authorization: token,
            }
        );

        return data;
    };

    const verifyEmail = async (userId: number, email: string) => {
        const data = await request(
            `${BASE_URL}/api/verify-email/${userId}/`,
            "POST",
            {
                email,
            }
        );

        return data;
    };

    const sendVerifyCodeForVerifyEmail = async (
        userId: number,
        code: string
    ) => {
        const data = await request(
            `${BASE_URL}/api/verify-email-code/${userId}/`,
            "POST",
            { code }
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
        center: number,
        file: string,
        status: string
    ) => {
        const data = await request(`${BASE_URL}/api/notes/${token}/`, "POST", {
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
        changeProfileData,
        verifyEmail,
        sendVerifyCodeForVerifyEmail,
        getUserNotesByToken,
        createNotesByUserToken,
        deleteNote,
        changeNotesData,
        getNoteById,
        getAllDoctors,
    };
};
