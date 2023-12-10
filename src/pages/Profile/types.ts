import { JSX } from "react";
import { IIconData } from "@/shared/types";

export interface IProfileParamsItemsData {
    icon: IIconData;
    label: string;
    content?: JSX.Element | null;
}
