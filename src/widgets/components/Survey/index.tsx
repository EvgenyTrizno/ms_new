import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { WidgetWrapper } from "../WidgetWrapper";
import styles from "./styles.module.scss";
import { useRef } from "react";
import { SliderHeader } from "../SliderHeader";

export const Survey = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <WidgetWrapper title="Опрос" headerRight={<SliderHeader swiperRef={swiperRef} withArrows={true} />}>
      <div className={styles.wrapper}>
        <Swiper spaceBetween={12} slidesPerView={2.3} ref={swiperRef}>
          <SwiperSlide>
            <div className={styles.item}></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.item}></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.item}></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.item}></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.item}></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.item}></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </WidgetWrapper>
  );
};
