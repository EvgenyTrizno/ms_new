import { ChangeEvent } from "react";

export interface IMobileSwitch {
    onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}
