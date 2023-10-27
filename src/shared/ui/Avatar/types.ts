export type AvatarType = "user" | "center" | "clinic";
export type SizeType = "S" | "M" | "L" | "XL";

export interface AvatarProps {
    type: AvatarType;
    size: SizeType;
    img: string;
}
