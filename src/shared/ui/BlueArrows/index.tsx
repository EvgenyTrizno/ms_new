import { FC } from "react";
import { motion } from "framer-motion";
import { IBlueArrowsProps } from "./types";

import styles from "./styles.module.scss";

export const BlueArrows: FC<IBlueArrowsProps> = ({ prev, next }) => {
    // const swiper = useSwiper();
    // const [isEnd, setIsEnd] = useState(false);

    // const handlePrev = () => {
    //     swiper && swiper.slidePrev();
    // };

    // const handleNext = () => {
    //     if (swiper && !isEnd) {
    //         swiper.slideNext();
    //     }
    // };

    // useEffect(() => {
    //     const handleReachEnd = () => {
    //         setIsEnd(true);
    //     };

    //     const handleSlideChange = () => {
    //         setIsEnd(false);
    //     };

    //     swiper && swiper.on("reachEnd", handleReachEnd);
    //     swiper && swiper.on("slideChange", handleSlideChange);

    //     return () => {
    //         swiper && swiper.off("reachEnd", handleReachEnd);
    //         swiper && swiper.off("slideChange", handleSlideChange);
    //     };
    // }, [swiper]);

    return (
        <div className={styles.arrows}>
            <motion.div
                whileTap={{
                    backgroundColor: "#0050C8",
                    borderColor: "#0050C8",
                }}
                whileHover={{ backgroundColor: "#0064FA" }}
                style={{ backgroundColor: "white" }}
                onClick={prev}
                className={styles.arrow}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M7.9165 16.6654L14.5832 9.9987L7.9165 3.33203"
                        stroke="#0064FA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
            <motion.div
                whileTap={{
                    backgroundColor: "#0050C8",
                    borderColor: "#0050C8",
                }}
                style={{ backgroundColor: "white" }}
                onClick={next}
                whileHover={{ backgroundColor: "#0064FA" }}
                className={styles.arrow}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M7.9165 16.6654L14.5832 9.9987L7.9165 3.33203"
                        stroke="#0064FA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </div>
    );
};
