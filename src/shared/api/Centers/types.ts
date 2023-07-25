export interface ICentersData {
    id: number;
    name: string | null;
    image: string;
    rating: number;
    description: string | null;
    is_required: boolean;
    number: string;
    email: string | null;
    employees_number: number | null;
    city: string | null;
    address: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    country_id: number | null;
    lat: number;
    lng: number;
}
