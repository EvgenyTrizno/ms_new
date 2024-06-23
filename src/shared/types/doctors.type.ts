import { ICountry } from ".";
import { ICity } from "./city.interface";

export type Doctor = {
    id: number;
    password: string;
    last_login: string | null;
    created_at: string | null;
    updated_at: string | null;
    main_status: boolean;
    online: boolean | null;
    first_name: string | null;
    last_name: string | null;
    number: string;
    email: string | null;
    image: string;
    middle_name: string;
    address: string;
    specialization: string;
    work_experience: string;
    registration_date: string;
    review_date: string | null;
    review_passed: boolean | null;
    verification_code: number;
    reset_code: number;
    email_verification_code: number;
    country: ICountry | null;
    city: ICity | null;
    center: number;
    clinic: number | null;
};
