import { FC } from "react";
import { IHeaderProps } from "./types";

import { Text } from "@/shared";
import { useUserCondition } from "@/shared/model/store";

import styles from "./CustomMobileHeader.module.scss";

export const CustomMobileHeader: FC<IHeaderProps> = ({ children, text }) => {
    const { condition } = useUserCondition();

    return (
        <div
            className={styles.header}
            style={
                condition === "Болен" ? { borderBottomColor: "#F7E6E8" } : {}
            }
        >
            {children}
            {text && text.length && (
                <div style={{ marginLeft: 12 }}>
                    <Text type="h2" fz="19px">
                        {text}
                    </Text>
                </div>
            )}
        </div>
    );
};
