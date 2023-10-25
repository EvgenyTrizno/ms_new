import { FC } from "react";

import { Text } from "@/shared/ui/Text";

import arrow from "/assets/arrow-top-green.svg";
import arrowRed from "/assets/arrow-top-red.svg";
import styles from "./Indicator.module.scss";

interface IIndicatorProps {
    type: "up" | "low";
    value: string;
}

export const Indicator: FC<IIndicatorProps> = ({ value, type }) => {
    return (
        <div className={styles.indicator}>
            <img src={type === "up" ? arrow : arrowRed} alt="" />
            <Text type="h4" fz="12px" color="#00CC5E">
                {value}
            </Text>
        </div>
    );
};
