import { FC, useRef } from "react";
import {  SliderHeader } from "@/widgets";
import { File } from "../File";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { SliderWrapper } from "@/widgets/components/SliderWrapper";

export const FilesList: FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <SliderWrapper>
      <SliderHeader title="Файлы" swiperRef={swiperRef} />

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
          <File />
        </SwiperSlide>
        <SwiperSlide>
          <File />
        </SwiperSlide>
        <SwiperSlide>
          <File />
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};
