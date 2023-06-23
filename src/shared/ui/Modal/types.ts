import { ReactNode } from "react";

export interface IModal {
    children: ReactNode;
    width?: string;
    height?: string;
    setIsOpen: (bol: boolean) => void;
}
