import { TGroups } from "./group.type";
import { TStages } from "./registrationStages.type";

export interface ICreateUser {
    birthday: string;
    numberOrEmail: string;
    group: TGroups;
    password1: string;
    password2: string;
    stage: TStages;
    main_center?: number;
    disease?: number[];
}
