import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ICreatePassFormProps {
    btn: ReactNode;
    setPassword1: Dispatch<SetStateAction<string>>;
    setPassword2: Dispatch<SetStateAction<string>>;
}
