import { ReactNode } from "react";

export interface IMessageBoxProps {
    emoji: ReactNode;
    ws: WebSocket | undefined;
}
