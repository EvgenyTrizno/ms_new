export type TUsers = {
    id: number;
    password: string;
    last_login: Date | null;
    is_required: boolean;
    is_staff: boolean;
    number: string;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
};

export type TClinics = {
    name: string;
    image: string;
    is_required: boolean;
    number: string | null;
    email: string | null;
    employees_number: number;
    country: number;
    city: string;
    address: string;
    created_at: Date;
    updated_at: Date;
    supported_diseases: object;
    rating: number;
    description: string | null;
};

export type TCenters = Omit<TClinics, "supported_diseases">;

export interface ISearchResult {
    clinics: TClinics[];
    centers: TCenters[];
    users: TUsers[];
}
