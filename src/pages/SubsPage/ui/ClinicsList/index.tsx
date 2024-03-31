import { FC, useRef } from "react";
import { ClinicCard } from "../ClinicCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { SliderHeader } from "@/widgets";
import { SliderWrapper } from "@/widgets/components/SliderWrapper";
import styles from "./styles.module.scss";

export const ClinicsList: FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <SliderWrapper>
      <SliderHeader title="Клиники" swiperRef={swiperRef} />

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

          1280: {
            slidesPerView: 4.5
          },

          1400: {
            slidesPerView: 4.5,
          },
        }}
      >
        <SwiperSlide>
          <div className={styles.clinicCardWrapper}>
            <ClinicCard />
            <ClinicCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clinicCardWrapper}>
            <ClinicCard />
            <ClinicCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clinicCardWrapper}>
            <ClinicCard />
            <ClinicCard />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.clinicCardWrapper}>
            <ClinicCard />
            <ClinicCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clinicCardWrapper}>
            <ClinicCard />
            <ClinicCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.clinicCardWrapper}>
            <ClinicCard />
            <ClinicCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};
