import { FC, useRef } from "react";

import { SliderHeader } from "@/widgets";
import { DoctorCard } from "../DoctorCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { SliderWrapper } from "@/widgets/components/SliderWrapper";
import styles from "./styles.module.scss";

export const DoctorsList: FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <SliderWrapper>
      <SliderHeader title="Врачи" swiperRef={swiperRef} withArrows />

      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1.25}
        slidesPerGroup={1}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2.3,
          },

          1024: {
            slidesPerView: 2.4,
          },

          1400: {
            slidesPerView: 4.5,
          },
        }}
      >
        <SwiperSlide>
          <div className={styles.doctorCardWrapper}>
            <DoctorCard />
            <DoctorCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.doctorCardWrapper}>
            <DoctorCard />
            <DoctorCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.doctorCardWrapper}>
            <DoctorCard />
            <DoctorCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.doctorCardWrapper}>
            <DoctorCard />
            <DoctorCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.doctorCardWrapper}>
            <DoctorCard />
            <DoctorCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};
