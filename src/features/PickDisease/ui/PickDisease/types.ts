import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IMainModalProps {
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
    text: string;
    btns: ReactNode;
    setDisease: Dispatch<SetStateAction<number[]>>;
    isOpen: boolean;
}
