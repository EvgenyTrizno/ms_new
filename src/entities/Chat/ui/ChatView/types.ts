import { ReactNode } from "react";

export interface IChatViewProps {
    name: string;
    time: string;
    message: string;
    count: number;
    active: boolean;
    img: string | ReactNode;
    onClick: () => void;
}
