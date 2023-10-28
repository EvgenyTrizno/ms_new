import { FC } from "react";

import { AvatarProps, AvatarType, SizeType } from "./types";

import styles from "./styles.module.scss";

export const Avatar: FC<AvatarProps<AvatarType | "custom">> = ({
    type,
    size,
    img,
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
                        style={generateSize()}
                        className={styles.centerImg}
                    />
                );
            case "clinic":
                return (
                    <img
                        src={img}
                        alt=""
                        style={generateSize()}
                        className={styles.clinicImg}
                    />
                );
            case "user":
                return (
                    <img
                        src={img}
                        alt=""
                        style={generateSize()}
                        className={styles.userImg}
                    />
                );
            case "custom":
                return (
                    <img
                        src={img}
                        alt=""
                        style={generateSize()}
                        className={styles.userImg}
                    />
                );
        }
    };

    const image = generateAvatar();

    return image;
};
