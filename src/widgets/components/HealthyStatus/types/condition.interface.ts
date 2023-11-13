import { MouseEvent } from "react";

export interface ICondition {
    condition: number;
    handleMouseEnter: (e: MouseEvent<HTMLDivElement>) => void;
    handleMousleLeave: (e: MouseEvent<HTMLDivElement>) => void;
}
