import { FC, useRef } from "react";

import { SliderHeader } from "@/widgets";
import { DoctorCard } from "../DoctorCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { SliderWrapper } from "@/widgets/components/SliderWrapper";

export const DoctorsList: FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <SliderWrapper>
      <SliderHeader title="Врачи" swiperRef={swiperRef} />

      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1.25}
        slidesPerGroup={1}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        navigation
      >
        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>
        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>
        <SwiperSlide>
          <DoctorCard />
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};
