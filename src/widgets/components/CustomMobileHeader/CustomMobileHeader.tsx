import { FC } from "react";
import { useNavigate } from "react-router";
import { IHeaderProps } from "./types";

import { Text } from "@/shared/ui/Text";

import styles from "./CustomMobileHeader.module.scss";

export const CustomMobileHeader: FC<IHeaderProps> = ({ btn, text }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <svg
                onClick={() => navigate(-1)}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                style={{ marginRight: 12 }}
            >
                <path
                    d="M21 26L11 16L21 6"
                    stroke="#262626"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            {text && text.length && (
                <Text type="h2" fz="18px">
                    {text}
                </Text>
            )}
            <div style={{ position: "absolute", right: "16px" }}>{btn}</div>
        </div>
    );
};
