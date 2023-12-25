import { CSSProperties, FC, ReactNode } from "react";

import styles from "./styles.module.scss";
import { useAuth } from "@/shared/model/store/auth";

interface IBlueBoxProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export const BlueBox: FC<IBlueBoxProps> = ({ children, style, className }) => {
    const { user } = useAuth();

    return (
        <div
            className={`${className} ${styles.block} ${
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
