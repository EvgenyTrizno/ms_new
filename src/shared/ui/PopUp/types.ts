import { ReactNode } from "react";

export interface IPopUp {
    width?: string;
    height?: string;
    children: ReactNode;
    top: string;
    right?: string;
    left?: string;
    bottom?: string;
}
