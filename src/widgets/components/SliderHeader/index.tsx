import { FC, MutableRefObject } from "react";
import styles from "./styles.module.scss";
import { SwiperRef } from "swiper/react";

type Props = {
  title: string;
  swiperRef: MutableRefObject<SwiperRef | null>;
};

export const SliderHeader: FC<Props> = ({ title, swiperRef }) => {

  const onClickPrev = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slidePrev();
  };

  const onClickNext = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.arrows}>
        <svg
          onClick={onClickPrev}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9993 20.6695C14.8093 20.6695 14.6193 20.5995 14.4693 20.4495L7.9493 13.9295C6.8893 12.8695 6.8893 11.1295 7.9493 10.0695L14.4693 3.54953C14.7593 3.25953 15.2393 3.25953 15.5293 3.54953C15.8193 3.83953 15.8193 4.31953 15.5293 4.60953L9.0093 11.1295C8.5293 11.6095 8.5293 12.3895 9.0093 12.8695L15.5293 19.3895C15.8193 19.6795 15.8193 20.1595 15.5293 20.4495C15.3793 20.5895 15.1893 20.6695 14.9993 20.6695Z"
            fill="#262626"
          />
        </svg>

        <svg
          onClick={onClickNext}
          className={styles.right}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9993 20.6695C14.8093 20.6695 14.6193 20.5995 14.4693 20.4495L7.9493 13.9295C6.8893 12.8695 6.8893 11.1295 7.9493 10.0695L14.4693 3.54953C14.7593 3.25953 15.2393 3.25953 15.5293 3.54953C15.8193 3.83953 15.8193 4.31953 15.5293 4.60953L9.0093 11.1295C8.5293 11.6095 8.5293 12.3895 9.0093 12.8695L15.5293 19.3895C15.8193 19.6795 15.8193 20.1595 15.5293 20.4495C15.3793 20.5895 15.1893 20.6695 14.9993 20.6695Z"
            fill="#262626"
          />
        </svg>
      </div>
    </div>
  );
};
