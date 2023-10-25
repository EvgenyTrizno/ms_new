import { ReactNode } from "react";

export interface ICard {
    checkbox: ReactNode;
    onClick?: () => void;
    name: string;
}
