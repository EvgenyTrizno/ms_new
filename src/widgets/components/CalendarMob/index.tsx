import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import cn from "clsx";

export const CalendarMob = () => {
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.currentDate}>
        <span>17</span> Марта 2024
      </h5>

      <div className={styles.dates}>
        <Swiper
          style={{ overflowX: "hidden" }}
          slidesPerView={7}
          slidesPerGroup={7}
        >
          <SwiperSlide>
            <div className={cn(styles.item, styles.active)}>
              <span>Пн</span>

              <button>15</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Вт</span>

              <button>16</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Ср</span>

              <button>17</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Чт</span>

              <button>18</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Пт</span>

              <button>19</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Сб</span>

              <button>20</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Вс</span>

              <button>21</button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.item}>
              <span>Пн</span>

              <button>15</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Вт</span>

              <button>16</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Ср</span>

              <button>17</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Чт</span>

              <button>18</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Пт</span>

              <button>19</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Сб</span>

              <button>20</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.item}>
              <span>Вс</span>

              <button>21</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
