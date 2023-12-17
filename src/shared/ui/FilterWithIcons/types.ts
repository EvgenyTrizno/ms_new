import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IFilterWithIconsProps {
    data: ReactNode[];
    isSelect: string;
    setIsSelect: Dispatch<SetStateAction<string>>;
    width?: string;
}
