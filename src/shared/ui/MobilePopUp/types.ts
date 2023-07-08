import { ReactNode } from "react";

export interface IMobilePopUp {
    width?: string;
    height?: string;
    children: ReactNode;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}
