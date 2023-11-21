import { Dispatch, SetStateAction } from "react";

export interface IExtraCallModal {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
