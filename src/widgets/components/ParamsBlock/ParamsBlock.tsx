import { FC } from "react";
import { IParamsBlockProps } from "./types";

import { Text } from "@/shared/ui/Text";

import arrowRight from "/assets/arrow-right-gray.svg";
import styles from "./ParamsBlock.module.scss";

export const ParamsBlock: FC<IParamsBlockProps> = ({ onClick, label, img }) => {
    return (
        <div className={styles.item} onClick={onClick}>
            <div className={styles.box}>
                <img src={img} alt="" />
                <Text type="p">{label}</Text>
            </div>
            <img src={arrowRight} alt="" />
        </div>
    );
};
