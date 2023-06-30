import { FC, useEffect, useRef, useState } from "react";
import { ISlider } from "./types";

import arrowLeft from "/assets/arrow-left.svg";
import arrowRight from "/assets/arrow-right.svg";
import styles from "./Slider.module.scss";

export const Slider: FC<ISlider> = ({ children, container }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const el = ref.current;

        if (el) {
            const onWheel = (e: WheelEvent) => {
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 2,
                    behavior: "smooth",
                });
            };

            el.addEventListener("wheel", onWheel);

            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    useEffect(() => {
        const changeScrollOffset = () => {
            if (ref.current) {
                const scrollContainer = ref.current;

                scrollContainer.scrollTo({
                    left: position,
                    behavior: "smooth",
                });
            }
        };

        changeScrollOffset();
    }, [position]);

    const handleArrowClick = (pos: number) => {
        if (ref.current) {
            const scrollContainer = ref.current;
            const newPosition = scrollContainer.scrollLeft + pos;
            setPosition(newPosition);
        }
    };

    return (
        <div className={styles.slider}>
            <div className={styles.arrows}>
                <img
                    src={arrowLeft}
                    alt=""
                    className={styles.arrow}
                    onClick={() => handleArrowClick(-160)}
                />
                <img
                    src={arrowRight}
                    alt=""
                    className={styles.arrow}
                    onClick={() => handleArrowClick(160)}
                />
            </div>

            <div
                className={styles.container}
                style={{ width: container }}
                ref={ref}
            >
                <div className={styles.slides}>{children}</div>
            </div>
        </div>
    );
};
