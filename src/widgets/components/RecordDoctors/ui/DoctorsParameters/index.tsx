import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { DoctorParameter } from "../DoctorParameter";

export const DoctorsParameters = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.headerTitle}>Параметры врачей:</p>
        <p className={styles.headerText}>Проведенное время врача - 5 часов</p>
      </div>

      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1.3}
          breakpoints={{
            768: {
              slidesPerView: 2.3,
            },

            1024: {
              slidesPerView: 3.15,
            },
          }}
        >
          <SwiperSlide>
            <DoctorParameter />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorParameter />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorParameter />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorParameter />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorParameter />
          </SwiperSlide>
          <SwiperSlide>
            <DoctorParameter />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
