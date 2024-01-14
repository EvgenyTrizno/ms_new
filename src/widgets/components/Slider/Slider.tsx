import { Children, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ISlider } from "./types";

import "swiper/css";

export const Slider: FC<ISlider> = ({ children, gap = 10 }) => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={gap}
            navigation={{ nextEl: "#nextArrow", prevEl: "#prevArrow" }}
            modules={[Navigation]}
            style={{ overflow: "hidden", height: 'fit-content' }}
        >
            {Children.map(children, (item) => (
                <SwiperSlide>{item}</SwiperSlide>
            ))}
        </Swiper>
    );
};
