import { ChangeEvent } from "react";
export interface ISeacrh {
    placeholder?: string;
    height?: string;
    width?: string;
    className?: string;
    onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}
