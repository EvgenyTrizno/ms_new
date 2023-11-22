import { ReactNode, CSSProperties } from "react";

export interface ColsProps {
    children: ReactNode;
    count?: number;
    gap: number | "auto";
    cols?: string[];
    type: "auto" | "custom";
    style?: CSSProperties;
    className?: string;
}
