import { FC, MouseEvent, useEffect } from "react";
import { IGalleryModal } from "./types";

import styles from "./GalleryModal.module.scss";

export const GalleryModal: FC<IGalleryModal> = ({ setIsOpen, images }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    });

    return (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
            <div
                className={styles.inner}
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                <div className={styles.content}>
                    <img src={images[0]} alt="" />
                </div>
                <div className={styles.list}>
                    {images.map((img, i) => (
                        <img src={img} key={i} alt="" />
                    ))}
                </div>
            </div>
        </div>
    );
};
