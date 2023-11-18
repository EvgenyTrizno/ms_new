import { Dispatch, SetStateAction } from "react";

export interface INotificationModalProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
}
