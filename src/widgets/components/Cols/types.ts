import { ReactNode } from "react";

export interface ColsProps {
    children: ReactNode;
    count?: number;
    gap: number;
    cols?: string[];
    type: "auto" | "custom";
}
