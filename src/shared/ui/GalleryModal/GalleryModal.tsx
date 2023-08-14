import { FC, MouseEvent, useEffect, KeyboardEvent } from "react";
import { IGalleryModal } from "./types";

import arrowLeft from "/assets/arrow-left-white-big.svg";
import arrowRight from "/assets/arrow-right-white-big.svg";
import styles from "./GalleryModal.module.scss";

export const GalleryModal: FC<IGalleryModal> = ({ setIsOpen, images }) => {
    useEffect(() => {
        function handleClick(e: KeyboardEvent) {
            if (e.code !== "Escape") {
                return;
            } else {
                setIsOpen(false);
            }
        }

        document.body.style.overflow = "hidden";
        document.addEventListener(
            "keydown",
            handleClick as unknown as EventListener
        );

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener(
                "keydown",
                handleClick as unknown as EventListener
            );
        };
    });

    const handleClick = (e: MouseEvent<HTMLImageElement>, n: number) => {
        e.stopPropagation();

        console.log(n);
    };

    return (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
            <div className={styles.arrows}>
                <img
                    src={arrowLeft}
                    alt=""
                    onClick={(e) => handleClick(e, 1)}
                />
                <img
                    src={arrowRight}
                    alt=""
                    onClick={(e) => handleClick(e, -1)}
                />
            </div>
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
