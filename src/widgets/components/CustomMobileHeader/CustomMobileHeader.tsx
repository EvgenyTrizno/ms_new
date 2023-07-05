import { FC } from "react";
import { IHeaderProps } from "./types";

import { useUserCondition } from "@/shared/model/store";

import styles from "./CustomMobileHeader.module.scss";

export const CustomMobileHeader: FC<IHeaderProps> = ({ children }) => {
    const { condition } = useUserCondition();

    return (
        <div
            className={styles.header}
            style={
                condition === "Болен" ? { borderBottomColor: "#F7E6E8" } : {}
            }
        >
            {children}
        </div>
    );
};
