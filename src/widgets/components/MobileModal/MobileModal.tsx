import { FC, MouseEvent, useEffect } from "react";

import { IModalProps } from "@/shared/types";

import styles from "./MobileModal.module.scss";

export const MobileModal: FC<IModalProps> = ({
    children,
    setIsOpenModal,
    width,
    height,
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
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
