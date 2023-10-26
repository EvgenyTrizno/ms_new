export type AvatarType = "user" | "center" | "clinic";

export interface AvatarProps {
    type: AvatarType;
    size: number;
    img: string;
}
