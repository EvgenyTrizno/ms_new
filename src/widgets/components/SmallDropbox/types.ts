import { Dispatch, SetStateAction } from "react";

export interface ISmallDropboxProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    data: string[];
    select: string;
    setSelect: Dispatch<SetStateAction<string>>;
}
