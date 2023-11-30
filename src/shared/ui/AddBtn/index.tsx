import { FC } from "react";
import { IAddBtn } from "./types";

import { Image } from "@/shared/ui/Image";

import add from "./assets/add-icon.svg";
import styles from "./styles.module.scss";

export const AddBtn: FC<IAddBtn> = ({ onClick }) => {
    return (
        <div className={styles.addBtn} onClick={onClick}>
            Добавить <Image src={add} alt="add btn" />
        </div>
    );
};
