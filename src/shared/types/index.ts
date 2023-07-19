import { ReactNode, HTMLInputTypeAttribute, ChangeEvent } from "react";

export interface IText {
    type: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: ReactNode;
    position?:
        | "start"
        | "end"
        | "left"
        | "right"
        | "center"
        | "justify"
        | "match-parent";
    fz?: string | number;
    color?: string;
}

export interface IInput {
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    width?: string;
    borderColor?: string;
    checked?: boolean;
    bt?: string;
    br?: string;
    bb?: string;
    bl?: string;
    btr?: string;
    bbr?: string;
    btl?: string;
    bbl?: string;
    bgcolor?: string;
    padding?: string;
    disabled?: boolean;
    height?: string;
    borderRadius?: string;
    value?: string | number | readonly string[];
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IBtn {
    color: string;
    children?: ReactNode;
    width?: string;
    br?: string;
    onClick?: (handleClick?: (arg?: ReactNode) => void) => void;
    padding?: string;
    disabled?: boolean;
    border?: string;
    textColor?: string;
    height?: string;
    type?: "submit" | "reset" | "button";
}

export interface IBackArrow {
    path: string;
}

export interface IIconData {
    helthy: string;
    sick: string;
}
