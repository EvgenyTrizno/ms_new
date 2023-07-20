import { FC } from "react";
import { IModalProps } from "@/shared/types";

import styles from "./Modal.module.scss";

export const Modal: FC<IModalProps> = ({
    width,
    height,
    children,
    setIsOpenModal,
}) => {
    return (
        <div className={styles.modal} onClick={() => setIsOpenModal(false)}>
            <div className={styles.content} style={{ width, height }}>
                {children}
            </div>
        </div>
    );
};
