import { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";

export interface IFilter {
    data: string[];
    width?: string;
    icons?: ReactNode[];
    style?: CSSProperties;
    isSelect: string;
    setIsSelect: Dispatch<SetStateAction<string>>;
}
