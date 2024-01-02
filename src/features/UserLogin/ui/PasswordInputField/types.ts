import { ChangeEvent } from "react";

export interface IPasswordInputFieldProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error: boolean;
}
