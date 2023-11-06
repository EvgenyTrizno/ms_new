import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IConfirmationFormProps {
    btn: ReactNode;
    text: ReactNode;
    setCode: Dispatch<SetStateAction<string>>;
}
