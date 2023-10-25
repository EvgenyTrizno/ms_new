import { FC, useEffect } from "react";
import { IModalProps } from "./types";

import styles from "./styles.module.scss";

export const Modal: FC<IModalProps> = ({
    width,
    height,
    children,
    setIsOpenModal,
}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className={styles.modal} onClick={() => setIsOpenModal(false)}>
            <div
                className={styles.content}
                style={{ width, height }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
