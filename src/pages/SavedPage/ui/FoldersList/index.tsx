import { FC, useRef } from "react";

import { Folder } from "../Folder";
import { SliderHeader } from "@/widgets";
import { SliderWrapper } from "@/widgets/components/SliderWrapper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { File } from "../File";

export const FoldersList: FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <SliderWrapper>
      <SliderHeader title="Публикации" swiperRef={swiperRef} />

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
