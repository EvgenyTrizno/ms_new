import { ReactNode } from "react";

export interface INoteParamsProps {
    children: ReactNode;
}

export interface INoteData {
    id: string;
    title: string;
    subtitle: string | null;
    content: JSX.Element | null;
}
