import { FC, useRef } from "react";
import { DoctorCard, SliderHeader } from "@/widgets";
import { useDoctorsQuery } from "../../lib/hooks/useDoctorsQuery";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
export const List: FC = () => {
  const { data } = useDoctorsQuery();
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <>
      <SliderHeader
        swiperRef={swiperRef}
        title="Все врачи"
        withArrows={window.innerWidth >= 768}
      />
      <Swiper
        ref={swiperRef}
        spaceBetween={8}
        slidesPerView={4.5}
        slidesPerGroup={4}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        breakpoints={{
          768: {
            slidesPerView: 4.6,
            slidesPerGroup: 4,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 5.6,
            slidesPerGroup: 5,
            spaceBetween: 10,
          },

          1210: {
            slidesPerView: 8.3,
            slidesPerGroup: 8,
          },

          1920: {
            slidesPerView: 10.3,
            slidesPerGroup: 10,
          },
        }}
      >
        {data &&
          data.data.map((item) => (
            <SwiperSlide key={item.id}>
              <DoctorCard
                key={item.id}
                avatar={item.image}
                rank={item.specialization}
                fio={`${item.middle_name} ${
                  item.first_name?.charAt(1).toUpperCase() + "."
                } ${item.last_name?.charAt(1).toUpperCase()}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
