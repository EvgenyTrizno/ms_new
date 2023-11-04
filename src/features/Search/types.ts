import { ChangeEvent } from "react";
export interface ISeacrh {
    placeholder?: string;
    height?: string;
    onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}
