import { PropsWithClassName } from "@/shared/types";
import { FC } from "react";
import BoxWrapper from "@/entities/BoxWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsItem from "@/entities/NewsItem";
import styles from "./News.module.scss";

export const News: FC<PropsWithClassName> = ({ className }) => {
  return (
    <BoxWrapper className={className} title="Новости" color="blue">
      <div className={styles.sliderWrapper}>
        <Swiper
          spaceBetween={12}
          slidesPerView={1.6}
          breakpoints={{
            768: {
              slidesPerView: 2.4,
              spaceBetween: 16,
            },

            1280: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <NewsItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewsItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewsItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewsItem />
          </SwiperSlide>
          <SwiperSlide>
            <NewsItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </BoxWrapper>
  );
};
