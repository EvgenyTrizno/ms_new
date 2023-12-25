import { FC } from "react";
import { IWhiteContentBlockProps } from "./types";

import styles from "./styles.module.scss";
import { useAuth } from "@/shared/model/store/auth";

export const WhiteContentBlock: FC<IWhiteContentBlockProps> = ({
    children,
    style,
    className,
}) => {
    const { user } = useAuth();

    return (
        <div
            className={`${className} ${styles.box} ${
                user?.group.name === "Пользователи" &&
                user.disease.length &&
                styles.sick
            }`}
            style={style}
        >
            {children}
        </div>
    );
};
