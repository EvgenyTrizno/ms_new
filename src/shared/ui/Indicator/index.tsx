import { FC } from "react";

import { Text } from "@/shared/ui/Text";

import styles from "./styles.module.scss";

interface IIndicatorProps {
    text: string;
}

export const Indicator: FC<IIndicatorProps> = ({ text }) => {
    return (
        <div className={styles.indicator}>
            <Text type="h4" fz="14px" color="#00CC5E">
                {text}
            </Text>
        </div>
    );
};
