import { IUserData } from "@/shared/types/user.interface";

export interface IAccess {
    id: number;
    access_accept: IUserData[];
    user: IUserData;
    access_unaccept: IUserData[];
}
