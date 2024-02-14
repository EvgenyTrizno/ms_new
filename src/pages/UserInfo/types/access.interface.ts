import { IUserData } from "@/shared/types/user.types";

export interface IAccess {
    id: number;
    access_accept: IUserData[];
    user: IUserData;
    access_unaccept: IUserData[];
}
