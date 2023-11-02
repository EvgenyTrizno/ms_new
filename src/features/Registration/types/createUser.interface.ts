import { TGroups } from "@/shared/types";
import { TStages } from ".";

export interface ICreateUser {
    birthday: string;
    numberOrEmail: string;
    group: TGroups;
    password1: string;
    password2: string;
    stage: TStages;
    main_center?: any[];
    disease?: number[];
}
