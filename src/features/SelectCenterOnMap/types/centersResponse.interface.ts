import { TAdminData } from "@/shared/types/admin.type";

export interface ICenterResponse {
    id: number;
    name: string;
    password: null;
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
    admin: TAdminData;
}
