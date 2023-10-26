import { FC } from "react";
import { IImageProps } from "./types";

export const Image: FC<IImageProps> = ({ src, alt, width, height }) => {
    return <img src={src} alt={alt} style={{ width, height }} />;
};
