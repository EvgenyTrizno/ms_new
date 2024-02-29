import { FC, useRef } from "react";

import { SliderHeader } from "@/widgets";
import { CenterCard } from "../CenterCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { SliderWrapper } from "@/widgets/components/SliderWrapper";

export const CentersList: FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <SliderWrapper>
      <SliderHeader title="Центры" swiperRef={swiperRef} />

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
          <CenterCard />
        </SwiperSlide>
        <SwiperSlide>
          <CenterCard />
        </SwiperSlide>
        <SwiperSlide>
          <CenterCard />
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};
