import { Dispatch, SetStateAction } from "react";

export interface IPolicyProps {
    isChecked: boolean;
    setIsChecked: Dispatch<SetStateAction<boolean>>;
}
