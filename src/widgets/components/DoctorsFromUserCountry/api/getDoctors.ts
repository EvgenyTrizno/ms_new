import { instance } from "@/shared/config/axiosInstance";
import { ICity } from "@/shared/types/city.interface";
import { IClinic } from "@/shared/types/clinic.interface";
import { ICountry } from "@/shared/types/country.interface";
import { AxiosResponse } from "axios";

export interface IDoctorResponse {
    address: string;
    center: IClinic;
    city: ICity;
    clinic: null;
    country: ICountry;
    created_at: Date;
    email: string | null;
    email_verification_code: number;
    image: string;
    first_name: string;
    id: number;
    last_login: Date | null;
    last_name: string;
    middle_name: string;
    number: string;
    password: string;
    registration_date: Date;
    reset_code: number;
    review_date: null;
    review_passed: null;
    specialization: string;
    updated_at: Date;
    verification_code: number;
    work_experience: string;
}

export async function getDoctors(
    token: string
): Promise<AxiosResponse<IDoctorResponse[]>> {
    return await instance.get(`/notes/doctors/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
