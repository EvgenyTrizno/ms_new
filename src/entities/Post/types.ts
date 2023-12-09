import { ReactNode } from "react";

export interface IPostLayoutProps {
    actionsGUI: ReactNode;
    postInfo: ReactNode;
    text: string;
    img: string[];
    avatar: string;
    name: string;
    creator: string;
    onClick: () => void;
}
