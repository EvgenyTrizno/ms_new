import { ReactNode } from "react";

export interface ColsProps {
    children: ReactNode;
    count: number;
    type: "auto" | "custom";
}
