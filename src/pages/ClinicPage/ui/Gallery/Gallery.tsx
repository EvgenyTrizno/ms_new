import BoxWrapper from "@/entities/BoxWrapper";
import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Gallery.module.scss";

export const Gallery: FC<PropsWithClassName> = ({ className }) => {
  return (
    <BoxWrapper className={className} title="Галерея">
      <div className={styles.sliderWrapper}>
        <Swiper spaceBetween={12} slidesPerView={2.6}>
          <SwiperSlide>
            <img
              className={styles.img}
              src="/assets/gallery-item.jpg"
              alt="gallery"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src="/assets/gallery-item.jpg"
              alt="gallery"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src="/assets/gallery-item.jpg"
              alt="gallery"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src="/assets/gallery-item.jpg"
              alt="gallery"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.img}
              src="/assets/gallery-item.jpg"
              alt="gallery"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </BoxWrapper>
  );
};
