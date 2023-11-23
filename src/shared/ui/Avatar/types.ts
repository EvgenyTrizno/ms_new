import { CSSProperties } from "react";

export type AvatarType = "user" | "center" | "clinic" | "custom";
export type SizeType = "S" | "M" | "L" | "XL";

export interface AvatarProps<T extends "custom" | AvatarType> {
    type: T extends "custom" ? "custom" : AvatarType;
    size: T extends "custom" ? number : SizeType;
    img: string;
    onClick?: () => void;
    style?: CSSProperties;
}
