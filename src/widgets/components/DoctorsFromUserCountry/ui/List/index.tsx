import { FC, useState } from "react";
import { DoctorCard } from "@/widgets";
import { useDoctorsQuery } from "../../lib/hooks/useDoctorsQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { DoctorCardSkeleton } from "@/widgets";

export const List: FC = () => {
  const { data, isLoading, isRefetching } = useDoctorsQuery();
  const [skeletonTotal] = useState(new Array(5).fill(0));

  const loading = isLoading || isRefetching;

  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={4.4}
      slidesPerGroup={4.4}
      slidesOffsetBefore={16}
      slidesOffsetAfter={16}
    >
      {!loading
        ? data &&
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
          ))
        : skeletonTotal.map((_, idx) => (
            <SwiperSlide key={idx}>
              <DoctorCardSkeleton />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};
