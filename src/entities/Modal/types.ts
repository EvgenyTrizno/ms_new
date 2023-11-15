import { ReactNode } from "react";

export interface IModalProps {
    children: ReactNode;
    width?: string;
    height?: string;
    setIsOpenModal: (bool: boolean) => void;
    isOpen: boolean;
}
