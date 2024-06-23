import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ICreatePassFormProps {
    btn: ReactNode;
    setPassword: Dispatch<SetStateAction<string>>;
}
