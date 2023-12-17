import { FC } from "react";

import { Image } from "@/shared/ui/Image";

import plus from "./assets/plus.svg";
import styles from "./styles.module.scss";

export const AddBtn: FC = () => {
    return (
        <div className={styles.add}>
            <Image src={plus} alt="" />
        </div>
    );
};
