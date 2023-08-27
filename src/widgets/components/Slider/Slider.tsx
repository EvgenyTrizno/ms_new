import { Children, FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ISlider } from "./types";

import "swiper/css";

export const Slider: FC<ISlider> = ({ children }) => {
    const el = useRef<Element | null>(null);
    const cardRef = useRef<Element | null>(null);
    const [per, setPer] = useState<number>();

    useEffect(() => {
        el.current = document.querySelector(".swiper");
        cardRef.current = document.querySelector("#card");

        if (el.current && cardRef.current) {
            setPer(
                Math.floor(
                    parseInt(window.getComputedStyle(el.current).width) /
                        parseInt(window.getComputedStyle(cardRef.current).width)
                )
            );
        }
    }, [children]);

    return (
        <Swiper
            slidesPerView={per ?? 0}
            spaceBetween={10}
            modules={[Navigation]}
        >
            {Children.map(children, (item) => (
                <SwiperSlide
                    style={{
                        maxWidth:
                            (cardRef.current &&
                                parseInt(
                                    window.getComputedStyle(cardRef.current)
                                        .width
                                )) ??
                            0,
                    }}
                >
                    {item}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
