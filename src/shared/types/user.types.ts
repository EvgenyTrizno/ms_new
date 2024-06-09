import { ICity } from "./city.interface";
import { IClinic } from "./clinic.types";
import { ICountry } from "./country.interface";
import { IDisease } from "./disease.interface";
import { TGender } from "./gender.type";
import { IGroup } from "./group.type";

export interface IUser {
    id: number;
    password: string;
    last_login: Date | null;
    is_required: boolean;
    is_staff: boolean;
    sex: TGender | null;
    number: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    surname: string | null;
    birthday: string | null;
    image: string;
    address: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    verification_code: number;
    reset_code: number;
    email_verification_code: number;
    group: IGroup | null;
    clinic: number | null;
    interest: number | null;
    country: ICountry | null;
    city: ICity | null;
    centers: IClinic[];
    disease: IDisease[];
}
