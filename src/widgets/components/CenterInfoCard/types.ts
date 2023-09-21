import { Dispatch, SetStateAction } from "react";

export interface ICenterInfoCard {
    isOpen?: boolean;
    top?: number;
    left?: number;
    onClick: () => void;
    setIsCardOpen: Dispatch<SetStateAction<boolean>>;
}
