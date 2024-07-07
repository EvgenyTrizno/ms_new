import { Doctor, IClinic } from ".";



export interface IService {

    id: number;
    title: string;
    description: string;
    clinic: IClinic;
    created_at: Date;
    updated_at: Date;
    doctors: Doctor[];
    duration: number;
    online: boolean;
    price: number;
}
