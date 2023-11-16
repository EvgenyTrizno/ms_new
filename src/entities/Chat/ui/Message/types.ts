import { MouseEvent } from "react";

type Types = "from" | "to";

export interface IMessageProps {
    type: Types;
    onClick: (e?: MouseEvent<HTMLDivElement>) => void;
}
