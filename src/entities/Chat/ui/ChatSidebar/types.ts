import { Dispatch, SetStateAction } from "react";

export interface IChatSidebarProps {
    selectChat: Dispatch<SetStateAction<string>>;
    setUserId: Dispatch<SetStateAction<number>>;
    setChatId: Dispatch<SetStateAction<number>>;
    uuid: string;
}
