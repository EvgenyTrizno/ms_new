import { FC } from "react";

import { Text } from "../Text";
import { SMALL_LAPTOP } from "@/shared/utils";

import arrow from "/assets/arrow-right-blue.svg";
import styles from "./styles.module.scss";

interface IInfoTextProps {
    text: string;
    onClick?: () => void;
}

export const InfoText: FC<IInfoTextProps> = ({ text, onClick }) => {
    return (
        <div className={styles.info} onClick={onClick}>
            <Text type="p" fz={SMALL_LAPTOP ? "12px" : "14px"} color="#0064FA">
                {text}
            </Text>
            <img src={arrow} alt="" />
        </div>
    );
};
