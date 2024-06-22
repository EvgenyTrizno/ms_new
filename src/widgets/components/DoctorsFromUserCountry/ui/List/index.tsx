import { FC, useRef } from "react";
import { DoctorCard, SliderHeader } from "@/widgets";
import { useDoctorsQuery } from "../../lib/hooks/useDoctorsQuery";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useAuth } from "@/shared/model/store/auth";
import { useResultsQuery } from "@/entities/SearchResultsList/lib/hooks/useResultsQuery";
export const List: FC = () => {
    const { data: search } = useResultsQuery();
    const { data } = useDoctorsQuery();
    const { user } = useAuth();

    const swiperRef = useRef<SwiperRef>(null);

    return (
        <>
            {
                user?.country?.name &&
                <SliderHeader
                    swiperRef={swiperRef}
                    title={user?.country?.name ? `Все специалисты из ${user.country?.name}` : "Все врачи"}
                    withArrows={window.innerWidth >= 768}
                />}
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
                {(search && !user?.country?.name) ?
                    search.data.doctors.map((item) => (
                        <SwiperSlide key={item.id}>
                            <DoctorCard
                                key={item.id}
                                avatar={item.image}
                                rank={item.specialization}
                                fio={`${item.last_name} ${item.first_name?.slice(0, 1).toUpperCase() + "."
                                    }${item.middle_name?.slice(0, 1).toUpperCase()}`}
                            />
                        </SwiperSlide>
                    )) :

                    data?.data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <DoctorCard
                                key={item.id}
                                avatar={item.image}
                                rank={item.specialization}
                                fio={`${item.last_name} ${item.first_name?.slice(0, 1).toUpperCase() + "."
                                    }${item.middle_name?.slice(0, 1).toUpperCase()}`}
                            />
                        </SwiperSlide>))

                }
            </Swiper>
        </>
    );
};
