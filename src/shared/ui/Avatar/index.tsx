import { FC } from "react";

import { AvatarProps, AvatarType, SizeType } from "./types";

import styles from "./styles.module.scss";

export const Avatar: FC<AvatarProps<AvatarType | "custom">> = ({
    type,
    size,
    img,
    onClick,
    style,
}): JSX.Element => {
    const generateSize = () => {
        const sizes = {
            S: 48,
            M: 55,
            L: 64,
            XL: 100,
        };

        return {
            width: type !== "custom" ? sizes[size as SizeType] : size,
            height: type !== "custom" ? sizes[size as SizeType] : size,
        };
    };

    const generateAvatar = () => {
        switch (type) {
            case "center":
                return (
                    <img
                        src={img}
                        alt=""
                        style={{ ...generateSize(), ...style }}
                        className={styles.centerImg}
                        onClick={onClick}
                    />
                );
            case "clinic":
                return (
                    <img
                        src={img}
                        alt=""
                        style={{ ...generateSize(), ...style }}
                        className={styles.clinicImg}
                        onClick={onClick}
                    />
                );
            case "user":
                return (
                    <img
                        src={img}
                        alt=""
                        style={{ ...generateSize(), ...style }}
                        className={styles.userImg}
                        onClick={onClick}
                    />
                );
            case "custom":
                return (
                    <img
                        src={img}
                        alt=""
                        style={{ ...generateSize(), ...style }}
                        className={styles.userImg}
                        onClick={onClick}
                    />
                );
        }
    };

    const image = generateAvatar();

    return image;
};
