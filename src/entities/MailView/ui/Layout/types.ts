import { ReactNode } from "react";

export interface IMailViewProps {
    messages: ReactNode;
    withHeader: boolean;
    date: boolean;
    gap?: number;
}
