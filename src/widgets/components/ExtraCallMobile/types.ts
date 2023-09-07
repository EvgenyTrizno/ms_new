import { IIconData } from "@/shared/types";
export interface IExtraCallBtnPositionData {
    x: number;
    y: number;
}
export interface IExtraCallBtnData {
    icon: IIconData;
    id: string;
    position: IExtraCallBtnPositionData;
    type: string;
}
