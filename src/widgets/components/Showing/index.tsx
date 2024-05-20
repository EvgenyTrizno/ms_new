import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { WidgetWrapper } from "../WidgetWrapper";
import { ShowingItem } from "./ui/ShowingItem";
import styles from "./styles.module.scss";
import { SliderHeader } from "../SliderHeader";
import { useRef } from "react";

export const Showing = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <WidgetWrapper title="Показы" headerRight={<SliderHeader swiperRef={swiperRef} withArrows={true} />}>

      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        slidesPerGroup={1}
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className={styles.list}>
            <ShowingItem />
            <ShowingItem />
            <ShowingItem />
            <ShowingItem />
            <ShowingItem />
            <ShowingItem />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.list}>
            <ShowingItem />
            <ShowingItem />
            <ShowingItem />
            <ShowingItem />
            <ShowingItem />
            <ShowingItem />
          </div>
        </SwiperSlide>
      </Swiper>
    </WidgetWrapper>
  );
};
