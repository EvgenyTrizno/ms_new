import { IDoctorResponse } from "@/widgets/components/DoctorsFromUserCountry/api/getDoctors";
import { Doctor, ICountry, INews, INote } from ".";
import { ICity } from "./city.interface";
import { IDisease } from "./disease.interface";
import { IUser } from "./user.types";

export interface IClinic {
    id: number;
    name: string;
    password: string;
    last_login: null;
    image: string;
    rating: number;
    description: string;
    is_required: boolean;
    number: string;
    email: string;
    observed: number;
    observed_after: number;
    address: string;
    lng: string;
    lat: string;
    created_at: Date;
    updated_at: Date;
    review_date: null;
    review_passed: null;
    admin: IUser;
    country: ICountry;
    city: ICity;
    employees: Doctor[];
    supported_diseases: IDisease[];
    online_notes: number;
    offline_notes: number;
}

export type ClinicResTypes = {
    online_notes: INote[];
    offline_notes: INote[];
    doctors: Doctor[];
    clinic: IClinic[];
    news: INews[];
    users: IUser[];
};
