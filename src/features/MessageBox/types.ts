import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IMessageBoxProps {
    emoji: ReactNode;
    ws: WebSocket | undefined;
    setMsg: Dispatch<SetStateAction<string>>;
}
