import { Dispatch, SetStateAction } from "react";

export interface IFilterSlider {
    data: string[];
    isSelect: string;
    setIsSelect: Dispatch<SetStateAction<string>>;
}
