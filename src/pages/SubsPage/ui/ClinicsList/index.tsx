import { FC, useRef } from "react";
import { ClinicCard } from "../ClinicCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { SliderHeader } from "@/widgets";
import { SliderWrapper } from "@/widgets/components/SliderWrapper";

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
      >
        <SwiperSlide>
          <ClinicCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClinicCard />
        </SwiperSlide>
        <SwiperSlide>
          <ClinicCard />
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};
