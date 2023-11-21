import { FC } from "react";
import { IExtraCallBtn } from "./types";

import extra from "./assets/extra-call.svg";
import cross from "./assets/cross.svg";

import styles from "./styles.module.scss";

export const ExtraCallBtn: FC<IExtraCallBtn> = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={styles.extra}
            id="extraBtn"
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <img src={isOpen ? cross : extra} alt="" />
        </div>
    );
};
