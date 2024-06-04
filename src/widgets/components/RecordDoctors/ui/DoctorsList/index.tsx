import { Swiper, SwiperSlide } from "swiper/react";
// import styles from "./styles.module.scss";
import { DoctorItem } from "../DoctorItem";

export const DoctorsList = () => {
    return (
        <Swiper spaceBetween={10} slidesPerView={1.3} breakpoints={{
            768: {
                slidesPerView: 2.3
            },

            1024: {
                slidesPerView: 3.15
            }
        }}>
            <SwiperSlide>
                <DoctorItem />
            </SwiperSlide>

            <SwiperSlide>
                <DoctorItem />
            </SwiperSlide>

            <SwiperSlide>
                <DoctorItem />
            </SwiperSlide>

            <SwiperSlide>
                <DoctorItem />
            </SwiperSlide>

            <SwiperSlide>
                <DoctorItem />
            </SwiperSlide>
        </Swiper>
    );
};
