import { FC, useEffect } from "react";
import { IModalProps } from "./types";

import styles from "./styles.module.scss";
import { Portal } from "@/shared/ui/Portal";

export const Modal: FC<IModalProps> = ({
    width,
    height,
    children,
    setIsOpenModal,
    isOpen,
}) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        isOpen && (
            <Portal>
                <div
                    className={styles.modal}
                    onClick={() => setIsOpenModal(false)}
                >
                    <div
                        className={styles.content}
                        style={{ width, height }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </Portal>
        )
    );
};
