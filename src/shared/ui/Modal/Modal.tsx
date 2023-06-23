import { FC, MouseEvent, useEffect } from "react";
import { IModal } from "./types";

import styles from "./Modal.module.scss";

export const Modal: FC<IModal> = ({ children, width, height, setIsOpen }) => {
    useEffect(() => {
        window.document.body.style.overflow = "hidden";

        return () => {
            window.document.body.style.overflow = "";
        };
    });

    return (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
            <div
                className={styles.content}
                style={{ width, height }}
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
