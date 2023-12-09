export interface IEmployee {
    id: number;
    password: string;
    last_login: null | Date;
    first_name: string;
    last_name: string;
    number: string;
    email: null | string;
    image: string;
    surname: string | null;
    middle_name: string;
    address: string;
    specialization: string;
    work_experience: string;
    registration_date: Date;
    review_date: null | Date;
    review_passed: null;
    created_at: Date;
    updated_at: Date;
    verification_code: number;
    reset_code: number;
    email_verification_code: number;
    city: number;
    country: number;
    center: number;
    clinic: null | number;
    rating: number;
}
