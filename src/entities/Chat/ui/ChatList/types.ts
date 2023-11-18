import { Dispatch, SetStateAction } from "react";

export interface IChatListProps {
    uuid: string;
    search: string;
    selectChat: Dispatch<SetStateAction<string>>;
    setUserId: Dispatch<SetStateAction<number>>;
    setChatId: Dispatch<SetStateAction<number>>;
}
