import { JSX } from "react";
import { IIconData } from "@/shared/types";

export interface IProfileParamsItemsData {
    id: string;
    icon: IIconData;
    label: string;
    content: JSX.Element;
}

export interface IProfileParamsData {
    main: IProfileParamsItemsData[];
    other: IProfileParamsItemsData[];
}
