import { FC } from "react";
import { DoctorCard } from "@/widgets";
import { useDoctorsQuery } from "../../lib/hooks/useDoctorsQuery";
import { Swiper, SwiperSlide } from "swiper/react";

export const List: FC = () => {
  const { data } = useDoctorsQuery();

  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={4.4}
      slidesPerGroup={4.4}
      slidesOffsetBefore={16}
      slidesOffsetAfter={16}
    >
      {data &&
        data.data.map((item) => (
          <SwiperSlide>
            <DoctorCard
              key={item.id}
              surname={item.last_name}
              patronymic={item.middle_name}
              avatar={item.image}
              name={item.first_name}
              rank={item.specialization}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
