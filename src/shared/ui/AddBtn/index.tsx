import { FC } from "react";

import { Image } from "@/shared/ui/Image";

import add from "./assets/add-icon.svg";
import styles from "./styles.module.scss";

export const AddBtn: FC = () => {
    return (
        <div className={styles.addBtn}>
            Добавить <Image src={add} alt="add btn" />
        </div>
    );
};
