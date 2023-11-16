import { MouseEvent } from "react";

export interface IMessagePopUpProps {
    top: string;
    left: string;
    replay: () => void;
    remove: () => void;
    copy: (e: MouseEvent<HTMLLIElement>) => void;
    select: () => void;
    edit: () => void;
}
