import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ISliderFilterProps } from "./types";

import { Image } from "@/shared/ui/Image";

import prev from "./assets/prev.svg";
import next from "./assets/next.svg";
import styles from "./styles.module.scss";

export const SliderFilter: FC<ISliderFilterProps> = ({ data }) => {
    // const swiperRef = useRef<SwiperRef>(null);

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.arrow}
                // onClick={() =>
                //     swiperRef.current && swiperRef.current.slidePrev()
                // }
            >
                <Image src={prev} alt="" />
            </div>
            <Swiper
                // onSwiper={(swiper) => {
                //     swiperRef.current = swiper;
                // }}
                navigation
                slidesPerView={2}
            >
                {data.map((item) => (
                    <SwiperSlide className={styles.filter}>{item}</SwiperSlide>
                ))}
            </Swiper>
            <div
                className={styles.arrow}
                // onClick={() =>
                //     swiperRef.current && swiperRef.current.slideNext()
                // }
            >
                <Image src={next} alt="" />
            </div>
        </div>
    );
};
