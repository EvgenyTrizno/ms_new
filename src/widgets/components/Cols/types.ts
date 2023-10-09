import { ReactNode } from "react";

export interface ColsProps {
    children: ReactNode;
    count?: number;
    gap: number | "auto";
    cols?: string[];
    type: "auto" | "custom";
}
