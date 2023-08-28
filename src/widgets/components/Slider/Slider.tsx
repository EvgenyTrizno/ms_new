import { Children, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ISlider } from "./types";

import "swiper/css";

export const Slider: FC<ISlider> = ({ children, slideWidth = 190 }) => {
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            navigation={{ nextEl: "#nextArrow", prevEl: "#prevArrow" }}
            modules={[Navigation]}
        >
            {Children.map(children, (item) => (
                <SwiperSlide style={{ width: slideWidth }}>{item}</SwiperSlide>
            ))}
        </Swiper>
    );
};
