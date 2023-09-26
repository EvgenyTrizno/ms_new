import { FC, useState, useEffect } from "react";
import { useSwiper } from "swiper/react";

import styles from "./SliderArrows.module.scss";

export const SliderArrows: FC = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(false);

    const handlePrev = () => {
        swiper && swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiper && !isEnd) {
            swiper.slideNext();
        }
    };

    useEffect(() => {
        const handleReachEnd = () => {
            setIsEnd(true);
        };

        const handleSlideChange = () => {
            setIsEnd(false);
        };

        swiper && swiper.on("reachEnd", handleReachEnd);
        swiper && swiper.on("slideChange", handleSlideChange);

        return () => {
            swiper && swiper.off("reachEnd", handleReachEnd);
            swiper && swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={styles.arrows}>
            <div
                className={
                    isEnd ? `${styles.prev} ${styles.disabled}` : styles.prev
                }
                onClick={handlePrev}
                id="prevArrow"
            >
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
                    <path
                        d="M7.5299 1.34315L1.87305 7L7.5299 12.6569"
                        stroke="#262626"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div
                className={
                    isEnd ? `${styles.next} ${styles.disabled}` : styles.next
                }
                onClick={handleNext}
                id="nextArrow"
            >
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none">
                    <path
                        d="M1.84315 1.34315L7.5 7L1.84315 12.6569"
                        stroke="#262626"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};
