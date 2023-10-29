import { CSSProperties, ReactNode } from "react";

export interface IFilter {
    data: string[];
    width?: string;
    icons?: ReactNode[];
    style?: CSSProperties;
}
