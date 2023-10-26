import { FC } from "react";

import { AvatarProps } from "./types";

import styles from "./styles.module.scss";

export const Avatar: FC<AvatarProps> = ({ type, size, img }): JSX.Element => {
    const generateAvatar = () => {
        switch (type) {
            case "center":
                return (
                    <img
                        src={img}
                        alt=""
                        style={{ width: size, height: size }}
                        className={styles.centerImg}
                    />
                );
            case "clinic":
                return (
                    <img
                        src={img}
                        alt=""
                        style={{ width: size, height: size }}
                        className={styles.clinicImg}
                    />
                );
            case "user":
                return (
                    <img
                        src={img}
                        alt=""
                        style={{ width: size, height: size }}
                        className={styles.userImg}
                    />
                );
        }
    };

    const image = generateAvatar();

    return image;
};
