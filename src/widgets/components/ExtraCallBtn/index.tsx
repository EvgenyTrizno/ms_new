import { FC } from "react";
import { IExtraCallBtn } from "./types";

import extra from "./assets/extra-call.svg";
import cross from "./assets/cross.svg";

import styles from "./styles.module.scss";
import { useExtracall } from "@/shared/model/store/extracall";

export const ExtraCallBtn: FC<IExtraCallBtn> = ({ isOpen, className }) => {
    const { setIsOpen } = useExtracall();

    return (
        <div
            className={`${className} ${styles.extra}`}
            id="extraBtn"
            onClick={() => setIsOpen(isOpen ? false : true)}
        >
            <div className={styles.content}>
                <img src={isOpen ? cross : extra} alt="" />
            </div>
        </div>
    );
};
