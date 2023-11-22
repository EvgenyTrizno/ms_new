import { FC } from "react";
import { IMessageFilterProps } from "./types";

import { Image } from "@/shared/ui/Image";

import arrow from "../../assets/arrow-bottom.svg";
import styles from "./styles.module.scss";

export const MessageFilter: FC<IMessageFilterProps> = ({ text }) => {
    return (
        <div className={styles.filter}>
            {text}
            <Image src={arrow} width={14} height={14} alt="arrow" />
        </div>
    );
};
