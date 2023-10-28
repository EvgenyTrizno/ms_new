import { ReactNode } from "react";

export interface IMessageBoxProps {
    emoji: ReactNode;
    value: string;
    onChange: () => void;
}
