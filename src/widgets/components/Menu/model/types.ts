import { TIsSelect } from "@/shared/model/store/types";
import { ReactElement } from "react";

export interface IData {
    label: string | TIsSelect;
    path: string;
    icon: ReactElement;
}
export interface IMenuData {
    default: IData[];
    personal: IData[];
    admin: IData[];
}
