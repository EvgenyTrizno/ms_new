import { FC } from "react";

import { Text } from "../Text";
import { useAuth } from "@/shared/model/store/auth";

import arrow from "./assets/arrow-right-blue.svg";
import arrowRed from "./assets/arrow-right-red.svg";
import styles from "./styles.module.scss";

interface IInfoTextProps {
    text: string;
    onClick?: () => void;
}

export const InfoText: FC<IInfoTextProps> = ({ text, onClick }) => {
    const { user } = useAuth();

    const sick = user && user.disease.length;

    return (
        <div className={styles.info} onClick={onClick}>
            <Text type="p" color={sick ? "#D64657" : "#0064FA"}>
                {text}
            </Text>
            <img src={sick ? arrowRed : arrow} alt="" />
        </div>
    );
};
