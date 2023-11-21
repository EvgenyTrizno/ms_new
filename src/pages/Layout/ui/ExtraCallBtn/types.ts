import { Dispatch, SetStateAction } from "react";

export interface IExtraCallBtn {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
