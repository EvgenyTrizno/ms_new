import { IClinic } from "./clinic.interface";
import { IUserData } from "./user.interface";

export interface INote {
    center: IClinic;
    clinic: IClinic;
    created_at: Date;
    doctor: IUserData;
    duration_note: number;
    file: File | null;
    id: number;
    notify: null;
    online: boolean;
    problem: string;
    special_check: boolean;
    status: string;
    time_end: Date;
    time_start: Date;
    title: string;
    updated_at: Date;
}
