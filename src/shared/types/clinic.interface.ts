import { ICity } from "./city.interface";
import { ICountry } from "./country.interface";
import { IDisease } from "./disease.interface";
import { IEmployee } from "./empoyee.interface";
import { IUserData } from "./user.interface";

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
    admin: IUserData;
    country: ICountry;
    city: ICity;
    employees: IEmployee[];
    supported_diseases: IDisease[];
}
