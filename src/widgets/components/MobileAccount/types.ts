import { IIconData } from "@/shared/types";

interface IData {
    id: string;
    label: string;
    icon: IIconData;
    navigate: string;
}

export interface IParamsData {
    default: IData[];
    admin: IData[];
    personal: IData[];
}
