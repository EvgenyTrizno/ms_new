import { TGroups } from "../Auth/types";
import { ICentersData } from "../Centers/types";

export interface IProfileData {
    address: string | null;
    id: number;
    number: string;
    password: string;
    last_login: Date | null;
    is_required: boolean;
    is_staff: boolean;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    surname: null;
    birthday: string;
    image: string;
    city: string;
    created_at: Date;
    updated_at: Date;
    verification_code: number;
    reset_code: number;
    email_verification_code: number;
    country_id: number | null;
    group_id: number;
    main_center_id: number | null;
    disease: number[];
    centers: number[];
    country: string;
    group: TGroups;
    main_center: ICentersData;
}
