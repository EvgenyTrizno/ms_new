import { FC } from "react";
import { IImageProps } from "./types";

export const Image: FC<IImageProps> = ({
    src,
    alt,
    width,
    height,
    style,
    onClick,
}) => {
    return (
        <img
            src={src}
            alt={alt}
            onClick={onClick}
            style={{ ...style, width, height }}
        />
    );
};
