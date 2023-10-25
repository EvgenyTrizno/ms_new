import { FC } from "react";

import { AvatarProps } from "./types";

import styles from "./styles.module.scss";

export const Avatar: FC<AvatarProps> = ({ type }): JSX.Element => {
    console.log(type);

    const generateAvatar = () => {
        switch (type) {
            case "center":
                return <img src="" alt="" className={styles.centerImg} />;
            case "clinic":
                return <img src="" alt="" className={styles.clinicImg} />;
            case "user":
                return <img src="" alt="" className={styles.userImg} />;
        }
    };

    const img = generateAvatar();

    return img;
};
