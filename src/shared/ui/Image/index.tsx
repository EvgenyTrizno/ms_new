import { FC } from "react";
import { IImageProps } from "./types";

export const Image: FC<IImageProps> = ({ src, alt, width, height, style }) => {
    return <img src={src} alt={alt} style={{ ...style, width, height }} />;
};
